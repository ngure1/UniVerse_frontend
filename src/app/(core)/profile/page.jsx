"use client";
import { ModeToggle } from "@/components/ui/MyComponents/ModeToggle";
import ProfileCard from "@/components/ui/MyComponents/ProfileCard";
import ProfileTabs from "@/components/ui/MyComponents/profile/ProfileTabs";
import { useProfileListQuery } from "@/redux/features/profiles/profileApiSlice";

const ProfilePage = () => {
	const { data, isLoading } = useProfileListQuery(null);
	console.log(data);

	return (
		<div className="flex flex-col gap-4 w-[100%]">
			<div className="px-[2.5rem] py-[1.5rem] w-[80%] bg-white dark:bg-muted rounded-md flex flex-col gap-8">
				{data?.results?.map((profile, index) => (
					<ProfileCard
						key={index}
						first_name={profile.user.first_name}
					/>
				))}
			</div>
			<ModeToggle />
			<ProfileTabs />
		</div>
	);
};

export default ProfilePage;
