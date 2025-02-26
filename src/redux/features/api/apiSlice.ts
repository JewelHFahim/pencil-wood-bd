import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "pencilwood",
  baseQuery: fetchBaseQuery({
    // baseUrl: BASE_URL,
    baseUrl: "https://api.pencilwoodbd.org",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["users", "products", "orders", "carts"],
  endpoints: () => ({}),
});
