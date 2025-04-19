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

  
  allProducts: builder.query<ProductsApiResponse, { query?: string; searchQuery?: string, page: number; category?: string; minPrice?: number | null; maxPrice?: number | null; sort: string | null }>({
  query: ({ page, query, searchQuery, category, minPrice, maxPrice, sort }) => {
    const hasFilters = query || searchQuery || category;

    let url = `/product/product/?`;

    if (!hasFilters) {
      url += `page=${page}`;
    }
    if (query || searchQuery) {
      url += `&search=${encodeURIComponent(query || searchQuery || "")}`;
    }
  
    if (category) {
      url += `&category=${category}`;
    }
    if (minPrice !== null && minPrice !== undefined) {
      url += `&min_price=${minPrice}`;
    }
    if (maxPrice !== null && maxPrice !== undefined) {
      url += `&max_price=${maxPrice}`;
    }
    if (sort !== null && sort !== "") {
      url += `&ordering=${sort}`;
    }

    // console.log(url);
    return url;
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
