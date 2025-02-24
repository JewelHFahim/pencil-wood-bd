import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_URL } from "../../../components/config/config";

export const apiSlice = createApi({
  reducerPath: "pencilwood",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    // baseUrl: "https://api.pencilwoodbd.org",
    prepareHeaders: () => {},
  }),
  endpoints: () => ({}),
  tagTypes: ["users", "products", "orders", "carts"],
});
