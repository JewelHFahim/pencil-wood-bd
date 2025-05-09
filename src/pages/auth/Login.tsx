import { BsEye, BsEyeSlash } from "react-icons/bs";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../../redux/features/auth/authApis";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { IoMdRefresh } from "react-icons/io";

type Inputs = {
  email: string;
  phone: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/account";
  const [viewPass, setViewPass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [login, { isLoading }] = useLoginMutation();

  // Scroll Effect
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await login(data).unwrap();

      if (response?.status) {
        const token = response.token.access;
        toast.success("Login successful");
        Cookies.set("pencil", token, { secure: true, sameSite: "strict" });
        navigate(from, { replace: true });
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Try again later");
    }
  };

  return (
    <div className="h-full my-5 min-h-[calc(100vh-220px)]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full flex flex-col justify-center items-center gap-y-5 pb-5"
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
            <span className="text-sm- text-red-500">Password is required</span>
          )}
        </div>

        <button
          type={ isLoading ? "button" : "submit" } 
          className="w-max bg-primary hover:bg-orange-800 transition-all duration-300 ease-in-out px-8 py-2 rounded-sm text-white font-medium cursor-pointer disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? (
            <IoMdRefresh className="animate-spin w-5 h-6 mx-5" />
          ) : (
            "SIGN IN"
          )}
        </button>

        <Link
          to="/account/register"
          className="hover:underline hover:text-primary transition-all duration-300 ease-in-out"
        >
          Create account
        </Link>
      </form>
    </div>
  );
};

export default Login;
