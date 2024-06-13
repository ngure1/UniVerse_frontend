import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/shadcnComponents/tabs";
import ProfileForm from "@/components/forms/profileForm";
import AddressFrom from "@/components/forms/addressFrom";

const EditProfileTabs = () => {
	return (
		<Tabs
			defaultValue="profile"
			className="w-[100%]">
			<TabsList className="gap-10">
				<TabsTrigger value="profile">Profile</TabsTrigger>
				<TabsTrigger value="address">Address</TabsTrigger>
			</TabsList>
			<div className="p-3">
				<TabsContent value="profile">
					<ProfileForm />
				</TabsContent>
				<TabsContent value="address">
					<AddressFrom />
				</TabsContent>
			</div>
		</Tabs>
	);
};

export default EditProfileTabs;
