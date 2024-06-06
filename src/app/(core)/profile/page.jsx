import ProfileCard from "@/components/ui/MyComponents/ProfileCard";
import ProfileTabs from "@/components/ui/MyComponents/profile/ProfileTabs";

const ProfilePage = () => {
	return (
		<div className="flex flex-col gap-4 w-[80%]">
			<div className="px-[2.5rem] py-[1.5rem] bg-white rounded-md flex flex-col gap-8">
				<ProfileCard />
			</div>
			<ProfileTabs />
		</div>
	);
};

export default ProfilePage;
