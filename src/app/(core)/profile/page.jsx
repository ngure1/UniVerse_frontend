import ProfileCard from "@/components/ui/MyComponents/ProfileCard";
import ProfileTabs from "@/components/ui/MyComponents/profile/ProfileTabs";

const ProfilePage = () => {
	return (
		<div className="flex flex-col gap-4 w-[100%]">
			<div className="px-[2.5rem] py-[1.5rem] w-[80%] bg-white rounded-md flex flex-col gap-8">
				<ProfileCard />
			</div>
			<ProfileTabs />
		</div>
	);
};

export default ProfilePage;
