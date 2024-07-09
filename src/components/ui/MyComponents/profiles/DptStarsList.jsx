"use client";
import React from "react";
import ProfilesCard from "../cards/ProfilesCard";
import { useDptStarsListQuery } from "@/redux/features/profileTabs/profilesApiSlice";

const DptStarsList = () => {
	const { data, isLoading } = useDptStarsListQuery();
	console.log(data);
	return (
		<div className="grid grid-cols-4 bg-white space-y-2 py-4 justify-items-center justify-evenly">
			{isLoading ? (
				<p>Loading...</p>
			) : (
				data?.results?.map((profiles, index) => (
					<ProfilesCard key={index} />
				))
			)}

			{/* <ProfilesCard
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
			<ProfilesCard
				name="Cate Ndung'u"
				jobDescription="Software engineer"
				company="IntelliDJEA"
			/> */}
		</div>
	);
};

export default DptStarsList;
