"use client";
import React, { useState } from "react";
import JobDetailCard from "@/components/ui/MyComponents/cards/JobDetailCard";
import Logo from "@/../public/images/logo.png";
import JobForm from "@/components/forms/jobForm";
import AvatarProfile from "@/components/ui/MyComponents/profile/AvatarProfile";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/shadcnComponents/dialog";
import { BriefcaseBusiness } from "lucide-react";
import { Button } from "@/components/ui/shadcnComponents/button";
import { Card } from "@/components/ui/shadcnComponents/card";
import JobsCard from "@/components/ui/MyComponents/cards/JobsCard";
import { useJobsListQuery } from "@/redux/features/jobs/jobsApiSlice";
import { useProfile } from "@/hooks/profile";
import { formatCreatedAt } from "@/lib/utils";

const Jobs = () => {
	const { data: jobData, isLoading } = useJobsListQuery(1);
	console.log(jobData);
	const { data: profileData } = useProfile();

	const [showDetail, setShowDetail] = useState(false);
	const [jobId, setJobId] = useState(null);

	return (
		<div>
			<Card className="flex w-[58%] mb-[2rem] min-w-[33.25rem] py-[0.6rem] flex-col items-start rounded-[0.5rem] bg-white dark:bg-muted">
				<div className="flex w-full m-2">
					<AvatarProfile
						className="w-[3rem] h-[3rem]"
						pfpImage={profileData?.profile_picture}
						first_name={profileData?.user.first_name}
						last_name={profileData?.user.last_name}
					/>
					<Dialog className="">
						<DialogTrigger asChild>
							<Button
								variant="outline"
								className="gap-1 w-full h-[5vh] rounded-[20px] mx-[1rem] ">
								<BriefcaseBusiness color="#90B494" />
								Post a New Job
							</Button>
						</DialogTrigger>
						<DialogContent className="sm-max w-md">
							<DialogTitle>Jobs</DialogTitle>
							<JobForm />
						</DialogContent>
					</Dialog>
				</div>
			</Card>

			<div className="flex gap-2">
				<div className="w-[40%] flex flex-col gap-2 border-r-4 border-black">
					{isLoading ? (
						<p>Loading...</p>
					) : (
						jobData?.results?.map((job, index) => (
							<JobsCard
								key={index}
								pfpImage={job.author.profile_picture}
								job_id={job.id}
								job_title={job.job_title}
								company={job.company}
								address={job.address}
								job_type={job.job_type}
								onClick={() => {
									setShowDetail(true);
									setJobId(job.id);
								}}
							/>
						))
					)}
				</div>

				{showDetail && <JobDetailCard id={jobId} />}
			</div>
		</div>
	);
};

export default Jobs;
