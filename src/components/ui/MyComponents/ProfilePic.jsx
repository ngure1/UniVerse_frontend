import React from "react";
import Profile from "@/../public/images/ProfilePic.jpeg";
import Image from "next/image";

const ProfilePic = ({ width }) => {
	return (
		<div>
			<Image
				src={Profile}
				alt="Profile Picture"
				className="rounded-full"
				width={width}
				height={width}
			/>
		</div>
	);
};

export default ProfilePic;
