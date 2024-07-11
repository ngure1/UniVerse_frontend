"use client";
import React from "react";
import ProfilesCard from "../cards/ProfilesCard";
import { useDptStarsListQuery } from "@/redux/features/profileTabs/profilesApiSlice";

const DptStarsList = () => {
	const { data: dptStarsData, isLoading } = useDptStarsListQuery(null);
	console.log(dptStarsData);
	return (
		<div className="grid grid-cols-4 bg-inherit gap-y-8 justify-items-center py-4 items-start">
			{isLoading ? (
				<p>Loading...</p>
			) : (
				dptStarsData?.results?.map((profiles, index) => (
					<ProfilesCard
						key={index}
						profilesId={profiles.id}
						pfpImage={profiles.profile_picture}
						firstName={profiles.user.first_name}
						lastName={profiles.user.last_name}
						email={profiles.user.email}
						bio={profiles.bio}
						isVerified={profiles.is_verified}
						isAlumni={profiles.is_alumni}
						isLecturer={profiles.is_lecturer}
						isStudent={profiles.is_student}
						jobDescription={profiles.job_role}
						company={profiles.organization}
					/>
				))
			)}
			{/* <ProfilesCard
				firstName="Cate Ndung'u"
				jobDescription="Software engineer"
				company="IntelliDJEA"
			/>
			<ProfilesCard
				name="Cate Ndung'u"
				jobDescription="Software engineer"
				company="IntelliDJEA"
			/>
			<ProfilesCard
				name="Cate Ndung'u"
				jobDescription="Software engineer"
				company="IntelliDJEA"
			/>
			<ProfilesCard
				name="Cate Ndung'u"
				jobDescription="Software engineer"
				company="IntelliDJEA"
			/>
			<ProfilesCard
				name="Cate Ndung'u"
				jobDescription="Software engineer"
				company="IntelliDJEA" */}
			{/* /> */}
		</div>
	);
};

export default DptStarsList;
