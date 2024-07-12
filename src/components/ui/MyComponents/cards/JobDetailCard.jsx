"use client";
import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/shadcnComponents/card";
import { Button } from "../../shadcnComponents/button";
import Image from "next/legacy/image";
import {
	Bookmark,
	UserRoundPlus,
	BriefcaseBusiness,
	Building,
	ListChecks,
	SquareArrowOutUpRight,
} from "lucide-react";
import { formatCreatedAt } from "@/lib/utils";
import AvatarProfile from "../profile/AvatarProfile";

const JobDetailCard = ({
	className,
	companyName,
	jobTitle,
	jobLocation,
	date,
	jobType,
	skillSet,
	companyDescription,
	jobDescription,
	qualifications,
	applicationProcess,
	pfpImage,
	media,
}) => {
	return (
		<Card className={`${className} w-full shadow-md p-[2rem]]`}>
			<CardHeader>
				<CardTitle>{jobTitle}</CardTitle>
				<p className="sub-heading-4">{companyName}</p>
				<p className="text-sm">{date}</p>
				<CardDescription>
					<div className="flex gap-1">
						<BriefcaseBusiness />
						<p className="inline-flex gap-1"> {jobType}</p>
					</div>
					<div className="flex gap-1">
						<Building />
						<p className="inline-flex gap-1">{jobLocation}</p>
					</div>
					<div className="flex gap-1">
						<ListChecks />
						<p>{skillSet}</p>
					</div>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div>
					<p className="sub-heading-3 m-[1rem]">About The Job</p>
					<div className="border shadow-md p-[1rem] space-y-4">
						<p className="sub-heading-3">Description</p>
						<p>{jobDescription}</p>
						<p className="sub-heading-3">Qualifications</p>
						<p>{qualifications}</p>
						<p className="sub-heading-3">How to Apply</p>
						<p>{applicationProcess}</p>
						<div className="rounded-[0.25rem] h-[20rem] w-full relative">
							<Image
								src={media}
								alt="Post Image"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</div>
				</div>
				<div className="mt-[0.75rem] flex gap-[2rem]">
					<Button
						variant="secondary"
						className="gap-1">
						<SquareArrowOutUpRight />
						Apply
					</Button>
					<Button
						variant="outline"
						className="gap-1 border border-solid border-[#00B595]">
						<Bookmark />
						Save
					</Button>
				</div>
			</CardContent>
			<CardFooter>
				<div className="border shadow-md p-[1rem]">
					<p className="sub-heading-3 mb-[0.75rem]">
						About The Company
					</p>
					<div className="flex justify-between items-center">
						<div className="flex items-center gap-2">
							<AvatarProfile
								className="w-[5rem] h-[5rem]"
								pfpImage={pfpImage}
							/>
							<p className="sub-heading-3">{companyName}</p>
						</div>
						<Button
							variant="outline"
							className="gap-2">
							<UserRoundPlus />
							FOLLOW
						</Button>
					</div>
					<p className="mt-[0.5rem]">{companyDescription}</p>
				</div>
			</CardFooter>
		</Card>
	);
};

export default JobDetailCard;
