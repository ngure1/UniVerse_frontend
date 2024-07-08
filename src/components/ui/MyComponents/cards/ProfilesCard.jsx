import React from "react";
import { Card } from "../../shadcnComponents/card";
import AvatarProfile from "../profile/AvatarProfile";
import { Button } from "../../shadcnComponents/button";
import { UserRoundPlus } from "lucide-react";

const ProfilesCard = ({ name, jobDescription, company, pfpImage }) => {
	return (
		<Card className="relative flex items-center shadow-lg flex-col p-2 w-[15rem] h-[20rem]">
			<div className="">
				<div className="w-full h-[5rem] bg-gray-400 absolute top-0 left-0 z-10"></div>
				<AvatarProfile
					className="w-[7rem] h-[7rem] mb-2 relative z-30"
					// pfpImage={postImage}
				/>
			</div>
			<p className="body-md">{name}</p>
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
