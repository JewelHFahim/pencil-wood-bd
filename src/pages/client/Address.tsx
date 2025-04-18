import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCurrentUserQuery } from "../../redux/features/auth/authApis";
import Loader from "../../utils/loader/Loader";
import { GoTrash } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";

const Address = () => {
  const { register } = useForm();
  const [edit, setEdit] = useState(false);
  const { data: currentUser, isLoading } = useCurrentUserQuery();
  console.log(currentUser?.user_address);

  const inputCont =
    "w-full border-b-2 border-gray-300 flex flex-col md:flex-row justify-between md:items-center md:gap -5";
  const inputCss = "md:w-[80%] h-10 md:h-14 focus:outline-none bg-transparent";




  return (
    <div className="w-full h-full">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[70vh]">
          <Loader />
        </div>
      ) : (
        <div className="w-full h-full text-sm">
          <h3 className="uppercase text-base font-medium bg-gray-100 px-2 py-3">
            Address
          </h3>

          {!edit && (
            <div className="mt-10 flex md:block flex-col gap-y-5">
              {currentUser?.user_address?.map((address, index) => {
                const addressParts = [
                  address?.street_01,
                  address?.street_02,
                  address?.post_office,
                  address?.upazila,
                  address?.district,
                  address?.country,
                ].filter(Boolean); // removes null, undefined, empty strings

                return (
                  <div key={address?.id} className={inputCont}>
                    <div className="md:w-[10%] flex items-center justify-between">
                      <label className=" text-gray-400">
                        Address {index + 1}
                      </label>

                      <div className="md:w-[10%] md:hidden text-gray-400 flex justify-center items-center gap-3 text-lg">
                        <button className="hover:text-orange-400 cursor-pointer">
                          <FaRegEdit />
                        </button>

                        <button className="hover:text-red-500 cursor-pointer">
                          <GoTrash />
                        </button>
                      </div>
                    </div>

                    <input
                      type="text"
                      defaultValue={addressParts.join(", ")}
                      readOnly
                      className={inputCss}
                    />

                    <div className="hidden md:w-[10%] text-gray-400 md:flex justify-center items-center gap-3 text-lg">
                      <button onClick={()=> setEdit(false)} className="hover:text-orange-400 cursor-pointer">
                        <FaRegEdit />
                      </button>

                      <button className="hover:text-red-500 cursor-pointer">
                        <GoTrash />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {edit && (
            <form
              // onSubmit={handleSubmit(onSubmit)}
              className="mt-10 flex md:block flex-col gap-y-5"
            >
              <div className={inputCont}>
                <label className="md:w-[20%] text-gray-400">
                  Full name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue={currentUser?.profile?.name}
                  className={inputCss}
                  {...register("fullName")}
                />
              </div>

              <div className={inputCont}>
                <label className="md:w-[20%] text-gray-400">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue={currentUser?.profile?.phone}
                  className={inputCss}
                  {...register("contact")}
                />
              </div>

              <div className={inputCont}>
                <label className="md:w-[20%] text-gray-400">
                  Addrss in details <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="73/3 Monipuri Para, Farmgate, Dhaka- 1215"
                  className={inputCss}
                  {...register("address")}
                />
              </div>

              <div className={inputCont}>
                <label className="md:w-[20%] text-gray-400">
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue={currentUser?.profile?.email}
                  readOnly
                  className="w-[80%] h-14 focus:outline-none bg-transparent text-gray-400"
                />
              </div>

              <button
                type="submit"
                className="mt-10 h-9 m-w-max px-12 bg-primary hover:bg-orange-600 text-white transition-all duration-150"
              >
                Save
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Address;
