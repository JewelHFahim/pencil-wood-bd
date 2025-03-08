import {
  AuthApiRegResponse,
  AuthApiResponse,
  RegistrationProps,
  UserApiResponse,
} from "../../../types/authTypes";
import { apiSlice } from "../api/apiSlice";

const authApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthApiResponse, { email: string; password: string }>({
      query: (data) => ({
        method: "POST",
        url: "/auth/login/",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    registration: builder.mutation<AuthApiRegResponse, RegistrationProps>({
      query: (data) => ({
        method: "POST",
        url: "/auth/registration/",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    currentUser: builder.query<UserApiResponse, void>({
      query: () => "/auth/user/profile/",
      providesTags: ["products"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoginMutation,
  useRegistrationMutation,
  useCurrentUserQuery,
} = authApis;
export default authApis;
