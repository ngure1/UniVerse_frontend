import React from "react";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/shadcnComponents/avatar";

const AvatarProfile = ({ size, pfpImage }) => {
	return (
		<Avatar className={`w-${size} h-${size}`}>
			<AvatarImage src={pfpImage} />
			<AvatarFallback className={`w-${size} h-${size}`}>
				CN
			</AvatarFallback>
		</Avatar>
	);
};
export default AvatarProfile;
