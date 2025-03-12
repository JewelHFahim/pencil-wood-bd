import {
  CategoryApiResponse,
  DetailsProductApiResponse,
  ProductsApiResponse,
} from "../../../types/products_type";
import { apiSlice } from "../api/apiSlice";

export const productsApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    products: builder.query<ProductsApiResponse, void>({
      query: () => `/product/product/`,
      providesTags: ["products"],
    }),

    // allProducts: builder.query<ProductsApiResponse, {query:string}>({
    //   query: ({query}) => `/product/product/?search=${query}`,
    //   providesTags: ["products"],
    // }),

    allProducts: builder.query<ProductsApiResponse, {query:string, page:number}>({
      query: ({ page, query }) =>{ 
        console.log(`/product/product/?page=${page}&search=${query}`)
       return  `/product/product/?page=${page}&search=${query}`
      
      },
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

export const {useProductsQuery, useLazyAllProductsQuery, useCategoryQuery, useProductDetailsQuery } = productsApis;
export default productsApis;
