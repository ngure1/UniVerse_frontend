"use client";
import { ModeToggle } from "@/components/ui/MyComponents/ModeToggle";
import ProfileCard from "@/components/ui/MyComponents/cards/ProfileCard";
import ProfileTabs from "@/components/ui/MyComponents/profile/ProfileTabs";
import { useProfileMeQuery } from "@/redux/features/profiles/profileApiSlice";
import { toast } from "react-toastify";

const ProfilePage = () => {
	const { data: profileData, isLoading, error } = useProfileMeQuery(null);
	console.log(profileData);

	if (isLoading) {
		return (
			// todo implement profile card skeleton
			<p>Loading..</p>
		);
	}

	if (error) {
		toast.error("Failed to retrieve profile details");
		return <></>;
	}

	return (
		<div className="flex flex-col gap-4 w-[100%]">
			<div className="px-[2.5rem] py-[1.5rem] w-[80%] bg-white dark:bg-muted rounded-md flex flex-col gap-8">
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
			<ModeToggle />
			<ProfileTabs />
		</div>
	);
};

export default ProfilePage;
