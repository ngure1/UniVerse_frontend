"use client";
import { ModeToggle } from "@/components/ui/MyComponents/ModeToggle";
import ProfileCard from "@/components/ui/MyComponents/cards/ProfileCard";
import ProfileTabs from "@/components/ui/MyComponents/profile/ProfileTabs";
import { useProfileMeQuery } from "@/redux/features/profiles/profileApiSlice";
import { userAgent } from "next/server";
import { toast } from "react-toastify";

const ProfilePage = () => {
	const { data, isLoading, error } = useProfileMeQuery(null);
	console.log(data);

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
				{data && (
					<ProfileCard
						first_name={data.user.first_name}
						last_name={data.user.last_name}
						profile_picture={data.profile_picture}
						email={data.user.email}
						address={data.address}
						is_verified={data.is_verified}
						is_alumni={data.is_alumni}
						is_student={data.is_student}
						is_lecturer={data.is_lecturer}
						bio={data.bio}
						phone_number={data.phone_number}
						follower_count={data.followers_count}
						following_count={data.following_count}
						linked_in_url={data.linked_in_url}
					/>
				)}
			</div>
			<ModeToggle />
			<ProfileTabs />
		</div>
	);
};

export default ProfilePage;
