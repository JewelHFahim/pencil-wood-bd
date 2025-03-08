import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const apiSlice = createApi({
  reducerPath: "pencilwood",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pencilwoodbd.org",
    prepareHeaders: (headers) => {
      const token = Cookies.get("pencil");
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      } else {
        headers.delete("Authorization");
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["users", "products", "orders", "carts"],
});
