import React from "react";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/shadcnComponents/avatar";
import { get_fallback_name } from "@/lib/utils";

const AvatarProfile = ({
	className,
	pfpImage,
	first_name = "c",
	last_name = "n",
	email = "example@gmail.com",
}) => {
	return (
		<Avatar className={`${className}`}>
			<AvatarImage
				src={pfpImage}
				className="object-cover"
			/>
			<AvatarFallback className="bg-[#F1FAFF]">
				{get_fallback_name(first_name, last_name, email)}
			</AvatarFallback>
		</Avatar>
	);
};
export default AvatarProfile;
