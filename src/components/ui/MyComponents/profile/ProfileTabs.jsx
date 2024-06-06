import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/shadcnComponents/tabs";
import { EducationList, PostsList, SavedPosts, WorkList } from "./index";

const ProfileTabs = () => {
	return (
		<Tabs
			defaultValue="posts"
			className="w-[100%]">
			<TabsList className="gap-10">
				<TabsTrigger value="posts">Posts</TabsTrigger>
				<TabsTrigger value="work">Work</TabsTrigger>
				<TabsTrigger value="education">Education</TabsTrigger>
				<TabsTrigger value="savedPosts">Saved Posts</TabsTrigger>
			</TabsList>
			<div className="p-3">
				<TabsContent value="posts">
					<PostsList />
				</TabsContent>
				<TabsContent value="work">
					<WorkList />
				</TabsContent>
				<TabsContent value="education">
					<EducationList />
				</TabsContent>
				<TabsContent value="savedPosts">
					<SavedPosts />
				</TabsContent>
			</div>
		</Tabs>
	);
};

export default ProfileTabs;
