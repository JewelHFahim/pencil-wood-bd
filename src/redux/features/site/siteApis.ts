import {
  SliderApiResponse,
  SocialApiResponse,
} from "../../../types/othersTypes";
import { SiteContentApiResponse } from "../../../types/siteContent";
import { apiSlice } from "../api/apiSlice";

export const siteApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    sliderList: builder.query<SliderApiResponse, void>({
      query: () => "/site/home-slider/",
      providesTags: ["products"],
    }),

    socialLinks: builder.query<SocialApiResponse, void>({
      query: () => "/site/social-link/",
      providesTags: ["products"],
    }),

    searchProducts: builder.query({
      query: (search) => `/product/product/?search=${search}`,
      providesTags: ["products"],
    }),

    siteContent: builder.query<SiteContentApiResponse, void>({
      query: () => `/site/site-content/`,
      providesTags: ["products"],
    }),

    aboutUs: builder.query({
      query: () => `/site/about-us/`,
      providesTags: ["products"],
    }),

  }),
  overrideExisting: false,
});

export const {
  useSliderListQuery,
  useSocialLinksQuery,
  useSearchProductsQuery,
  useSiteContentQuery,
  useAboutUsQuery
} = siteApis;
export default siteApis;
