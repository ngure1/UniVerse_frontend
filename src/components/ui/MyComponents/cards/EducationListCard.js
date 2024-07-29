import React, { useState } from "react";
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
import { Trash2, SquarePen, EllipsisVertical } from "lucide-react";
import { useEducationDeleteMutation } from "@/redux/features/educationList/educationApiSlice";
import { toast } from "react-toastify";
import EducationListForm from "@/components/forms/educationListForm";
import { Dialog, DialogContent } from "@/components/ui/shadcnComponents/dialog";
import { useRouter } from "next/navigation";

const EducationListCard = ({
	educationId,
	institution_name,
	fieldOfStudy,
	startDate,
	endDate,
	isOwner = false,
}) => {
	const [deleteEducation] = useEducationDeleteMutation();
	const [showDeleteDialog, setShowDeleteDialog] = useState(false);
	const [showEditDialog, setShowEditDialog] = useState(false);
	const router = useRouter();

	// const containsHtml = /<\/?[a-z][\s\S]*>/i.test(fieldOfStudy);

	// function handleOpenEditDialog() {
	// 	if (containsHtml) {
	// 		router.push(`/education/${educationId}/`);
	// 	} else {
	// 		setShowEditDialog(true);
	// 	}
	// }
	console.log(educationId);
	function handleOpenEditDialog() {
		setShowEditDialog(true);
	}

	function handleCloseEditDialog() {
		setShowEditDialog(false);
	}

	function handleShowDialog() {
		setShowDeleteDialog(true);
	}

	function handleCloseDeleteDialog() {
		setShowDeleteDialog(false);
	}

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

					{/* Confirm Delete Dialog */}
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
										post will be permanently deleted.
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

					{/* Edit Dialog */}
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

export default EducationListCard;
