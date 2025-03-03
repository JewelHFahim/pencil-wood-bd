import { ProductsApiResponse, SingleCartApiResponse } from "../../../types/products_type";
import { apiSlice } from "../api/apiSlice";

export const cartApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    addToCart: builder.mutation<ProductsApiResponse, { product: number }>({
      query: (data) => ({
        method: "POST",
        url: `/product/cart/`,
        body: data,
      }),
      invalidatesTags: ["products"],
    }),

    removeFromCart: builder.mutation<ProductsApiResponse, { id: number, action: string }>({
      query: ({id, action}) => ({
        method: "PUT",
        url: `/product/cart/${id}/`,
        body: action,
      }),
      invalidatesTags: ["products"],
    }),

    cartList: builder.query<SingleCartApiResponse[], void>({
      query: () => "/product/cart/",
      providesTags: ["products"],
    }),
  }),
  overrideExisting: false,
});

export const { useAddToCartMutation, useCartListQuery, useRemoveFromCartMutation } = cartApis;
export default cartApis;
