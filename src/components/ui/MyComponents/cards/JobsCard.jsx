import React from "react";
import AvatarProfile from "../profile/AvatarProfile";
import Link from "next/link";
import { Separator } from "../../shadcnComponents/separator";

const JobsCard = ({ job_title, company, address, job_type, company_logo }) => {
	return (
		<div>
			<div className="flex gap-3  bg-white p-2 w-[50%]">
				<AvatarProfile className="w-[5rem] h-[5rem]" />
				<div>
					<p className="text-lg">{job_title}</p>
					<p className="body-md">{company}</p>
					<p className="text-sm">
						{address} ({job_type})
					</p>
				</div>
			</div>
			<Separator />
		</div>
	);
};

export default JobsCard;
