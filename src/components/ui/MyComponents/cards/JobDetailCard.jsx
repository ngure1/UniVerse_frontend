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

const JobDetailCard = ({
	companyLogo,
	companyName,
	jobTitle,
	jobLocation,
	date,
	jobType,
	employeeNo,
	skillSet,
	companyDescription,
	jobDescription,
	responsibilities,
	qualifications,
	applicationProcess,
}) => {
	return (
		<Card className="xl:w-1/2 md:w-3/4 shadow-md p-[2rem]]">
			<CardHeader>
				<div className="flex items-center">
					<Image
						src={companyLogo}
						alt="Post Image"
						width={150}
						height={150}
						className="cursor-pointer max-sm:w-[100px] sm:w-[150px]"
					/>
					<p className="sub-heading-3">{companyName}</p>
				</div>
				<CardTitle>{jobTitle}</CardTitle>
				<div className="flex gap-[0.5rem]">
					<p className="text-sm">{jobLocation}</p>
					<p>.</p>
					<p className="text-sm">{date}</p>
				</div>
				<CardDescription>
					<div className="flex gap-1">
						<BriefcaseBusiness />
						<p className="inline-flex gap-1"> {jobType}</p>
					</div>
					<div className="flex gap-1">
						<Building />
						<p className="inline-flex gap-1">{employeeNo}</p>
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

						{/* <div className="border shadow-md p-[1rem]"> */}
						<p className="sub-heading-3">Responsibilities</p>
						<p>{responsibilities}</p>
						{/* </div> */}
						<p className="sub-heading-3">Qualifications</p>
						<p>{qualifications}</p>
						<p className="sub-heading-3">How to Apply</p>
						<p>{applicationProcess}</p>
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
						<div className="flex items-center">
							<Image
								src={companyLogo}
								alt="Post Image"
								width={150}
								height={150}
								className="cursor-pointer max-sm:w-[100px] sm:w-[150px]"
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
					<p>{companyDescription}</p>
				</div>
			</CardFooter>
		</Card>
	);
};

export default JobDetailCard;
