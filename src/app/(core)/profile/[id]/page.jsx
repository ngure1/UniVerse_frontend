"use client";
import React from "react";
import { useProfileDetailQuery } from "@/redux/features/profiles/profileApiSlice";
import ProfileCard from "@/components/ui/MyComponents/cards/ProfileCard";
import ProfileTabs from "@/components/ui/MyComponents/profile/ProfileTabs";

const Page = ({ params }) => {
	const {
		data: profileData,
		error,
		isLoading,
	} = useProfileDetailQuery({ profile_id: params.id });
	console.log(profileData);

	if (isLoading) {
		return (
			// todo implement profile card skeleton
			<p>Loading...</p>
		);
	}

	if (error) {
		toast.error("Failed to retrieve profile details");
		return <></>;
	}

	return (
		<div className="flex flex-col gap-4 w-[100%]">
			<div className="px-[2.5rem] py-[1.5rem] w-[89%] bg-white dark:bg-muted rounded-md flex flex-col gap-8 border">
				{profileData && (
					<ProfileCard
						first_name={profileData.user.first_name}
						last_name={profileData.user.last_name}
						profile_picture={profileData.profile_picture}
						email={profileData.user.email}
						address={profileData.address}
						is_verified={profileData.is_verified}
						is_alumni={profileData.is_alumni}
						is_student={profileData.is_student}
						is_lecturer={profileData.is_lecturer}
						bio={profileData.bio}
						phone_number={profileData.phone_number}
						follower_count={profileData.followers_count}
						following_count={profileData.following_count}
						linked_in_url={profileData.linked_in_url}
					/>
				)}
			</div>

			<ProfileTabs />
		</div>
	);
};

export default Page;
