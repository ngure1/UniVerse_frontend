"use client";
import React, { useState } from "react";
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
} from "lucide-react";
import Image from "next/image";
import AvatarProfile from "../profile/AvatarProfile";
import {
	useLike,
	useBookmark,
	useUnlike,
	useUnbookmark,
} from "@/hooks/postHooks";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/shadcnComponents/dropdown-menu";
import { useFollowToggle } from "@/hooks/profile";
import thumbsUp from "./thumbs-up.json";
import Lottie from "react-lottie-player";
import { LikeSVG, UnLikeSVG } from "@/app/landing/SVGIcon";
import DOMPurify from "dompurify";
import Link from "next/link";
import { useDialog } from "@/hooks/responsiveDialog";
import { ResponsiveDialog } from "../ResponsiveDialog";
import ConfirmDelete from "../ConfirmDelete";

const PostCard = ({
	postId,
	pfpImage,
	first_name,
	last_name,
	type,
	date,
	title,
	content,
	postImage,
	isVerified,
	forProfile = false,
	isOwner = true,
	event_date,
	isOnline,
	address,
	forEvents,
	isLiked,
	isSaved,
	isFollowingCreator,
	likeCount,
	bookmarkCount,
}) => {
	const [isPlaying, setIsPlaying] = useState(false);

	const handleLike = useLike(postId);
	const handleUnlike = useUnlike(postId);
	const handleBookmark = useBookmark(postId);
	const handleUnbookmark = useUnbookmark(postId);

	const handleFollow = useFollowToggle(1);

	const handleThumbsUp = () => {
		if (!isLiked) {
			handleLike();
		} else {
			handleUnlike();
		}
		setIsPlaying(true);
		setTimeout(() => {
			setIsPlaying(false);
		}, 1000); // Assuming the animation duration is 1 second
	};

	const sanitizedContent = DOMPurify.sanitize(content);

	const { isDialogOpen, handleCloseDialog } = useDialog("confirmDelete");

	return (
		<Card className="flex w-[37.5rem] min-w-[21.25rem] py-[0.5rem] px-[1.25rem] flex-col justify-center items-start gap-[0.75rem] rounded-[0.5rem] bg-white dark:bg-muted">
			{!forProfile && (
				<CardHeader className="w-full">
					<div className="flex items-start justify-between h-[3rem]">
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
						{isOwner ? (
							<DropDown />
						) : isFollowingCreator ? (
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
					</div>
					<ResponsiveDialog
						isOpen={isDialogOpen}
						setIsOpen={handleCloseDialog}>
						<ConfirmDelete post_id={19} />
					</ResponsiveDialog>
				</CardHeader>
			)}

			<CardContent>
				<div className="flex flex-col items-start gap-[0.75rem] self-stretch ">
					{forEvents && (
						<div className="">
							<p className="inline-flex gap-1">
								<CalendarX />
								{event_date}
							</p>
							{isOnline ? (
								<p className="flex gap-1">
									<Globe /> ONLINE
								</p>
							) : (
								<p className="flex gap-1">
									<MapPin /> {address}
								</p>
							)}
						</div>
					)}
					<div className="self-stretch ">
						<p className="sub-heading-3 p-1">{title}</p>
						<div
							dangerouslySetInnerHTML={{
								__html: sanitizedContent,
							}}
						/>
					</div>
					<div className="self-stretch rounded-[0.25rem]">
						<Image
							src={postImage}
							alt="Post Image"
							width={560}
							height={400}
						/>
					</div>
					{forEvents && (
						<Button
							className="w-full"
							variant="secondary">
							Register
						</Button>
					)}
				</div>
			</CardContent>
			<CardFooter className="flex justify-between items-center self-stretch ">
				<Button
					className="flex items-center gap-1 cursor-pointer"
					variant="ghost"
					onClick={handleThumbsUp}>
					{/* <Button variant="ghost" className="relative z-10 gap-1"> */}
					{isLiked ? (
						<Lottie
							animationData={thumbsUp}
							loop={false}
							play={isPlaying}
							className="w-[2.5rem] h-[2.5rem] relative bottom-1"
						/>
					) : (
						<UnLikeSVG />
					)}
					{likeCount}
					{/* </Button> */}
				</Button>
				<Button
					variant="ghost"
					className="gap-1">
					<MessageSquareMore />
					Comment
				</Button>
				<Button
					variant="ghost"
					className="gap-1">
					<Send />
					Share
				</Button>
				<Button
					onClick={!isSaved ? handleBookmark : handleUnbookmark}
					variant="ghost"
					className="gap-1">
					{isSaved ? (
						<Bookmark
							fill="#00B595"
							color="#00B595"
						/>
					) : (
						<Bookmark />
					)}
					{bookmarkCount}
				</Button>
				<br />
			</CardFooter>
		</Card>
	);
};

export default PostCard;

const DropDown = () => {
	const { handleOpenDialog } = useDialog("confirmDelete");
	return (
		<div>
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
						onSelect={handleOpenDialog}
						className="hover:bg-destructive active:bg-destructive focus:bg-destructive hover:text-white active:text-white focus:text-white">
						<Trash2 className="mr-2 h-4 w-4" />
						<span>Delete</span>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};
