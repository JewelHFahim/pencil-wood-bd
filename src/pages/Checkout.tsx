import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import MobileOrderSummery from "../utils/MobileOrderSummery";
import SubmitButton from "../utils/buttons/SubmitButton";
import CheckoutFooter from "../utils/CheckoutFooter";
import OrderListAndPriceSummery from "../utils/OrderListAndPriceSummery";
import { useCartListQuery } from "../redux/features/cart/cartApis";
import { useCurrentUserQuery } from "../redux/features/auth/authApis";
import { useCreateOrderMutation } from "../redux/features/orders/orderApis";
import toast from "react-hot-toast";

interface IAddress {
  fullName: string;
  phone_number: string;
  addressData: string;
  street?: string;
  upazila?: string;
  district?: string;
  existing_address?: string;
}

interface IOrderInfo {
  fullName: string;
  phone_number: string;
  addressData: string | IAddressDetails;
}

interface IAddressDetails {
  street?: string;
  upazila?: string;
  district?: string;
}

export default function Checkout() {
  const isMatch = true;
  const [existsAddress, setExistsAddress] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { data: cartList, isLoading } = useCartListQuery();
  const { data: currentUser } = useCurrentUserQuery();
  const [createOrder] = useCreateOrderMutation();
  console.log(currentUser);

  console.log(cartList);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (currentUser?.data) {
      setValue("fullName", currentUser?.data?.username);
      // setValue("contact", currentUser?.data?.phone);
      //       setValue("delivery_address", userDetails?.data?.address);
      //       setValue("contact_phone", userDetails?.data?.phone);
    }
  }, [currentUser, setValue]);

  const onSubmit = async (data: IAddress) => {
    console.log(data);

    const address: IAddressDetails = {
      street: data.street,
      upazila: data.upazila,
      district: data.district,
    };

    const existing_address = data.existing_address;

    const addressData: string | IAddressDetails = existing_address
      ? existing_address
      : address;

    const orderInfos: IOrderInfo = {
      fullName: data.fullName,
      phone_number: data.phone_number,
      addressData,
    };

    try {
      const response = await createOrder(orderInfos);
      console.log(response)

      // if (response?.status) {
      //   toast.success("Order created successfully");
      // }
      // if (response?.error) {
      //   toast.error("Something went wrong");
      // }
    } catch (error) {
      console.log(error);
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
                  defaultValue={currentUser?.data?.email}
                  {...register("contact", { required: true })}
                />
                {errors.contact && (
                  <span className="text-red-500 text-xs">
                    Contact is required
                  </span>
                )}
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
                  {...register("fullName")}
                />
                {errors.fullName && (
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
                  defaultValue={"01911209322"}
                  {...register("contact_phone")}
                />
                {errors.contact_phone && (
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
                    <option value="">Select Address</option>
                    {[...Array(2)].map((item) => (
                      <option key={item?.id} value="">
                        Farmgate, Dhaka
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

            {/* Shipping Methods */}
            {/* <ShppingCost /> */}

            {/* Payment Methods */}
            {/* <div className="mt-8">
              <h2 className="text-lg font-medium"> Payment </h2>
              <p
                className={`text-[13px] ${
                  !isMatch ? "text-red-500" : "text-gray-400"
                }`}
              >
                Outside Dhaka delivery charge 140tk have to by bKash/Nagad.
              </p>

              <div className="border border-gray-400 rounded-md mt-3">
                <PaymentMethodAccrodian
                  selectedMethod={selectedMethod}
                  setSelectedMethod={setSelectedMethod}
                />

                <div
                  className={`bg-gray-50 p-4 pb-8 text-sm rounded-b-md ${
                    selectedMethod === "bKash" ? "h-max" : "h-0 hidden"
                  }`}
                >
                  <DeliveryChargePaymentProcess />

                  <div className="mt-3 w-full flex flex-col md:flex-row items-center gap-3">
                    <div className="w-full md:w-1/2 relative h-[55px] border mt-1 text-sm rounded-md">
                      <p className={labelStyle}>
                        Send money number{" "}
                        <span className="text-red-500">*</span>
                      </p>
                      <input
                        type="text"
                        placeholder="Send money number"
                        className={inputStyle}
                        {...register("payment_number", {
                          required:
                            selectedMethod === "bKash" || (!isMatch && true),
                        })}
                      />
                      {errors.payment_number && (
                        <span className="text-red-500 text-sm mt-1">
                          Send money number is required
                        </span>
                      )}
                    </div>

                    <div className="w-full md:w-1/2 relative h-[55px] border mt-4 md:mt-0 text-sm rounded-md">
                      <p className={labelStyle}>
                        TrxID <span className="text-red-500">*</span>
                      </p>
                      <input
                        type="text"
                        placeholder="TrxID"
                        className={inputStyle}
                        {...register("transaction_id", {
                          required:
                            selectedMethod === "bKash" || (!isMatch && true),
                        })}
                      />
                      {errors.transaction_id && (
                        <span className="text-red-500 text-sm mt-1">
                          TrxID is required
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

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

          {/* Order List and Price Summery */}
          <div className="hidden lg:block lg:w-1/2 sticky top-0 z-50 bg-[#e8f3f6] md:p-8">
            <OrderListAndPriceSummery />
          </div>
        </div>
      )}
    </div>
  );
}
