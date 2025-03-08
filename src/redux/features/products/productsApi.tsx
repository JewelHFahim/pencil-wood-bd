import {
  CategoryApiResponse,
  DetailsProductApiResponse,
  ProductsApiResponse,
} from "../../../types/products_type";
import { apiSlice } from "../api/apiSlice";

export const productsApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    products: builder.query<ProductsApiResponse, void>({
      query: () => "/product/product/",
      providesTags: ["products"],
    }),

    productDetails: builder.query<DetailsProductApiResponse, { numericId: number; }>({
      query: ({numericId}) => `/product/product/${numericId}/`,
      providesTags: ["products"],
    }),

    category: builder.query<CategoryApiResponse, void>({
      query: () => "/product/category/",
      providesTags: ["products"],
    }),
    
  }),
  overrideExisting: false,
});

export const { useProductsQuery, useCategoryQuery, useProductDetailsQuery } = productsApis;
export default productsApis;
