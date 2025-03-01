import React, { Dispatch, FC, useState } from "react";
import PaginationOrders from "../../utils/paginations/PaginationOrders";

interface OrdersProps {
  setOrderId: Dispatch<React.SetStateAction<string>>;
  setActive: Dispatch<React.SetStateAction<string>>;
}

const Orders: FC<OrdersProps> = ({ setOrderId, setActive }) => {
  const isLoading = false;
  const orderList = { totalPage: 12, totalOrders: 3, currentPage: 1 };

  //   const userId = Cookies.get("uid");
  const [page, setPage] = useState<number>(1);
  //   const { data: orderList, isLoading } = useGetOrdersQuery({ userId, page });

  const handleSelectId = (id: string) => {
    console.log("Hited");
    setOrderId(id);
    setActive("invoice");
  };

  return (
    <div className="mx-auto h-full">
      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <p>Loading...Orders</p>
        </div>
      ) : (
        <div className="overflow-x-auto flex flex-col justify-between h-full pb-5 md:pb-0">
          <table className="w-full table-auto text-sm text-left border-b-2 border-gray-300">
            <thead className="bg-gray-50 text-gray-600 font-medium">
              <tr>
                <th className="py-3 px-2 md:px-4 whitespace-nowrap">Order no</th>
                <th className="py-3 px-4 whitespace-nowrap">Order date</th>
                <th className="py-3 px-4 whitespace-nowrap">Bill to- name</th>
                <th className="py-3 px-4 whitespace-nowrap">Total</th>
                <th className="py-3 px-4 whitespace-nowrap">Status</th>
                <th className="py-3 px-4 whitespace-nowrap">Details</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y divide-gray-200">
              {[...Array(5)].map((_, idx) => (
                <tr key={idx}>
                  <td className="px-4 py-4 whitespace-nowrap">
                    {/* {item._id?.slice(-5)} */} 123
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    {/* {item.createdAt?.split("T")[0]} */} 11.33 pm
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    {/* {item?.user_id?.fullName} */} Jewel Hossain Fahim
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    {/* {item?.total_price} */} 1200
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-orange-500">
                    {/* {item?.order_status} */} pending
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <button
                      type="button"
                      className="cursor-pointer"
                      // onClick={() => { handleSelectId(item?._id), setActive("invoice");}}
                      onClick={() => handleSelectId("1")}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* {orderList?.data?.length > 0 && (
            <PaginationOrders
              orderList={orderList}
              page={page}
              setPage={setPage}
            />
          )} */}

          <PaginationOrders
            orderList={orderList}
            page={page}
            setPage={setPage}
          />
        </div>
      )}
    </div>
  );
};

export default Orders;
