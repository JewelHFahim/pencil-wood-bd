import { ProductsApiResponse } from "../../../types/products_type";
import { apiSlice } from "../api/apiSlice";

export const cartApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation<ProductsApiResponse, { product: number; }>({
      query: (data) => ({
        method: "POST",
        url: `/product/cart/`,
        body: data,
      }),
      invalidatesTags: ["products"],
    }),

    // category: builder.query<CategoryApiResponse, void>({
    //   query: () => "/product/category/",
    //   providesTags: ["products"],
    // }),
  }),
  overrideExisting: false,
});

export const { useAddToCartMutation } = cartApis;
export default cartApis;
