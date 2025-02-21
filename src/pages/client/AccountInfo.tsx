import {useState } from "react";
import { useForm } from "react-hook-form";

  const AccountInfo = () => {
const isLoading = false;
    // const id = "123456";
    // const { data: user, isLoading: fetchloader } = useUserDetailsQuery(id);
    // const [updateUser, { isLoading: postLoader }] = useUpdateUserMutation(id);
    const { register, } = useForm();
    const [edit, setEdit] = useState(false);
  
    // useEffect(()=>{
    //   setValue("fullName", user?.data?.fullName);
    // },[])
  
    // const onSubmit = (data) => {
    //   toast.success("Information updated");
    //   setEdit(!edit);
    // };
  
    const inputCont =
      "w-full border-b-2 border-gray-300 flex flex-col md:flex-row md:items-center md:gap-10";
    const inputCss = "md:w-[80%] h-10 md:h-14 focus:outline-none bg-transparent";
  
    return (
      <div className="w-full h-full p-5">
        {isLoading ? (
          <div className="w-full h-full flex justify-center items-center">
            <p>Loading...</p>
          </div>
        ) : (
          <div className="w-full h-full text-sm">
            <h3 className="uppercase font-medium underline">Account Information</h3>
  
            {!edit && (
              <div className="mt-10 flex md:block flex-col gap-y-5">
                <div className={inputCont}>
                  <label className="md:w-[20%] text-gray-400">Full name</label>
                  <input
                    type="text"
                    // defaultValue={user?.data?.fullName}
                    readOnly
                    className={inputCss}
                  />
                </div>
  
                <div className={inputCont}>
                  <label className="md:w-[20%] text-gray-400">Phone number</label>
                  <input
                    type="text"
                    // defaultValue={user?.data?.phone}
                    readOnly
                    className={inputCss}
                  />
                </div>
  
                <div className={inputCont}>
                  <label className="md:w-[20%] text-gray-400">
                    Addrss in details
                  </label>
                  <input
                    type="text"
                    // defaultValue={user?.data?.address}
                    className={inputCss}
                  />
                </div>
  
                <div className={inputCont}>
                  <label className="md:w-[20%] text-gray-400">
                    Email address
                  </label>
                  <input
                    type="text"
                    // defaultValue={user?.data?.email}
                    readOnly
                    className={inputCss}
                  />
                </div>
  
                <button
                  onClick={() => setEdit(!edit)}
                  type="button"
                  className="mt-10 h-9 m-w-max px-12 bg-gray-800 hover:bg-gray-950 text-white transition-all duration-150"
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
                    defaultValue="Jewel Hossain Fahim"
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
                    defaultValue="01911209322"
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
                    value="jewelhfahim@mail.com"
                    readOnly
                    className="w-[80%] h-14 focus:outline-none bg-transparent text-gray-400"
                  />
                </div>
  
                <button
                  type="submit"
                  className="mt-10 h-9 m-w-max px-12 bg-gray-800 hover:bg-gray-950 text-white transition-all duration-150"
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
  