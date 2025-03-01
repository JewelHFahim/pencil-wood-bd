import { AuthApiResponse } from "../../../types/authTypes";
import { apiSlice } from "../api/apiSlice";

const authApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation< AuthApiResponse, { email: string; password: string }>({
      query: (data) => ({
        method: "POST",
        url: "/auth/login/",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
  }),
  overrideExisting: false,
});

export const {useLoginMutation} = authApis;
export default authApis;
