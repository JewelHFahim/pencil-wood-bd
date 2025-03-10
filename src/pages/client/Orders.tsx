import React, { Dispatch, FC } from "react";
import { useOrderListQuery } from "../../redux/features/orders/orderApis";
import Loader from "../../utils/loader/Loader";

interface OrdersProps {
  setOrderId: Dispatch<React.SetStateAction<number>>;
  setActive: Dispatch<React.SetStateAction<string>>;
}

const Orders: FC<OrdersProps> = ({ setOrderId, setActive }) => {
  const { data: orders, isLoading } = useOrderListQuery();
  console.log(orders);

  const handleSelectId = (id: number) => {
    setOrderId(id);
    setActive("invoice");
  };

  return (
    <div className="mx-auto h-full">
      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="overflow-x-auto flex flex-col justify-between h-full pb-5 md:pb-0">
          <table className="w-full table-auto text-sm text-left border-b-2 border-gray-300">
            <thead className="bg-gray-50 text-gray-600 font-medium">
              <tr>
                <th className="py-3 px-2 md:px-4 whitespace-nowrap">
                  Tracking id
                </th>
                <th className="py-3 px-4 whitespace-nowrap">Order date</th>
                <th className="py-3 px-4 whitespace-nowrap">Bill to- name</th>
                <th className="py-3 px-4 whitespace-nowrap">Total</th>
                <th className="py-3 px-4 whitespace-nowrap">Status</th>
                <th className="py-3 px-4 whitespace-nowrap">Details</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y divide-gray-200">
              {orders?.results?.data?.map((item) => (
                <tr key={item?.id}>
                  <td className="px-4 py-4 whitespace-nowrap">
                    {item?.tracking_id}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    {item?.created_at?.split("T")[0]}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">{item?.name}</td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    {item?.total_cost}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-orange-500">
                    {item?.status}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <button
                      type="button"
                      className="cursor-pointer"
                      onClick={() => handleSelectId(item?.id)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* <PaginationOrders
            orders={orders}
            page={page}
            setPage={setPage}
          /> */}
        </div>
      )}
    </div>
  );
};

export default Orders;
