import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/shadcnComponents/tabs";
import { DptStarsList, AlumniList, StudentsList, LecturersList } from "./index";

import { GraduationCap, CodeXml, Library, Briefcase } from "lucide-react";

const ProfilesTabs = () => {
	return (
		<Tabs
			defaultValue="profiles"
			className="w-[89%] min-h-screen">
			<TabsList className="justify-start gap-6 w-full bg-inherit">
				<TabsTrigger
					value="dptStars"
					className="flex gap-3 font-semibold">
					<CodeXml className="text-gray-500" />
					Department Stars
				</TabsTrigger>
				<TabsTrigger
					value="alumni"
					className="flex gap-3 font-semibold">
					<GraduationCap className="text-gray-500" />
					Alumni
				</TabsTrigger>
				<TabsTrigger
					value="students"
					className="flex gap-3 font-semibold">
					<Library className="text-gray-500" />
					Students
				</TabsTrigger>
				<TabsTrigger
					value="lecturers"
					className="flex gap-3 font-semibold">
					<Briefcase className="text-gray-500" />
					Lecturers
				</TabsTrigger>
			</TabsList>
			<div className="p-3">
				<TabsContent value="dptStars">
					<DptStarsList />
				</TabsContent>
				<TabsContent value="alumni">
					<AlumniList />
				</TabsContent>
				<TabsContent value="students">
					<StudentsList />
				</TabsContent>
				<TabsContent value="lecturers">
					<LecturersList />
				</TabsContent>
			</div>
		</Tabs>
	);
};

export default ProfilesTabs;
