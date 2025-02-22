import { Link } from "react-router";

const CheckoutFooter = () => {
  return (
    <div className="mt-10 md:mt-24 border-t border-gray-300 text-xs flex flex-wrap items-center justify-center gap-5 pt-5 text-cyan-500">
      <Link
        to=""
        className="hover:text-teal-600 underline-offset-2 underline transition-all duration-150"
      >
        Refund policy
      </Link>
      <Link
        to=""
        className="hover:text-teal-600 underline-offset-2 underline transition-all duration-150"
      >
        Shipping policy
      </Link>
      <Link
        to=""
        className="hover:text-teal-600 underline-offset-2 underline transition-all duration-150"
      >
        Privacy policy
      </Link>
      <Link
        to=""
        className="hover:text-teal-600 underline-offset-2 underline transition-all duration-150"
      >
        Trems service
      </Link>
    </div>
  );
};

export default CheckoutFooter;
