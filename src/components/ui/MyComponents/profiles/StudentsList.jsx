"use client";
import React from "react";
import { useStudentListQuery } from "@/redux/features/profileTabs/profilesApiSlice";
import ProfilesCard from "../cards/ProfilesCard";

const StudentsList = () => {
	const { data: studentsData, isLoading } = useStudentListQuery(null);

	return (
		<div className="grid grid-cols-4 bg-inherit gap-y-8 justify-items-center py-4 items-start">
			{isLoading ? (
				<p>Loading...</p>
			) : (
				studentsData?.results?.map((profiles, index) => (
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
		</div>
	);
};

export default StudentsList;
