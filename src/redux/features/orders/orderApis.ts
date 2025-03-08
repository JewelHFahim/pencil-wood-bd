// import { CreateOrder } from "../../../types/authTypes";
import { apiSlice } from "../api/apiSlice";

export const orderApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    createOrder: builder.mutation({
      query: (data) => ({
        url: `/order/order-create/`,
        method: "POST",
        body: data,
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
