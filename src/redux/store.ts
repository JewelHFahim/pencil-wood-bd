import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";

// const preloadedState = {
//   cart: JSON.parse(localStorage.getItem("cart")) || {
//     products: [],
//     total: 0,
//     totalQuantity: 0,
//   },
// };

const store = configureStore({
  reducer: {
    // cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;


// import { configureStore } from "@reduxjs/toolkit";
// import { apiSlice } from "../api/apiSlice";

// export const store = configureStore({
//   reducer: {
//     [apiSlice.reducerPath]: apiSlice.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
