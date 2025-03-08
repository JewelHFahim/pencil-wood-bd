import { CartApiResponse, CartListApiResponse, DetailsProductApiResponse } from "../../../types/products_type";
import { apiSlice } from "../api/apiSlice";

export const cartApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    addToCart: builder.mutation<CartApiResponse, { product: number, quantity: number }>({
      query: (data) => ({
        url: `/product/cart/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),


    removeFromCart: builder.mutation<DetailsProductApiResponse, { id: number, data:{action: string} }>({
      query: ({id, data}) => ({
        method: "PATCH",
        url: `/product/cart/${id}/`,
        body: data,
      }),
      invalidatesTags: ["products"],
    }),


    
    deleteFromCart: builder.mutation<DetailsProductApiResponse, { id: number}>({
      query: ({id}) => ({
        method: "DELETE",
        url: `/product/cart/${id}/`,
      }),
      invalidatesTags: ["products"],
    }),


    cartList: builder.query<CartListApiResponse, void>({
      query: () => "/product/cart/",
      providesTags: ["products"],
    }),


  }),
  overrideExisting: false,
});

export const { useAddToCartMutation, useCartListQuery, useRemoveFromCartMutation, useDeleteFromCartMutation } = cartApis;
export default cartApis;
