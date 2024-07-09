import React from "react";
import { Card } from "../../shadcnComponents/card";
import AvatarProfile from "../profile/AvatarProfile";
import { Button } from "../../shadcnComponents/button";
import { UserRoundPlus } from "lucide-react";
import Link from "next/link";

const ProfilesCard = ({
	firstName,
	lastName,
	jobDescription,
	company,
	pfpImage,
	profilesId,
}) => {
	return (
		<Card className="relative flex items-center shadow-lg flex-col p-2 w-[15rem] h-[20rem]">
			<div className="w-full h-[5rem] bg-gray-400 absolute top-0 left-0 z-10"></div>
			<Link href={`/userprofile/${profilesId}`}>
				<AvatarProfile
					className="w-[7rem] h-[7rem] mb-2 relative z-30"
					pfpImage={pfpImage}
				/>
				<p className="body-md no-underline hover:underline">
					{firstName} {lastName}
				</p>
			</Link>

			<p className="text-sm">{jobDescription}</p>
			<p className="text-sm">{company}</p>
			<Button
				variant="outline"
				className="gap-2 rounded-[2rem] absolute bottom-3">
				<UserRoundPlus />
				Follow
			</Button>
		</Card>
	);
};

export default ProfilesCard;
