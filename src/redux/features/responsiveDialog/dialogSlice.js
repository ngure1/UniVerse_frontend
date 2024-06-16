import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isDialogOpen: false,
};

const dialogSlice = createSlice({
	name: "dialogSlice",
	initialState,
	reducers: {
		openDialog: (state) => {
			state.isDialogOpen = true;
		},
		closeDialog: (state) => {
			state.isDialogOpen = false;
		},
	},
});

const { actions, reducer } = dialogSlice;
export const { openDialog, closeDialog } = actions;
export default reducer;
