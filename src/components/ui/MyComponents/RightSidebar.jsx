import React from "react";
import Link from "next/link";
import { CalendarDays, UserRoundCheck, VerifiedIcon, Plus } from "lucide-react";
import AvatarProfile from "./profile/AvatarProfile";
import { Separator } from "../shadcnComponents/separator";
import { Button } from "../shadcnComponents/button";
import { useDptStarsListQuery } from "@/redux/features/profileTabs/profilesApiSlice";
import { useFollowToggle } from "@/hooks/profile";

const RightSidebar = ({ className }) => {
	const { data: dptStarsData, isLoading } = useDptStarsListQuery(1);

	return (
		<div
			className={`${className} min-h-screen w-[25%] gap-5 xl:flex flex-col p-5 bg-inherit hidden sm:hidden`}>
			<div className="flex flex-col gap-2 bg-white p-5 rounded-lg dark:bg-muted">
				<div className="flex justify-between ">
					<div className="flex gap-2">
						<UserRoundCheck />
						<h3>People To Follow</h3>
					</div>
					<Link
						href="/profiles"
						className="text-blue-500 ">
						See More
					</Link>
				</div>
				<Separator />

				<div className="flex flex-col gap-3">
					{isLoading ? (
						<p>Loading...</p>
					) : (
						dptStarsData?.results
							?.slice(0, 2)
							.map((profiles, index) => (
								<HomeProfilesCard
									key={index}
									profilesId={profiles.id}
									pfpImage={profiles.profile_picture}
									firstName={profiles.user.first_name}
									lastName={profiles.user.last_name}
									postCount={profiles.followers_count}
								/>
							))
					)}

					{/* <HomeProfilesCard
						firstName={"Bonface"}
						lastName={"Theuri"}
						postCount={300}
					/> */}
				</div>
			</div>

			<div className="flex flex-col gap-2 bg-white p-5 rounded-lg dark:bg-muted">
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
				<p className="text-sm muted dark:filter dark:invert">
					12 Oct,1300GMT
				</p>
				<p className="text-xl font-semibold ">Design Talk Event</p>
				<p className="text-sm ">Joseph Ngure</p>
			</div>
		</div>
	);
};

const HomeProfilesCard = ({
	profileId,
	firstName,
	lastName,
	postCount,
	pfpImage,
	isFollowing,
}) => {
	const handleFollow = useFollowToggle(profileId, isFollowing);

	return (
		<div className="flex items-start gap-2 justify-between ">
			<AvatarProfile
				pfpImage={pfpImage}
				first_name={firstName}
				last_name={lastName}
			/>
			<p className="flex flex-col">
				<span className="">
					{firstName} {lastName}{" "}
				</span>
				<span className="muted dark:filter dark:invert text-sm">
					{postCount} {postCount === 1 ? "Follower" : "Followers"}
				</span>
			</p>
			<VerifiedIcon
				fill="#00B595"
				size={24}
			/>
			<Button
				// variant="ghost"
				onClick={handleFollow}
				size="sm"
				className="gap-2">
				<Plus />
				Follow
			</Button>
		</div>
	);
};
