import React, { useState } from "react";
import { CardHeader } from "../../shadcnComponents/card";
import Link from "next/link";
import AvatarProfile from "../profile/AvatarProfile";
import {
	VerifiedIcon,
	UserRoundPlus,
	EllipsisVertical,
	SquarePen,
	Trash2,
} from "lucide-react";
import { Button } from "../../shadcnComponents/button";
import { useFollowToggle } from "@/hooks/profile";
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
import { Dialog, DialogContent } from "@/components/ui/shadcnComponents/dialog";
import PostForm from "@/components/forms/postForm";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { usePostDeleteMutation } from "@/redux/features/posts/postsApiSlice";

const MyCardHeader = ({
	postId,
	profileId,
	pfpImage,
	first_name,
	last_name,
	isVerified,
	type,
	date,
	isFollowingCreator,
	forProfile = false,
	isOwner = false,
	content,
}) => {
	const handleFollow = useFollowToggle(1);

	const router = useRouter();
	// * deleting a post
	const [deletePost] = usePostDeleteMutation();

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
		deletePost({ post_id: postId })
			.unwrap()
			.then(() => {
				toast.success("Post deleted successfully", {
					theme: "colored",
				});
			})
			.catch((err) => {
				toast.error("Failed to delete the post", {
					theme: "colored",
				});
			});
	}
	const [showEditDialog, setShowEditDialog] = useState(false);

	const containsHtml = /<\/?[a-z][\s\S]*>/i.test(content);
	// * opening delete dialog
	function handleOpenEditDialog() {
		if (containsHtml) {
			router.push(`/new-post/${postId}`);
		} else {
			setShowEditDialog(true);
		}
	}

	// * closing delete dialog
	function handleCloseEditDialog() {
		setShowEditDialog(false);
	}

	return (
		<CardHeader className="w-full flex flex-row justify-between items-start">
			{/* // * container for post creator details */}
			{forProfile ? (
				<div className="flex items-center self-stretch gap-[0.75rem]">
					<AvatarProfile
						pfpImage={pfpImage}
						first_name={first_name}
						last_name={last_name}
						className="w-[4rem] h-[4rem]"
					/>
					<div className="flex flex-col justify-center items-start gap-[-0.75rem] w-full">
						<div className="flex items-center gap-[0.75rem]">
							<p className="body-text">
								{first_name} {last_name}
							</p>

							{isVerified && (
								<VerifiedIcon
									fill="#00B595"
									color="#ffff"
									className="dark:filter dark:invert"
									size={24}
								/>
							)}
						</div>
						<p className="text-sm muted">{type}</p>
						<p className="text-sm muted">{date}</p>
					</div>
				</div>
			) : (
				<Link
					href={`/profile/${profileId}`}
					className="w-full">
					<div className="flex items-center self-stretch gap-[0.75rem]">
						<AvatarProfile
							pfpImage={pfpImage}
							first_name={first_name}
							last_name={last_name}
							className="w-[4rem] h-[4rem]"
						/>
						<div className="flex flex-col justify-center items-start gap-[-0.75rem] w-full">
							<div className="flex items-center gap-[0.75rem]">
								<p className="body-text">
									{first_name} {last_name}
								</p>

								{isVerified && (
									<VerifiedIcon
										fill="#00B595"
										color="#ffff"
										className="dark:filter dark:invert"
										size={24}
									/>
								)}
							</div>
							<p className="text-sm muted">{type}</p>
							<p className="text-sm muted">{date}</p>
						</div>
					</div>
				</Link>
			)}

			{/* // * dropdown menu for edit & deleting a post */}
			{isOwner ? (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<div className="hover:bg-accent rounded-full p-1">
							<EllipsisVertical />
						</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56">
						<DropdownMenuItem onSelect={handleOpenEditDialog}>
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
			) : // * show confirm delete dialog

			// * is following creator for follow/following functionality

			isFollowingCreator ? (
				<Button
					variant="outline"
					className="gap-2"
					onClick={handleFollow}>
					<UserRoundPlus />
					Unfollow
				</Button>
			) : (
				<Button
					variant="outline"
					className="gap-2"
					onClick={handleFollow}>
					<UserRoundPlus />
					Follow
				</Button>
			)}
			{showDeleteDialog && (
				<AlertDialog
					open={showDeleteDialog}
					onOpenChange={handleCloseDeleteDialog}>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>
								Are you sure you want to delete this post
							</AlertDialogTitle>
							<AlertDialogDescription>
								This action cannot be undone and your post will
								permanently deleted
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
						<PostForm id={postId} />
					</DialogContent>
				</Dialog>
			)}
		</CardHeader>
	);
};

export default MyCardHeader;
