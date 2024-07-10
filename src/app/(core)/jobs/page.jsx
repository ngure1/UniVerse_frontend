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

const Jobs = () => {
	return (
		<div>
			<Card className="flex w-[58%] mb-[2rem] min-w-[33.25rem] py-[0.6rem] flex-col items-start rounded-[0.5rem] bg-white dark:bg-muted">
				<div className="flex w-full m-2">
					<AvatarProfile
						className="w-[3rem] h-[3rem]"
						// pfpImage={profileData?.profile_picture}
						// first_name={profileData?.user.first_name}
						// last_name={profileData?.user.last_name}
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

			<JobsCard
				job_title="Executive Partner"
				company="Athena"
				address="Kiambu, Kenya"
				job_type="On-site"
			/>
			<JobsCard
				job_title="Executive Partner"
				company="Athena"
				address="Kiambu, Kenya"
				job_type="On-site"
			/>

			{/* <JobDetailCard
				companyLogo={Logo}
				companyName="UniVerse"
				jobTitle="Data Analyst"
				jobLocation="Nairobi, Kenya"
				date="1 day ago"
				jobType="Remote"
				employeeNo="150 employees"
				skillSet="Marketing Campaigns, Campaigns..."
				companyDescription="Decodis is a social research company that offers custom data capture tools, analyses, and nuanced insight into vulnerable people. 
				Using high-powered, but scalable and low-cost methods, we have proven to be effective in helping impact investors, private corporations, donors, thinktanks, NGOs and governments better serve their target populations.…"
				jobDescription="The perfect candidate for this position will have an eagle eye for even the tiniest inconsistencies and errors, and be able to create spreadsheets with large numbers of figures without mistakes. 
				If you possess super-fast and accurate data entry skills, and want to join a successful team at an exciting company as a Data Entry Clerk via Robert Half, you might be right for this position! 
				This position will be responsible for a range of accounting and finance support functions, with an emphasis on effective record keeping. 
				The clerk's duties will be entering high volumes of data into Microsoft Excel and ERP systems and databases with utmost precision and speed and must possess a high level of organization, reliability and attention to detail. 
				This Data Entry Clerk role is a long-term contract / temporary opportunity and is based in Secaucus."
				responsibilities="This is a contract role for a Digital Marketing professional at Robert Half Inc. 
				As a Digital Marketing professional, you will be responsible for planning, executing, and optimizing online marketing strategies to reach our target audience. 
				The role involves managing digital advertising campaigns, analyzing data to identify trends and insights, and developing creative content for social media platforms. 
				This is a remote position."
				qualifications="Proven experience in developing and implementing successful digital marketing campaigns
				In-depth knowledge of various digital marketing channels and strategies
				Proficiency in using digital marketing tools and platforms, such as Google Analytics and social media management software
				Familiarity with SEO principles and best practices
				Excellent analytical and problem-solving skills
				Strong written and verbal communication skills
				High level of creativity and ability to think outside the box
				Ability to work independently and collaboratively in a remote team environment
				Bachelor's degree in Marketing or a related field"
				applicationProcess="Please visit www.decodis.com/work-with-us and click on the Intern link to complete the application process as directed, including attaching both your cover letter and CV.
				Please rest assured that our application process is revised by humans who are really interested in learning about you, and your application form is a great way for us to do that. Therefore, we do not accept email applications.
				Please note that only shortlisted candidates will be contacted for follow-up.
				If you have any technical issues applying, please contact us at info@decodis.com."
			/> */}
		</div>
	);
};

export default Jobs;
