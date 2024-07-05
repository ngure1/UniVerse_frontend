import React, { useState } from "react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/shadcnComponents/card";
import {
	CalendarX,
	MapPin,
	MessageSquareMore,
	Send,
	Bookmark,
	SendHorizonalIcon,
} from "lucide-react";
import { Input } from "@/components/ui/shadcnComponents/input";
import {
	useLike,
	useBookmark,
	useUnlike,
	useUnbookmark,
	useComment,
} from "@/hooks/eventsHooks";
import { LikeSVG, UnLikeSVG } from "@/app/landing/SVGIcon";
import Link from "next/link";
import AvatarProfile from "../profile/AvatarProfile";
import { Button } from "../../shadcnComponents/button";
import {
	VerifiedIcon,
	UserRoundPlus,
	Globe,
	EllipsisVertical,
	Trash2,
	SquarePen,
} from "lucide-react";
import Image from "next/legacy/image";
import { useProfile } from "@/hooks/profile";
import { useFollowToggle } from "@/hooks/profile";
import {
	useEventsCommentsListQuery,
	useEventDeleteMutation,
	useEventUpdateMutation,
} from "@/redux/features/events/eventsApiSlice";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "../../shadcnComponents/dropdown-menu";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
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
import EventForm from "@/components/forms/eventForm";

const EventCard = ({
	eventId,
	profileId,
	pfpImage,
	first_name,
	last_name,
	type,
	date,
	event_start_time,
	title,
	event_link,
	description,
	postImage,
	isVerified,
	event_start_date,
	isOnline,
	isPhysical,
	address,
	isFollowingCreator,
	isLiked,
	isSaved,
	likeCount,
	bookmarkCount,
	smallImage,
	isOwner = false,
}) => {
	const { data: profileData } = useProfile();
	const [liked, setLiked] = useState(isLiked);

	const handleLike = useLike(eventId);
	const handleUnlike = useUnlike(eventId);
	const handleBookmark = useBookmark(eventId);
	const handleUnbookmark = useUnbookmark(eventId);

	const handleFollow = useFollowToggle(1);

	const handleThumbsUp = () => {
		if (!liked) {
			handleLike();
		} else {
			handleUnlike();
		}
		setLiked(!liked);
	};
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
	const handleComment = useComment(eventId, comment);
	function commentSubmit() {
		handleComment();
		setComment("");
	}
	const router = useRouter();
	// * deleting an event
	const [deleteEvent] = useEventDeleteMutation();

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
		deleteEvent({ event_id: eventId })
			.unwrap()
			.then(() => {
				toast.success("Event deleted successfully", {
					theme: "colored",
				});
			})
			.catch((err) => {
				toast.error("Failed to delete the event", {
					theme: "colored",
				});
			});
	}
	const [showEditDialog, setShowEditDialog] = useState(false);

	const containsHtml = /<\/?[a-z][\s\S]*>/i.test(description);
	// * opening delete dialog
	function handleOpenEditDialog() {
		if (containsHtml) {
			router.push(`/events/${eventId}`);
		} else {
			setShowEditDialog(true);
		}
	}

	// * closing delete dialog
	function handleCloseEditDialog() {
		setShowEditDialog(false);
	}

	if (address) {
		isOnline = false;
		isPhysical = true;
	}
	return (
		<Card className="flex w-[58%] min-w-[33.25rem] py-[0.3rem] flex-col items-start rounded-[0.5rem] bg-white dark:bg-muted">
			<CardHeader className="w-full flex flex-row justify-between items-start">
				<Link
					href={`/profile/${profileId}`}
					className="w-full">
					<div className="flex items-center self-stretch gap-[0.75rem]">
						<AvatarProfile
							pfpImage={pfpImage}
							first_name={first_name}
							last_name={last_name}
							email={profileData?.user.email}
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
									This action cannot be undone and your post
									will permanently deleted
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
							<EventForm
								article
								id={eventId}
							/>
						</DialogContent>
					</Dialog>
				)}
			</CardHeader>
			<CardContent className="flex flex-col items-start gap-[0.75rem] self-stretch h-[70%]">
				<div className="w-full p-1 flex flex-col gap-1">
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
					<div className="self-stretch h-[30%]">
						{title && <p className="sub-heading-3">{title}</p>}
					</div>
					{isOnline ? (
						<>
							<p className="flex gap-1">
								<Globe /> ONLINE
							</p>
						</>
					) : (
						isPhysical &&
						address && (
							<p className="flex gap-1">
								<MapPin /> {address}
							</p>
						)
					)}
					<div></div>
					<p className="flex gap-1 ">
						<CalendarX />
						{event_start_date}
						{", "}
						{event_start_time}
					</p>
				</div>
				<div className="space-y-4">
					<p className="sub-heading-3">About</p>

					{description}
				</div>

				{event_link && (
					<Link href={event_link}>
						<Button
							className="w-full"
							variant="secondary">
							Register
						</Button>
					</Link>
				)}
			</CardContent>
			<CardFooter className="flex flex-col w-full gap-1 relative">
				<div className="flex items-start self-stretch border-y-2">
					<Button
						className="flex items-center cursor-pointer"
						variant="ghost"
						onClick={handleThumbsUp}>
						{liked ? <LikeSVG /> : <UnLikeSVG />}
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

				{showComment && (
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
						<CommentsComponent eventId={eventId} />
					</div>
				)}
			</CardFooter>
		</Card>
	);
};

export default EventCard;

function CommentsComponent({ eventId }) {
	const { data: commentsList, isLoading } = useEventsCommentsListQuery({
		event: eventId,
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
						email={profileData?.user.email}
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
