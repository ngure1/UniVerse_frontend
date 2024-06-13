"use client";
import React from "react";
import {
	VerifiedIcon,
	MapPin,
	Mail,
	PencilLine,
	PhoneIcon,
} from "lucide-react";
import { Button } from "../shadcnComponents/button";
import { ResponsiveDialog } from "./ResponsiveDialog";
import EditProfileForm from "@/components/forms/editProfile";
import AvatarProfile from "./AvatarProfile";

const ProfileCard = () => {
	const [isEditProfileDialogOpen, setIsEditProfileDialogOpen] =
		React.useState(false);

	return (
		<div>
			<div className="flex gap-[6.25rem] items-center border-black">
				<div className="rounded-full w-[9.375rem] h-[9.375rem]">
					<AvatarProfile size={9.375} />
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
						<p>
							Bio:Meet Aurora Wynter, a free-spirited artist with
							a passion for painting and traveling.
						</p>
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
				<EditProfileForm />
			</ResponsiveDialog>
		</div>
	);
};

export default ProfileCard;
