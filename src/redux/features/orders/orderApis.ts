// import { CreateOrder } from "../../../types/authTypes";
import { IOrderInfo, OrderApiResponse } from "../../../types/authTypes";
import { apiSlice } from "../api/apiSlice";

export const orderApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    createOrder: builder.mutation<OrderApiResponse, IOrderInfo>({
      query: (datas) => ({
        url: `/order/order-create/`,
        method: "POST",
        body: datas,
      }),
      invalidatesTags: ["products"],
    }),

    // cartList: builder.query<SingleCartApiResponse[], void>({
    //   query: () => "/product/cart/",
    //   providesTags: ["products"],
    // }),
  }),
  overrideExisting: false,
});

export const { useCreateOrderMutation } = orderApis;
export default orderApis;
