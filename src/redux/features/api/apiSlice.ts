import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
const token = Cookies.get("pencil");

export const apiSlice = createApi({
  reducerPath: "pencilwood",
  baseQuery: fetchBaseQuery({
    // baseUrl: BASE_URL,
    baseUrl: "https://api.pencilwoodbd.org",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("AUthorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["users", "products", "orders", "carts"],
  endpoints: () => ({}),
});
