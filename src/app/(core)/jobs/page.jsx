"use client";
import React from "react";
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
				<div className="w-[40%]">
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
							/>
						))
					)}
				</div>

				<div className="w-[50%]">
					{isLoading ? (
						<p>Loading...</p>
					) : (
						jobData?.results?.map((job, index) => (
							<JobDetailCard
								key={index}
								className=""
								companyName={job.company}
								jobTitle={job.job_title}
								jobLocation={job.address}
								date={formatCreatedAt(job.created_at)}
								jobType={job.job_type}
								skillSet={job.job_skills}
								jobDescription={job.job_description}
								qualifications={job.job_qualifications}
								applicationProcess={job.application_procedure}
								pfpImage={job.author.profile_picture}
								media={job.media}
								companyDescription="IntelliDJEA is a forward-thinking technology company specializing in innovative solutions and cutting-edge software development. 
								Our mission is to transform industries by delivering high-quality, impactful technology products that drive efficiency and growth."
							/>
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default Jobs;
