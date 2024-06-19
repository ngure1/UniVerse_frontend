import React from "react";
import Link from "next/link";
import { CalendarDays, UserRoundCheck, VerifiedIcon, Plus } from "lucide-react";
import AvatarProfile from "./profile/AvatarProfile";
import { Separator } from "../shadcnComponents/separator";
import { Button } from "../shadcnComponents/button";

const RightSidebar = ({ className }) => {
	return (
		<div
			className={`${className} min-h-screen w-[25%] gap-5 flex flex-col p-5`}>
			<div className="flex flex-col gap-2 bg-white p-5 rounded-lg">
				<div className="flex justify-between ">
					<div className="flex gap-2">
						<UserRoundCheck />
						<h3>People To Follow</h3>
					</div>
					<Link
						href="/dpt-stars"
						className="text-blue-500 ">
						See More
					</Link>
				</div>
				<Separator />

				<div className="flex flex-col gap-3">
					<HomeProfilesCard
						firstName={"Joseph"}
						lastName={"Ngure"}
						postCount={300}
					/>
					<HomeProfilesCard
						firstName={"Bonface"}
						lastName={"Theuri"}
						postCount={300}
					/>
				</div>
			</div>

			<div className="flex flex-col gap-2 bg-white p-5 rounded-lg">
				<div className="flex justify-between ">
					<div className="flex gap-2">
						<CalendarDays />
						<h3>Upcoming Event</h3>
					</div>
					<Link
						href="/events"
						className="text-blue-500 ">
						See More
					</Link>
				</div>
				<Separator />
				<HomeEventCard />
				<HomeEventCard />
				<HomeEventCard />
			</div>
		</div>
	);
};

export default RightSidebar;

const HomeEventCard = () => {
	return (
		<div className="flex h-[8rem] gap-2 ">
			<div className=" w-[85%]  bg-slate-800 rounded"></div>

			<div>
				<p className="text-sm muted">12 Oct,1300GMT</p>
				<p className="text-xl font-semibold ">Design Talk Event</p>
				<p className="text-sm ">Joseph Ngure</p>
			</div>
		</div>
	);
};

const HomeProfilesCard = ({ firstName, lastName, postCount }) => {
	return (
		<div className="flex items-start gap-2 justify-between ">
			<AvatarProfile
				first_name={firstName}
				last_name={lastName}
			/>
			<p className="flex flex-col">
				<span className="">
					{firstName} {lastName}{" "}
				</span>
				<span className="muted text-sm">{postCount}k followers</span>
			</p>
			<VerifiedIcon
				fill="#00B595"
				color="#ffff"
				size={24}
			/>
			<Button
				// variant="ghost"
				size="sm"
				className="gap-2">
				<Plus />
				Follow
			</Button>
		</div>
	);
};
