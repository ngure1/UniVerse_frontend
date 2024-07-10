"use client";
import React from "react";
import { useStudentListQuery } from "@/redux/features/profileTabs/profilesApiSlice";
import ProfilesCard from "../cards/ProfilesCard";

const StudentsList = () => {
	const { data: studentsData, isLoading } = useStudentListQuery(null);

	return (
		<div className="grid grid-cols-4 bg-white space-y-2 py-4 justify-items-center justify-evenly">
			{isLoading ? (
				<p>Loading...</p>
			) : (
				studentsData?.results?.map((profiles, index) => (
					<ProfilesCard
						key={index}
						firstName={profiles.user.first_name}
						lastName={profiles.user.last_name}
						pfpImage={profiles.profile_picture}
						jobDescription={profiles.course}
						company={profiles.organization}
					/>
				))
			)}
		</div>
	);
};

export default StudentsList;
