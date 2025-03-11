import {
  SliderApiResponse,
  SocialApiResponse,
} from "../../../types/othersTypes";
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
    
  }),
  overrideExisting: false,
});

export const { useSliderListQuery, useSocialLinksQuery } = siteApis;
export default siteApis;
