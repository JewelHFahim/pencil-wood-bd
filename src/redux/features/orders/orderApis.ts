import { IOrderPayload, OrderApiResponse } from "../../../types/authTypes";
import { OrderListApiResponse, SingleOrderAPiResponse } from "../../../types/orderTypes";
import { apiSlice } from "../api/apiSlice";

export const orderApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<OrderApiResponse, IOrderPayload>({
      query: (payload) => ({
        url: `/order/order-create/`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["products"],
    }),

    orderList: builder.query<OrderListApiResponse, void>({
      query: () => "/order/order/",
      providesTags: ["products"],
    }),

    orderDetails: builder.query<SingleOrderAPiResponse, { id: number }>({
      query: ({id}) => `/order/order/${id}/`,
      providesTags: ["products"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateOrderMutation,
  useOrderListQuery,
  useOrderDetailsQuery,
} = orderApis;
export default orderApis;
