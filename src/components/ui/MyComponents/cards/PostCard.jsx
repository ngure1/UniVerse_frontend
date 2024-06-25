"use client";
import React, { useState, useEffect } from "react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/shadcnComponents/card";
import { Button } from "../../shadcnComponents/button";
import {
	Send,
	MessageSquareMore,
	Bookmark,
	VerifiedIcon,
	CalendarX,
	Globe,
	MapPin,
	UserRoundPlus,
	EllipsisVertical,
	SquarePen,
	Trash2,
	SendHorizonalIcon,
} from "lucide-react";
import Image from "next/legacy/image";
import AvatarProfile from "../profile/AvatarProfile";
import {
	useLike,
	useBookmark,
	useUnlike,
	useUnbookmark,
	useComment,
} from "@/hooks/postHooks";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/shadcnComponents/dropdown-menu";
import { Input } from "@/components/ui/shadcnComponents/input";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/shadcnComponents/alert-dialog";
import { useFollowToggle } from "@/hooks/profile";
import thumbsUp from "./thumbs-up.json";
import Lottie from "react-lottie-player";
import { LikeSVG, UnLikeSVG } from "@/app/landing/SVGIcon";
import DOMPurify from "dompurify";
import Link from "next/link";
import {
	usePostDeleteMutation,
	usePostsCommentListQuery,
} from "@/redux/features/posts/postsApiSlice";
import { toast } from "react-toastify";
import { usePostListQuery } from "@/redux/features/posts/postsApiSlice";

const PostCard = ({
	postId,
	profileId,
	pfpImage,
	first_name,
	last_name,
	type,
	date,
	title,
	content,
	postImage,
	isVerified,
	isPostDetails = false,
	forProfile = false,
	isOwner = false,
	isOnline,
	address,
	isLiked,
	isSaved,
	isFollowingCreator,
	likeCount,
	smallImage,
	bookmarkCount,
}) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [liked, setLiked] = useState(isLiked);
	const [animationComplete, setAnimationComplete] = useState(false);

	const handleLike = useLike(postId);
	const handleUnlike = useUnlike(postId);
	const handleBookmark = useBookmark(postId);
	const handleUnbookmark = useUnbookmark(postId);

	const handleFollow = useFollowToggle(1);

	const handleThumbsUp = () => {
		if (!liked) {
			handleLike();
			setIsPlaying(true);
			setAnimationComplete(false);
			setTimeout(() => {
				setIsPlaying(false);
				setAnimationComplete(true);
			}, 1000); // Assuming the animation duration is 1 second
		} else {
			handleUnlike();
			setIsPlaying(false);
			setAnimationComplete(false);
		}
		setLiked(!liked);
	};

	const sanitizedContent = DOMPurify.sanitize(content);

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

	// * comment
	//* show comment state
	const [showComment, setShowComment] = useState(false);
	function toggleComments() {
		setShowComment(!showComment);
	}
	//* comment text
	const [comment, setComment] = useState("");
	function handleCommentChange(e) {
		setComment(e.target.value);
	}
	// * comment submission
	const handleComment = useComment(postId, comment);
	function commentSubmit() {
		handleComment();
		setComment("");
	}

	return (
		<Card className="flex w-[58%] min-w-[33.25rem] py-[0.3rem] flex-col items-start rounded-[0.5rem] bg-white dark:bg-muted">
			{!forProfile && (
				<CardHeader className="w-full flex flex-row justify-between items-start">
					{/* // * container for post creator details */}
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
					{/* // * dropdown menu for edit & deleting a post */}
					{isOwner ? (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<div className="hover:bg-accent rounded-full p-1">
									<EllipsisVertical />
								</div>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-56">
								<DropdownMenuItem>
									<SquarePen className="mr-2 h-4 w-4" />
									<Link href="">Edit</Link>
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

					// * is following creator for follow/followign functionality

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
										Are you sure you want to delete this
										post
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
				</CardHeader>
			)}

			{isPostDetails ? (
				<CardContent className="flex flex-col items-start gap-[0.75rem] self-stretch h-[70%]">
					<div className="self-stretch h-[30%]">
						{title && <p className="sub-heading-3 p-1">{title}</p>}
						<div
							dangerouslySetInnerHTML={{
								__html: sanitizedContent,
							}}
						/>
					</div>
					{postImage ? (
						smallImage ? (
							<div className="rounded-[0.25rem] h-[22rem] w-full relative">
								<Image
									src={postImage}
									alt="Post Image"
									layout="fill"
									objectFit="cover"
								/>
							</div>
						) : (
							<div className="rounded-[0.25rem] min-h-[30rem] w-full relative">
								<Image
									src={postImage}
									alt="Post Image"
									layout="fill"
									objectFit="cover"
								/>
							</div>
						)
					) : (
						<></>
					)}
					{forEvents && (
						<Button
							className="w-full"
							variant="secondary">
							Register
						</Button>
					)}
				</CardContent>
			) : (
				<Link href={`/post/${postId}`}>
					<CardContent className="flex flex-col items-start gap-[0.75rem] self-stretch h-[70%]">
						<div className="self-stretch h-[30%]">
							{title && (
								<p className="sub-heading-3 p-1">{title}</p>
							)}
							<div
								dangerouslySetInnerHTML={{
									__html: sanitizedContent,
								}}
							/>
						</div>
						{postImage ? (
							smallImage ? (
								<div className="rounded-[0.25rem] h-[22rem] w-full relative">
									<Image
										src={postImage}
										alt="Post Image"
										layout="fill"
										objectFit="cover"
									/>
								</div>
							) : (
								<div className="rounded-[0.25rem] min-h-[30rem] w-full relative">
									<Image
										src={postImage}
										alt="Post Image"
										layout="fill"
										objectFit="cover"
									/>
								</div>
							)
						) : (
							<></>
						)}
					</CardContent>
				</Link>
			)}

			<CardFooter className="flex flex-col w-full gap-1 relative">
				<div className="flex items-start self-stretch border-y-2">
					<Button
						className="flex items-center cursor-pointer"
						variant="ghost"
						onClick={handleThumbsUp}>
						{liked && animationComplete ? (
							<LikeSVG />
						) : liked ? (
							<Lottie
								animationData={thumbsUp}
								loop={false}
								play={isPlaying}
								className="w-[2rem] h-[2rem] relative bottom-1"
							/>
						) : (
							<UnLikeSVG />
						)}
					</Button>
					<Button
						variant="ghost"
						onClick={toggleComments}>
						<MessageSquareMore />
					</Button>
					<Button variant="ghost">
						<Send />
					</Button>
					<Button
						onClick={!isSaved ? handleBookmark : handleUnbookmark}
						variant="ghost"
						className="absolute right-3">
						{isSaved ? (
							<Bookmark
								fill="#00B595"
								color="#00B595"
							/>
						) : (
							<Bookmark />
						)}
					</Button>
				</div>

				<div className="flex justify-between w-full">
					<p className="">
						{" "}
						{likeCount} {likeCount === 1 ? "Like" : "Likes"}
					</p>
					<p className="">
						{bookmarkCount}{" "}
						{bookmarkCount === 1 ? "Bookmark" : "Bookmarks"}
					</p>
				</div>
				{isPostDetails ? (
					<div className="w-full pt-3 flex flex-col gap-4">
						<Input
							type="text"
							value={comment}
							onChange={handleCommentChange}
							placeholder="Write your comment here "
							suffix={
								<SendHorizonalIcon
									className="hover:text-blue-700"
									onClick={commentSubmit}
								/>
							}
							className="rounded-[6.25rem] border border-[#11294D]"
						/>
						<CommentsComponent postId={postId} />
					</div>
				) : (
					showComment && (
						<div className="w-full pt-3 flex flex-col gap-4">
							<Input
								type="text"
								value={comment}
								onChange={handleCommentChange}
								placeholder="Write your comment here "
								suffix={
									<SendHorizonalIcon
										className="hover:text-blue-700"
										onClick={commentSubmit}
									/>
								}
								className="rounded-[6.25rem] border border-[#11294D]"
							/>
							<CommentsComponent postId={postId} />
						</div>
					)
				)}
			</CardFooter>
		</Card>
	);
};

export default PostCard;

function CommentsComponent({ postId }) {
	const { data: commentsList, isLoading } = usePostsCommentListQuery({
		post: postId,
	});
	if (commentsList) {
		console.log(commentsList);
	}
	return (
		<div className="max-h-[20rem] flex flex-col gap-6 overflow-y-scroll">
			{commentsList?.results?.map((comment, index) => (
				<div
					className="flex gap-6 items-start"
					key={index}>
					<AvatarProfile
						pfpImage={comment.author.profile_picture}
						first_name={comment.author.user.first_name}
						last_name={comment.author.user.last_name}
						className="w-[3.2rem] h-[3.2rem]"
					/>
					<div className="flex gap-1 flex-col w-full">
						<p className="muted text-sm flex gap-2">
							<span>
								{comment.author.user.first_name}{" "}
								{comment.author.user.last_name}{" "}
							</span>
							<VerifiedIcon
								fill="#00B595"
								color="#ffff"
								className="dark:filter dark:invert"
								size={20}
							/>
						</p>
						<p className="text-wrap ">{comment.text}</p>
					</div>
				</div>
			))}
		</div>
	);
}
