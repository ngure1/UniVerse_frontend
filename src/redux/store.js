import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/features/auth/authSlice";
import { baseApi } from "@/redux/baseApiSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		[baseApi.reducerPath]: baseApi.reducer,
	},
	middleware: (getDefaultmiddleware) => {
		getDefaultmiddleware().concat(baseApi.middleware);
	},
	devTools: process.env.NODE_ENV !== "production",
});
