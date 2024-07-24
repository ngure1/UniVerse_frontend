import React from "react";
import { Card, CardContent, CardHeader } from "../../shadcnComponents/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/shadcnComponents/dropdown-menu";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/shadcnComponents/alert-dialog";
import { Button } from "../../shadcnComponents/button";
import { Trash2, SquarePen, EllipsisVertical, Plus } from "lucide-react";
import {
	useEducationDeleteMutation,
	useEducationUpdateMutation,
} from "@/redux/features/educationList/educationApiSlice";
import { toast } from "react-toastify";
import { useState } from "react";
import EducationListForm from "@/components/forms/educationListForm";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/shadcnComponents/dialog";

const EducationList = ({
	educationId,
	institution_name,
	fieldOfStudy,
	startDate,
	endDate,
	isOwner = false,
}) => {
	const [deleteEducation] = useEducationDeleteMutation();

	// show delete dialog state
	const [showDeleteDialog, setShowDeleteDialog] = useState(false);

	// * opening delete dialog
	function handleShowDialog() {
		setShowDeleteDialog(true);
	}

	// * closing delete dialog
	function handleCloseDeleteDialog() {
		setShowDeleteDialog(false);
	}

	// * confirm delete dialog
	function handleConfirmDelete() {
		deleteEducation({ education_id: educationId })
			.unwrap()
			.then(() => {
				toast.success("Education deleted successfully", {
					theme: "colored",
				});
			})
			.catch((err) => {
				toast.error("Failed to delete", {
					theme: "colored",
				});
			});
	}
	const [showEditDialog, setShowEditDialog] = useState(false);

	// * opening delete dialog
	function handleOpenEditDialog() {
		if (containsHtml) {
			router.push(`/education/create/${educationId}`);
		} else {
			setShowEditDialog(true);
		}
	}

	// * closing delete dialog
	function handleCloseEditDialog() {
		setShowEditDialog(false);
	}
	return (
		<div>
			<Card className="">
				<CardHeader className="w-full flex flex-row justify-between items-start">
					<div>
						<p className="sub-heading-3">{institution_name}</p>
						<p className="flex text-sm muted gap-3 dark:filter dark:invert">
							<span>{startDate}</span>
							<span>{endDate}</span>
						</p>
					</div>

					{!isOwner ? (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<div className="hover:bg-accent rounded-full p-1">
									<EllipsisVertical />
								</div>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-56">
								<DropdownMenuItem
									onSelect={handleOpenEditDialog}>
									<SquarePen className="mr-2 h-4 w-4" />
									<span>Edit</span>
								</DropdownMenuItem>
								<DropdownMenuItem
									onSelect={handleShowDialog}
									className="hover:bg-destructive active:bg-destructive focus:bg-destructive hover:text-white active:text-white focus:text-white">
									<Trash2 className="mr-2 h-4 w-4" />
									<span>Delete</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					) : (
						<div></div>
					)}
					{/* // * show confirm delete dialog */}
					{showDeleteDialog && (
						<AlertDialog
							open={showDeleteDialog}
							onOpenChange={handleCloseDeleteDialog}>
							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>
										Are you sure you want to delete?
									</AlertDialogTitle>
									<AlertDialogDescription>
										This action cannot be undone and your
										post will permanently deleted
									</AlertDialogDescription>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<Button
										variant="outline"
										onClick={handleCloseDeleteDialog}>
										Cancel
									</Button>
									<AlertDialogAction className="bg-inherit hover:bg-inherit">
										<Button
											variant="destructive"
											onClick={handleConfirmDelete}>
											Continue
										</Button>
									</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					)}
					{showEditDialog && (
						<Dialog
							open={showEditDialog}
							onOpenChange={handleCloseEditDialog}>
							<DialogContent>
								<EducationListForm id={educationId} />
							</DialogContent>
						</Dialog>
					)}
				</CardHeader>

				<CardContent>
					<p className="text-lg">{fieldOfStudy}</p>
				</CardContent>
			</Card>
		</div>
	);
};

export default EducationList;
