import { Dispatch, FC, SetStateAction } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { OrderListApiResponse } from "../../types/orderTypes";

interface PaginationOrdersProps {
  orders: OrderListApiResponse;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const PaginationOrders: FC<PaginationOrdersProps> = ({
  orders,
  page,
  // setPage,
}) => {
  // const handlePageination = (value: "dec" | "inc") => {
  //   if (value === "dec" && page > 1) {
  //     setPage(page - 1);
  //   }
  //   if (value === "inc" && page < orders?.totalPage) {
  //     setPage(page + 1);
  //   }
  // };

  return (
    <div className="w-full flex items-center justify-between px-4 py-1">
      <p className="text-sm text-gray-700 italic">
        {/* Total- {orders?.count} orders */}
        Total- {orders?.count} orders
      </p>

      <div className="flex items-center gap-6 text-lg text-gray-500">
        <button
          // onClick={() => handlePageination("dec")}
          disabled={page === 1}
          className="disabled:text-gray-300 hover:text-primary"
        >
          <MdOutlineArrowBackIos />
        </button>

        <p className="text-sm">
          {/* {orderList?.currentPage} of {orderList?.totalPage} page */}1 of 10
          page
        </p>

        <button
          // onClick={() => handlePageination("inc")}
          // disabled={page === orderList?.totalPage}
          className=" disabled:text-gray-300 hover:text-primary"
        >
          <MdOutlineArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default PaginationOrders;
