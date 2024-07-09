"use client";
import React from "react";
import { useLecturerListQuery } from "@/redux/features/profileTabs/profilesApiSlice";
import ProfilesCard from "../cards/ProfilesCard";

const LecturersList = () => {
	const { data: lecturersData, isLoading } = useLecturerListQuery(null);

	return (
		<div className="grid grid-cols-4 bg-white space-y-2 py-4 justify-items-center justify-evenly">
			{isLoading ? (
				<p>Loading...</p>
			) : (
				lecturersData?.results?.map((profiles, index) => (
					<ProfilesCard
						key={index}
						firstName={profiles.user.first_name}
						lastName={profiles.user.last_name}
						pfpImage={profiles.profile_picture}
					/>
				))
			)}
		</div>
	);
};

export default LecturersList;
