"use client";
import React from "react";
import EventCard from "@/components/ui/MyComponents/cards/EventCard";
import { useEventsListQuery } from "@/redux/features/events/eventsApiSlice";
import RightSidebar from "@/components/ui/MyComponents/RightSidebar";
import { formatCreatedAt } from "@/lib/utils";
import EventSkeleton from "@/components/ui/MyComponents/cards/skeletons/EventSkeleton";
import { Card } from "@/components/ui/shadcnComponents/card";
import AvatarProfile from "@/components/ui/MyComponents/profile/AvatarProfile";
import { useProfile } from "@/hooks/profile";
import { CalendarFold } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/shadcnComponents/dialog";
import EventForm from "@/components/forms/eventForm";
import { Button } from "@/components/ui/shadcnComponents/button";

const Events = () => {
	const { data: eventData, isLoading } = useEventsListQuery(1);
	console.log(eventData);
	const { data: profileData } = useProfile();

	return (
		<div className="flex flex-col gap-y-4">
			<Card className="flex w-[58%] min-w-[33.25rem] py-[0.6rem] flex-col items-start rounded-[0.5rem] bg-white dark:bg-muted">
				<div className="flex w-full m-2">
					<AvatarProfile
						className="w-[3rem] h-[3rem]"
						pfpImage={profileData?.profile_picture}
						first_name={profileData?.user.first_name}
						last_name={profileData?.user.last_name}
					/>
					<Dialog className="">
						<DialogTrigger asChild>
							<Button
								variant="outline"
								className="gap-1 w-full h-[5vh] rounded-[20px] mx-[1rem] ">
								<CalendarFold color="#90B494" />
								Create New Event
							</Button>
						</DialogTrigger>
						<DialogContent className="sm-max w-md">
							<DialogTitle>Events</DialogTitle>
							<EventForm article />
						</DialogContent>
					</Dialog>
				</div>
			</Card>

			{isLoading ? (
				<EventSkeleton />
			) : (
				eventData?.results?.map((event, index) => (
					<EventCard
						key={index}
						eventId={event.id}
						first_name={event.author.user.first_name}
						last_name={event.author.user.last_name}
						isVerified={event.author.is_verified}
						title={event.title}
						isOnline={true}
						isPhysical={event.is_physical}
						address={event.address}
						event_link={event.event_form_url}
						event_start_date={event.event_start_date}
						event_start_time={event.event_start_time}
						pfpImage={event.author.profile_picture}
						description={event.description}
						postImage={event.media}
						size={"large"}
						type={"Student"}
						date={formatCreatedAt(event.created_at)}
						likeCount={event.likes_count}
						bookmarkCount={event.bookmarks_count}
						isSaved={event.is_bookmarked}
						isLiked={event.is_liked}
						isFollowingCreator={event.is_following_creator}
					/>
				))
			)}
			<RightSidebar className="fixed top-[6rem] bottom-0 right-0 bg-gray-200 z-30 " />
		</div>
	);
};

export default Events;
