import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuthenticated: false,
};

const authSlice = createSlice({
	name: "authSlice",
	initialState,
	reducers: {
		setAuth: (state) => {
			state.isAuthenticated = true;
		},
		logout: (state) => {
			state.isAuthenticated = false;
		},
	},
});

const { actions, reducer } = authSlice;

export const { setAuth, logout } = actions;
export default reducer;
