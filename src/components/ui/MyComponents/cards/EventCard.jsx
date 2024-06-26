import React from "react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/shadcnComponents/card";
import { CalendarX, MapPin } from "lucide-react";
import Link from "next/link";
import AvatarProfile from "../profile/AvatarProfile";
import { Button } from "../../shadcnComponents/button";
import { VerifiedIcon, UserRoundPlus, Globe, Link2 } from "lucide-react";
import Image from "next/legacy/image";
import { useProfile } from "@/hooks/profile";

const EventCard = ({
	postId,
	profileId,
	pfpImage,
	first_name,
	last_name,
	type,
	date,
	time,
	title,
	event_link,
	description,
	postImage,
	isVerified,
	event_date,
	isOnline,
	isPhysical,
	address,
	isFollowingCreator,
	smallImage,
}) => {
	const { data: profileData } = useProfile();
	console.log("Event Link:", event_link);

	return (
		<Card className="flex w-[58%] min-w-[33.25rem] py-[0.3rem] flex-col items-start rounded-[0.5rem] bg-white dark:bg-muted">
			{" "}
			<CardHeader className="w-full flex flex-row justify-between items-start">
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

				{isFollowingCreator ? (
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
						// onClick={handleFollow}
					>
						<UserRoundPlus />
						Follow
					</Button>
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
							{event_link && (
								<Link href={event_link}>
									<p className="flex gap-1">
										<Link2 />
										{event_link}
									</p>
								</Link>
							)}
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
						{event_date}
						{", "}
						{time}
					</p>
				</div>
				<div class="space-y-4">
					<p className="sub-heading-3">About</p>

					{description}
				</div>

				<Button
					className="w-full"
					variant="secondary">
					Register
				</Button>
			</CardContent>
		</Card>
	);
};

export default EventCard;
