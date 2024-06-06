"use client";
import React from "react";
import { VerifiedIcon, MapPin, Mail, PencilLine } from "lucide-react";
import Link from "next/link";

const ProfileCard = () => {
	return (
		<div>
			<div className="flex gap-[6.25rem] items-center border-black">
				<div className="rounded-full w-[9.375rem] h-[9.375rem] bg-slate-800"></div>
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

						<p>Alumni class of '05</p>
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
			<Link
				href={"#"}
				className="flex gap-3">
				<PencilLine size={18} />
				<span className="text-sm">Edit Profile</span>
			</Link>
		</div>
	);
};

export default ProfileCard;
