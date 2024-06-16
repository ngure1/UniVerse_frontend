import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
	openDialog,
	closeDialog,
} from "@/redux/features/responsiveDialog/dialogSlice";

export const useDialog = () => {
	const dispatch = useDispatch();
	//read the isDialog open state form redux
	const { isDialogOpen } = useSelector((state) => state.dialog);
	function handleOpenDialog() {
		dispatch(openDialog());
	}
	function handleCloseDialog() {
		dispatch(closeDialog());
	}

	return { isDialogOpen, handleOpenDialog, handleCloseDialog };
};
