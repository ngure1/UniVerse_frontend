"use client";
import React from "react";
import ProfilesCard from "../cards/ProfilesCard";
import { useDptStarsListQuery } from "@/redux/features/profileTabs/profilesApiSlice";

const DptStarsList = () => {
	const { data: dptStarsData, isLoading } = useDptStarsListQuery(null);
	console.log(dptStarsData);
	return (
		<div className="mx-auto p-4">
			<div className="grid grid-cols-4 bg-inherit space-y-2 py-4 justify-items-center justify-evenly">
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
							jobDescription={profiles.job_role}
							company={profiles.organization}
						/>
					))
				)}
				<ProfilesCard
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
					company="IntelliDJEA"
				/>
			</div>
		</div>
	);
};

export default DptStarsList;
