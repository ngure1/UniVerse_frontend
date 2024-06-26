import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/shadcnComponents/tabs";
import { EducationList, PostsList, SavedPosts, WorkList } from "./index";
import {
	GraduationCap,
	BriefcaseBusiness,
	BookMarked,
	Grid3X3,
} from "lucide-react";

const ProfileTabs = ({ user_id, is_owner }) => {
	return (
		<Tabs
			defaultValue="posts"
			className="w-[89%] min-h-screen">
			<TabsList className="justify-around w-full bg-inherit">
				<TabsTrigger
					value="posts"
					className="flex gap-3 font-semibold">
					<Grid3X3 className="text-gray-500" />
					Posts
				</TabsTrigger>
				<TabsTrigger
					value="work"
					className="flex gap-3 font-semibold">
					<BriefcaseBusiness className="text-gray-500" />
					<span>Work</span>
				</TabsTrigger>
				<TabsTrigger
					value="education"
					className="flex gap-3 font-semibold">
					<GraduationCap className="text-gray-500" />
					<span>Education</span>
				</TabsTrigger>
				<TabsTrigger
					value="savedPosts"
					className="flex gap-3 font-semibold">
					<BookMarked className="text-gray-500" />
					Saved Posts
				</TabsTrigger>
			</TabsList>
			<div className="p-3">
				<TabsContent value="posts">
					<PostsList
						id={user_id}
						is_owner={is_owner}
					/>
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
