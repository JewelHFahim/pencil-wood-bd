import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import MobileOrderSummery from "../utils/MobileOrderSummery";
import SubmitButton from "../utils/buttons/SubmitButton";
import CheckoutFooter from "../utils/CheckoutFooter";
import OrderListAndPriceSummery from "../utils/OrderListAndPriceSummery";
import { useCurrentUserQuery } from "../redux/features/auth/authApis";
import { useCreateOrderMutation } from "../redux/features/orders/orderApis";
import { IOrderPayload } from "../types/authTypes";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

type Address =
  | { existing_address: number } // Case 1: Existing Address
  | { street: string; upazila: string; district: string }; // Case 2: New Address

export default function Checkout() {
  const isMatch = true;
  const navigate = useNavigate();
  const [existsAddress, setExistsAddress] = useState<boolean>(false);
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IOrderPayload>();
  const { data: currentUser } = useCurrentUserQuery();

  useEffect(() => {
    if (currentUser) {
      setValue("name", currentUser?.profile?.name);
      setValue("phone_number", currentUser?.profile?.phone);
    }
  }, [currentUser, setValue]);

  const onSubmit = async (data: IOrderPayload) => {
    const address: Address = existsAddress
      ? { existing_address: data.existing_address as number }
      : {
          street: data.street as string,
          upazila: data.upazila as string,
          district: data.district as string,
        };

    const payload: IOrderPayload = {
      name: data.name,
      phone_number: data.phone_number,
      ...address,
    };

    try {
      const response = await createOrder(payload).unwrap();
      console.log(response);
      if (response?.status) {
        toast.success(response?.message);
        navigate("/account");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  const inputStyle =
    "w-full h-full focus:outline-primary focus:ring-2 focus:ring-primary transition-all duration-150 px-3 pt-5 rounded-md";
  const inputCotainer =
    "relative h-[55px] border border-gray-400 w-full mt-1 text-sm rounded-md";
  const labelStyle = "absolute top-1 left-3 text-[11px] text-gray-400";

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-[70vh]">
          <p>Loading.</p>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Order Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:w-1/2 overflow-auto py-5 lg:py-8 md:pl-1 md:pr-6"
          >
            {/* Contact */}
            <div>
              <h2 className="text-lg font-medium">Primary Contact</h2>

              <div className={inputCotainer}>
                <label className={labelStyle}>Email or phone number</label>
                <input
                  type="text"
                  placeholder="Email or mobile phone number"
                  className={inputStyle}
                  defaultValue={currentUser?.profile?.email}
                  readOnly
                  // {...register("contact", { required: true })}
                />
              </div>
            </div>

            {/* Name, Address, City, PostalCode, Phone */}
            <div className="mt-5">
              <h2 className="text-lg font-medium">Delivery</h2>

              {/* Name */}
              <div className={inputCotainer}>
                <p className={labelStyle}> Full name </p>
                <input
                  type="text"
                  placeholder="Full name"
                  className={inputStyle}
                  defaultValue={currentUser?.profile?.name}
                  {...register("name")}
                />
                {errors.name && (
                  <p className={`text-red-500 text-xs`}>
                    Full name is required
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className={`mt-5 ${inputCotainer}`}>
                <p className={labelStyle}>Phone</p>
                <input
                  type="text"
                  placeholder="Phone"
                  className={inputStyle}
                  defaultValue={currentUser?.profile?.phone}
                  {...register("phone_number")}
                />
                {errors.phone_number && (
                  <span className="text-red-500 text-xs">
                    Phonr number is required
                  </span>
                )}
              </div>

              {/* Switch Address */}
              <div className="mt-5 flex items-center gap-2">
                <div
                  onClick={() => setExistsAddress(!existsAddress)}
                  className="flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    checked={existsAddress ? true : false}
                    readOnly
                  />
                  <p>Existing address</p>
                </div>
                <span className="text-gray-300">|</span>
                <div
                  onClick={() => setExistsAddress(!existsAddress)}
                  className="flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    checked={!existsAddress ? true : false}
                    readOnly
                  />
                  <p>New address</p>
                </div>
              </div>

              {/* Existing address */}
              {existsAddress && (
                <div className={`mt-5 ${inputCotainer}`}>
                  <p className={labelStyle}>Address</p>
                  <select
                    {...register("existing_address", { required: true })}
                    className={inputStyle}
                  >
                    <option hidden>Select Address</option>
                    {currentUser?.user_address?.map((ads) => (
                      <option key={ads?.id} value={ads?.id}>
                        {ads?.street_01}, {ads?.upazila}, {ads?.district},
                        {ads?.country},
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {!existsAddress && (
                <>
                  {/* Street */}
                  <div className={`mt-5 ${inputCotainer}`}>
                    <p className={labelStyle}>Street</p>
                    <input
                      type="text"
                      placeholder="Street name, number"
                      className={inputStyle}
                      {...register("street", { required: true })}
                    />
                    {errors.street && (
                      <span className="text-red-500 text-xs">
                        Street is required
                      </span>
                    )}
                  </div>

                  {/* upazila */}
                  <div className={`mt-5 ${inputCotainer}`}>
                    <p className={labelStyle}>Upazila</p>
                    <input
                      type="text"
                      placeholder="Upazila name"
                      className={inputStyle}
                      {...register("upazila", { required: true })}
                    />
                    {errors.upazila && (
                      <span className="text-red-500 text-xs">
                        Upazila name is required
                      </span>
                    )}
                  </div>

                  {/* district */}
                  <div className={`mt-5 ${inputCotainer}`}>
                    <p className={labelStyle}>District</p>
                    <input
                      type="text"
                      placeholder="District name"
                      className={inputStyle}
                      {...register("district", { required: true })}
                    />
                    {errors.district && (
                      <span className="text-red-500 text-xs">
                        District name is required
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Mobile Order Summery */}
            <MobileOrderSummery
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              isMatch={isMatch}
            />

            {/* Submit Button */}
            <SubmitButton />

            {/* Footer */}
            <CheckoutFooter />
          </form>

          {/* Large Device Order Summery */}
          <div className="hidden lg:block lg:w-1/2 sticky top-0 z-50 bg-[#e8f3f6] md:p-8">
            <OrderListAndPriceSummery />
          </div>
        </div>
      )}
    </div>
  );
}
