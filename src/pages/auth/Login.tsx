import { BsEye, BsEyeSlash } from "react-icons/bs";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { useLoginMutation } from "../../redux/features/auth/authApis";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import Loader from "../../utils/loader/Loader";

type Inputs = {
  email: string;
  phone: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/account"; // Redirect to intended page

  const [viewPass, setViewPass] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    try {
      const response = await login(data);
      console.log(response);
      if (response?.data?.access) {
        const token = response?.data?.access;
        toast.success("Login successful");
        Cookies.set("pencil", token, { secure: true, sameSite: "strict" });
        navigate(from, { replace: true });
      }
      if (response.error) {
        toast.error("Invalid credentials");
      }
      // if (response?.error?.error) {
      //   toast.error(response?.error?.data?.message);
      // }
    } catch (error) {
      console.log(error);
      toast.error("Try again later");
    }
  };

  return (
    <div className="h-full my-5">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[70vh]">
         <Loader/>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-[calc(100vh-220px)] flex flex-col justify-center items-center gap-y-5 pb-5"
        >
          <h1 className="mt-5 text-2xl font-medium">Login</h1>

          {/* Email */}
          <div className="w-full sm:w-[530px] mx-auto flex flex-col">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="h-[40px] w-full px-3 border border-gray-500 focus:outline-primary text-primary font-medium rounded-md"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm- text-red-500">Email is required</span>
            )}
          </div>

          {/* Password */}
          <div className="w-full sm:w-[530px] mx-auto flex flex-col">
            <label>Password</label>
            <div className="relative w-full">
              <input
                type={viewPass ? "text" : "password"}
                placeholder="Enter your password"
                className="h-[40px] w-full px-3 border border-gray-500 focus:outline-primary rounded-md text-primary"
                {...register("password", { required: true })}
              />
              <button
                onClick={() => setViewPass(!viewPass)}
                type="button"
                className="absolute right-5 top-1/2 -translate-y-1/2 text-lg text-gray-500"
              >
                {viewPass ? <BsEye /> : <BsEyeSlash />}
              </button>
            </div>

            {errors.phone && (
              <span className="text-sm- text-red-500">
                Password is required
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-max bg-primary hover:bg-orange-800 transition-all duration-300 ease-in-out px-8 py-2 rounded-sm text-white font-medium"
          >
            SIGN IN
          </button>

          <Link
            to="/account/register"
            className="hover:underline hover:text-primary transition-all duration-300 ease-in-out"
          >
            Create account
          </Link>
        </form>
      )}
    </div>
  );
};

export default Login;
