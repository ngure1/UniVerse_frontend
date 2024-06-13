import React from "react";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/shadcnComponents/avatar";
import { get_fallback_name } from "@/lib/utils";

const AvatarProfile = ({
	size,
	pfpImage,
	first_name = "c",
	last_name = "n",
}) => {
	return (
		<Avatar className={`w-[${size}rem] h-[${size}rem] `}>
			<AvatarImage src={pfpImage} />
			<AvatarFallback>
				{get_fallback_name(first_name, last_name)}
			</AvatarFallback>
		</Avatar>
	);
};
export default AvatarProfile;
