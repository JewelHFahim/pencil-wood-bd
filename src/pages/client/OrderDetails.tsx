import React from "react";
import { useOrderDetailsQuery } from "../../redux/features/orders/orderApis";
import { useProductsQuery } from "../../redux/features/products/productsApi";
import Loader from "../../utils/loader/Loader";

interface OrderDetailsProps {
  id: number;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ id }) => {
  const { data: orderDetails, isLoading } = useOrderDetailsQuery({ id });

  console.log(orderDetails);

  const { data: allProducts } = useProductsQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <Loader />
      </div>
    );
  }

  const productInfo = (pid: number): string | undefined => {
    const product = allProducts?.data?.find((item) => item?.id === pid);
    return product?.name;
  };

  return (
    <div className="py-2 mt-5">
      {/* Billing / Address / Client infos*/}
      <div className="w-full lg:px-10">
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-start text-center gap-y-5 lg:text-end">
          <div className="col-span-4 text-start text-sm text-gray-600">
            <h3 className="font-medium text-black">Bill to:</h3>
            <p>{orderDetails?.data?.name ? orderDetails?.data?.name : "Customer Name"}</p>
            {orderDetails?.data?.phone_number && <p>{orderDetails?.data?.phone_number}</p>}
            <p className="w-[90%]">
              {orderDetails?.data?.address?.street_01},
              {orderDetails?.data?.address?.upazila},{orderDetails?.data?.address?.district}
            </p>
          </div>

          <div className="col-span-2 text-start text-sm text-gray-600">
            <h3 className="font-medium text-black">Invoice No:</h3>
            <p>Tracking id: {orderDetails?.data?.tracking_id}</p>
            <p>Date: {orderDetails?.data?.created_at?.split("T")[0]}</p>
          </div>
        </div>
      </div>

      {/*table head */}
      <div className="mt-5 w-full bg-primary text-white py-1 md:py-3 px-2 md:px-10 grid grid-cols-5 lg:grid-cols-6 text-end text-gray-70 uppercase text-sm md:text-base">
        <div className="col-span-2 md:col-span-3 text-start">Product</div>
        <div className="col-span-1 text-start">Price</div>
        <div className="col-span-1 text-center">Quantity</div>
        <div className="col-span-1 text-end">Total</div>
      </div>

      {/* product row */}
      <div className="flex flex-col px-2 md:px-10">
        {orderDetails?.data?.order_items?.map((product) => (
          <div
            key={product?.id}
            className="w-full border-b-2 border-gray-300 py-4"
          >
            <div className="w-full grid grid-cols-5 md:grid-cols-6 items-center text-end">
              <div className="col-span-2 md:col-span-3 text-start">
                <div className="">
                  <h2 className="text-sm md:text-base">
                    {productInfo(product?.product)}
                  </h2>
                </div>
              </div>

              <div className="col-span-1 text-start">
                <p className="text-sm md:text-base">Tk{product?.price}</p>
              </div>

              <div className="col-span-1 text-center">
                <p className="text-sm md:text-base">{product?.quantity}</p>
              </div>

              <div className="col-span-1">
                <p className="text-sm md:text-base">
                  Tk
                  {product?.total_price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*Sub Total */}
      <div className="w-full mt-2 md:mt-5 px-2 md:px-10">
        <div className="w-full grid grid-cols-12 items-center text-center lg:text-end text-sm md:text-base">
          <div className="col-span-6 md:col-span-8 text-xs text-gray-400 text-start">
            Terms & Conditions
          </div>
          <div className="col-span-3 md:col-span-2 text-end">Subtotal</div>
          <div className="col-span-3 md:col-span-2 text-end">
            Tk {orderDetails?.data?.total_cost}
          </div>
        </div>
      </div>

      {/* Shipping Charge */}
      <div className="w-full mt-2 px-2 md:px-10">
        <div className="w-full grid grid-cols-12 items-center text-cente text-sm md:text-base lg:text-end text-end">
          <div className="col-span-4 md:col-span-7"></div>
          <div className="col-span-5 md:col-span-3 border-b-2 border-gray-300 pb-2">
            Delivery Charge
          </div>
          <div className="col-span-3 md:col-span-2 border-b-2 border-gray-300 pb-2">
            Tk 150
          </div>
        </div>
      </div>

      {/* Total*/}
      <div className="w-full mt-2 px-2 md:px-10">
        <div className="w-full grid grid-cols-12 items-center text-end text-sm md:text-base lg:text-end">
          <div className="col-span-6 md:col-span-8"></div>
          <div className="col-span-3 md:col-span-2 font-medium">Total</div>
          <div className="col-span-3 md:col-span-2 font-medium">
            Tk {Number(orderDetails?.data?.total_cost) + 150}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
