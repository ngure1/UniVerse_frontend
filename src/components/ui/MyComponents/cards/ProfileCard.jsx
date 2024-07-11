"use client";
import React from "react";
import {
	VerifiedIcon,
	MapPin,
	Mail,
	PencilLine,
	PhoneIcon,
} from "lucide-react";
import { Button } from "../../shadcnComponents/button";
import { ResponsiveDialog } from "../ResponsiveDialog";
import EditProfileForm from "@/components/forms/profileForm";
import AvatarProfile from "../profile/AvatarProfile";
import Link from "next/link";
import EditProfileTabs from "../profile/edit/EditProfileTabs";
import { useDialog } from "@/hooks/responsiveDialog";
import { CameraIcon } from "lucide-react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/shadcnComponents/tooltip";
import EditAvatar from "../profile/edit/EditAvatar";

const ProfileCard = ({
	profileId,
	first_name,
	last_name,
	profile_picture,
	email,
	address,
	withEdit = false,
	is_verified,
	is_student,
	is_alumni,
	is_lecturer,
	bio,
	phone_number,
	following_count,
	follower_count,
	linked_in_url,
}) => {
	// const [isEditProfileDialogOpen, setIsEditProfileDialogOpen] =
	// 	React.useState(false);

	const {
		isDialogOpen: isEditProfileDialogOpen,
		handleOpenDialog: openEditProfileDialog,
		handleCloseDialog: closeEditProfileDialogOpen,
	} = useDialog("editProfile");

	const {
		isDialogOpen: isEditProfilePhotoDialogOpen,
		handleOpenDialog: openEditProfilePhotoDialog,
		handleCloseDialog: closeEditProfilePhotoDialogOpen,
	} = useDialog("editProfilePicture");

	return (
		<div>
			<div className="flex gap-[6.25rem] items-center border-black">
				<div className="relative">
					<AvatarProfile
						first_name={first_name}
						last_name={last_name}
						pfpImage={profile_picture}
						className="w-[9rem] h-[9rem]"
					/>

					{withEdit && (
						<TooltipProvider>
							<Tooltip delayDuration={200}>
								<TooltipTrigger
									className="absolute right-0 bottom-1 rounded-full bg-white dark:bg-muted p-2"
									onClick={openEditProfilePhotoDialog}>
									<CameraIcon className="bg-inherit" />
								</TooltipTrigger>
								<TooltipContent side="bottom">
									<p>Change profile photo</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					)}

					{/* <Button
						variant="ghost"
						className="absolute right-0 bottom-1 rounded-full bg-white dark:bg-muted p-2"></Button> */}
				</div>
				<div className="flex flex-col w- items-start gap-[1.5rem]">
					<div className="max-w-[31.25rem]">
						<div className="flex gap-2 items-center">
							<p>
								{first_name} {last_name}
							</p>
							{is_verified && (
								<VerifiedIcon
									fill="#00B595"
									color="#ffff"
									size={24}
								/>
							)}
						</div>

						{is_alumni && <p>Alumni class of &#39;05</p>}
						{is_student && <p>Student</p>}
						{is_lecturer && <p>Lecturer</p>}
						{address && (
							<p className="flex gap-2 items-center">
								<MapPin
									size={18}
									color="#777777"
								/>
								<span>
									{address.city},{address.country}
								</span>
							</p>
						)}
						{email && (
							<p className="flex gap-2 items-center">
								<Mail
									size={18}
									color="#777777"
								/>
								<span>{email}</span>
							</p>
						)}
						{phone_number && (
							<p className="flex gap-2 items-center">
								<PhoneIcon
									size={18}
									color="#777777"
								/>
								<span>{phone_number}</span>
							</p>
						)}
						<p>{bio}</p>
					</div>
					<div className="flex items-center gap-[1.25rem]">
						<p>
							<span className="text-lg font-medium pr-[0.25rem]">
								{following_count}
							</span>{" "}
							following
						</p>
						<p>
							<span className="text-lg font-medium pr-[0.25rem]">
								{follower_count}
							</span>{" "}
							followers
						</p>
					</div>
				</div>
			</div>
			{withEdit && (
				<Button
					variant="ghost"
					onClick={openEditProfileDialog}
					className="flex gap-3">
					<PencilLine size={18} />
					<span className="text-sm">Edit Profile</span>
				</Button>
			)}
			<ResponsiveDialog
				title={"Edit Profile"}
				description={"Edit your profile"}
				isOpen={isEditProfileDialogOpen}
				setIsOpen={closeEditProfileDialogOpen}>
				{/* <EditProfileForm /> */}
				<EditProfileTabs />
			</ResponsiveDialog>

			{/* change profile picture */}
			<ResponsiveDialog
				title={"Edit Profile picture"}
				description={"Edit your profile picture"}
				isOpen={isEditProfilePhotoDialogOpen}
				setIsOpen={closeEditProfilePhotoDialogOpen}>
				<EditAvatar />
			</ResponsiveDialog>
		</div>
	);
};

export default ProfileCard;
