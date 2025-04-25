import { useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "../../utils/loader/Loader";
import { useCurrentUserQuery } from "../../redux/features/auth/authApis";

const AccountInfo = () => {
  const { register } = useForm();
  const [edit, setEdit] = useState(false);
  const { data: currentUser, isLoading } = useCurrentUserQuery();

  const inputCont =
    "w-full border-b-2 border-gray-300 flex flex-col md:flex-row md:items-center md:gap-10";
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
            Account Information
          </h3>

          {!edit && (
            <div className="mt-10 flex md:block flex-col gap-y-5">
              <div className={inputCont}>
                <label className="md:w-[20%] text-gray-400">Full name</label>
                <input
                  type="text"
                  defaultValue={currentUser?.profile?.name}
                  readOnly
                  className={inputCss}
                />
              </div>

              <div className={inputCont}>
                <label className="md:w-[20%] text-gray-400">Phone number</label>
                <input
                  type="text"
                  defaultValue={currentUser?.profile?.phone}
                  readOnly
                  className={inputCss}
                />
              </div>

              {/* <div className={inputCont}>
                <label className="md:w-[20%] text-gray-400">
                  Addrss in details
                </label>

                <select className={inputCss}>
                  {currentUser?.user_address?.map((item) => (
                    <option key={item?.id} value="">
                      {item?.street_01}, {item?.street_02}, {item?.upazila},
                      {item?.district},
                    </option>
                  ))}
                </select>
              </div> */}

              <div className={inputCont}>
                <label className="md:w-[20%] text-gray-400">
                  Email address
                </label>
                <input
                  type="text"
                  defaultValue={currentUser?.profile?.email}
                  readOnly
                  className={inputCss}
                />
              </div>

              <button
                onClick={() => setEdit(!edit)}
                type="button"
                className="mt-10 h-9 m-w-max px-12 bg-primary hover:bg-orange-600 text-white transition-all duration-150"
              >
                Edit
              </button>
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

export default AccountInfo;
