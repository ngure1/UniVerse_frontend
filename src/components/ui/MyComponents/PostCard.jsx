"use client";
import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/shadcnComponents/card";
import { Button } from "../shadcnComponents/button";
import {
	Heart,
	Send,
	MessageSquareMore,
	Bookmark,
	VerifiedIcon,
	CalendarX,
	Globe,
	MapPin,
	UserRoundPlus,
} from "lucide-react";
import Image from "next/image";
import AvatarProfile from "./AvatarProfile";
import { AvatarFallback } from "@radix-ui/react-avatar";
import {
	useLike,
	useBookmark,
	useUnlike,
	useUnbookmark,
} from "@/hooks/postHooks";
import { LikeSVG, UnLikeSVG } from "@/app/landing/SVGIcon";

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
	event_date,
	isOnline,
	address,
	forEvents,
	isLiked,
	isSaved,
	likeCount,
	bookmarkCount,
}) => {
	const handleLike = useLike(postId);
	const handleUnlike = useUnlike(postId);
	const handleBookmark = useBookmark(postId);
	const handleUnbookmark = useUnbookmark(postId);
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
								size={4}
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
						<Button
							variant="outline"
							className="gap-2">
							<UserRoundPlus />
							FOLLOW
						</Button>
					</div>
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
						<p className="body-md">{content}</p>
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
			<CardFooter className="flex justify-between items-center self-stretch">
				<Button
					onClick={!isLiked ? handleLike : handleUnlike}
					variant="ghost"
					className="gap-1">
					{isLiked ? <LikeSVG /> : <UnLikeSVG />}
					{likeCount}
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
