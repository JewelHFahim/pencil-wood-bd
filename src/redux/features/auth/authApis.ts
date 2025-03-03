import { AuthApiRegResponse, AuthApiResponse, RegistrationProps } from "../../../types/authTypes";
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

    registration: builder.mutation< AuthApiRegResponse, RegistrationProps>({
      query: (data) => ({
        method: "POST",
        url: "/auth/registration/",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),


  }),
  overrideExisting: false,
});

export const {useLoginMutation, useRegistrationMutation} = authApis;
export default authApis;
