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

const ProfileCard = ({
	first_name,
	last_name,
	is_student,
	is_alumni,
	is_lecturer,
	bio,
	phone_number,
	linked_in_url,
}) => {
	const [isEditProfileDialogOpen, setIsEditProfileDialogOpen] =
		React.useState(false);

	return (
		<div>
			<div className="flex gap-[6.25rem] items-center border-black">
				<div className="relative">
					<AvatarProfile
						first_name={first_name}
						last_name={last_name}
						pfpImage={"images/ProfilePic.jpeg"}
						className="w-[9rem] h-[9rem]"
					/>
					<Link
						href=""
						className="absolute right-0 bottom-1 rounded-full bg-white dark:bg-muted p-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="22"
							height="22"
							viewBox="0 0 29 28"
							fill="none"
							className="hover:w-6 hover:h-6 transition-width transition-height duration-200">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M28.4497 28H22.6478V18.9051C22.6478 16.7361 22.6111 13.9461 19.6331 13.9461C16.6147 13.9461 16.1539 16.3099 16.1539 18.7495V28H10.358V9.297H15.9204V11.8543H15.9998C16.7737 10.3833 18.6661 8.83282 21.4888 8.83282C27.3641 8.83282 28.4497 12.7055 28.4497 17.7428V28ZM3.81646 6.74219C1.95215 6.74219 0.449707 5.23209 0.449707 3.37048C0.449707 1.5101 1.95215 0 3.81646 0C5.6722 0 7.17954 1.5101 7.17954 3.37048C7.17954 5.23209 5.6722 6.74219 3.81646 6.74219ZM6.71866 28H0.910587V9.297H6.71866V28Z"
								fill="#0077B5"
							/>
						</svg>
					</Link>
				</div>
				<div className="flex flex-col w- items-start gap-[1.5rem]">
					<div className="max-w-[31.25rem]">
						<div className="flex gap-[1.75rem] items-center">
							<p>Jane Doe</p>
							<VerifiedIcon
								fill="#00B595"
								color="#ffff"
								size={24}
							/>
						</div>

						<p>Alumni class of &#39;05</p>
						<p className="flex gap-2 items-center">
							<MapPin
								size={18}
								color="#777777"
							/>
							<span>Nairobi,Kenya</span>
						</p>
						<p className="flex gap-2 items-center">
							<Mail
								size={18}
								color="#777777"
							/>
							<span>janedoe@gmail.com</span>
						</p>
						<p className="flex gap-2 items-center">
							<PhoneIcon
								size={18}
								color="#777777"
							/>
							<span>0113021788</span>
						</p>
						<p>{bio}</p>
					</div>
					<div className="flex items-center gap-[1.25rem]">
						<p>
							<span className="text-lg font-medium pr-[0.25rem]">
								50
							</span>{" "}
							following
						</p>
						<p>
							<span className="text-lg font-medium pr-[0.25rem]">
								20
							</span>{" "}
							followers
						</p>
					</div>
				</div>
			</div>
			<Button
				variant="ghost"
				onClick={() => setIsEditProfileDialogOpen(true)}
				className="flex gap-3">
				<PencilLine size={18} />
				<span className="text-sm">Edit Profile</span>
			</Button>
			<ResponsiveDialog
				title={"Edit Profile"}
				description={"Edit your profile"}
				isOpen={isEditProfileDialogOpen}
				setIsOpen={setIsEditProfileDialogOpen}>
				{/* <EditProfileForm /> */}
				<EditProfileTabs />
			</ResponsiveDialog>
		</div>
	);
};

export default ProfileCard;
