import {
  NewsFeedApiResponse,
  SliderApiResponse,
  SocialApiResponse,
} from "../../../types/othersTypes";
import {
  FooterLinksApis,
  SiteConactApiRes,
  SiteContentApiResponse,
} from "../../../types/siteContent";
import { apiSlice } from "../api/apiSlice";

export const siteApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sliderList: builder.query<SliderApiResponse, void>({
      query: () => "/site/home-slider/",
      providesTags: ["products"],
    }),

    newFeed: builder.query<NewsFeedApiResponse, void>({
      query: () => "/site/news-feed/",
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

    contactInformation: builder.query<SiteConactApiRes, void>({
      query: () => `/site/contact-information/`,
      providesTags: ["products"],
    }),

    footerLinks: builder.query<FooterLinksApis, void>({
      query: () => `/site/footer-tag-link/`,
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
  useAboutUsQuery,
  useContactInformationQuery,
  useFooterLinksQuery,
  useNewFeedQuery,
} = siteApis;
export default siteApis;
