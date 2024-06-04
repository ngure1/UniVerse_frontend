import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/features/auth/authSlice";
import { baseApi } from "@/redux/baseApiSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		[baseApi.reducerPath]: baseApi.reducer,
	},
	devTools: process.env.NODE_ENV !== "production",
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(baseApi.middleware),
});
