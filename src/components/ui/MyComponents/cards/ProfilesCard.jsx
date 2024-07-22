import React from "react";
import { Card } from "../../shadcnComponents/card";
import AvatarProfile from "../profile/AvatarProfile";
import { Button } from "../../shadcnComponents/button";
import { UserRoundPlus, VerifiedIcon } from "lucide-react";
import Link from "next/link";

const ProfilesCard = ({
	firstName,
	lastName,
	email,
	jobDescription,
	company,
	bio,
	pfpImage,
	isStudent,
	isAlumni,
	isLecturer,
	isVerified,
	profilesId,
}) => {
	return (
		<Card className="relative flex items-center shadow-lg flex-col p-2 w-[15rem] h-[20rem] text-center">
			<div className="w-full h-[5rem] bg-gray-400 absolute top-0 left-0 z-10"></div>
			<Link href={`/userprofile/${profilesId}`}>
				<AvatarProfile
					className="w-[7rem] h-[7rem] mb-2 relative z-30"
					pfpImage={pfpImage}
					first_name={firstName}
					last_name={lastName}
					email={email}
				/>

				<div className="flex gap-2 items-center">
					<p className="body-md no-underline hover:underline">
						{firstName} {lastName}
					</p>
					{isVerified && (
						<VerifiedIcon
							fill="#00B595"
							size={24}
						/>
					)}
				</div>
			</Link>
			<p className="text-sm muted">{email}</p>
			{company && jobDescription ? (
				<>
					<p className="text-sm">{jobDescription}</p>
					<p className="text-sm">{company}</p>
				</>
			) : bio ? (
				<p className="text-sm muted overflow-auto h-[25%]">{bio}</p>
			) : (
				<>
					{isAlumni && <p className="text-sm muted">Alumni</p>}
					{isStudent && <p className="text-sm muted">Student</p>}
					{isLecturer && <p className="text-sm muted">Lecturer</p>}
				</>
			)}

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
