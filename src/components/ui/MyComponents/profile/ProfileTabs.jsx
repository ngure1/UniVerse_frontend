import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/shadcnComponents/tabs";
import {
	EducationList,
	PostsList,
	SavedPosts,
	WorkList,
	EventsList,
} from "./index";
import {
	GraduationCap,
	BriefcaseBusiness,
	BookMarked,
	Grid3X3,
	CalendarRange,
} from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/shadcnComponents/dialog";
import EducationListForm from "@/components/forms/educationListForm";
import { Button } from "@/components/ui/shadcnComponents/button";
import { Plus } from "lucide-react";

const ProfileTabs = ({ user_id, is_owner }) => {
	return (
		<Tabs
			defaultValue="posts"
			className="w-[89%] min-h-screen">
			<TabsList className="justify-start gap-6 w-full bg-inherit">
				<TabsTrigger
					value="posts"
					className="flex gap-3 font-semibold">
					<Grid3X3 className="text-gray-500" />
					Posts
				</TabsTrigger>
				<TabsTrigger
					value="events"
					className="flex gap-3 font-semibold">
					<CalendarRange className="text-gray-500" />
					Events
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
				<TabsContent value="events">
					<EventsList
						id={user_id}
						is_owner={is_owner}
					/>
				</TabsContent>
				<TabsContent value="work">
					<WorkList />
				</TabsContent>
				<TabsContent value="education">
					<div className="flex flex-col ">
						<Dialog className="">
							<DialogTrigger asChild>
								<Button
									variant="outline"
									className="gap-1 w-[50%] h-[5vh] mb-2 ">
									<Plus color="#90B494" />
									Add Education Details
								</Button>
							</DialogTrigger>
							<DialogContent className="sm-max w-md">
								<DialogTitle>Education</DialogTitle>
								<EducationListForm />
							</DialogContent>
						</Dialog>
						<EducationList />
					</div>
				</TabsContent>
				<TabsContent value="savedPosts">
					<SavedPosts
						id={user_id}
						is_owner={is_owner}
					/>
				</TabsContent>
			</div>
		</Tabs>
	);
};

export default ProfileTabs;
