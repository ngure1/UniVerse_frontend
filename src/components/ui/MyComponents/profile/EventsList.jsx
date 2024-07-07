"use client";
import React from "react";
import EventCard from "@/components/ui/MyComponents/cards/EventCard";
import { useEventsMeQuery } from "@/redux/features/events/eventsApiSlice";
import { formatCreatedAt } from "@/lib/utils";
import EventSkeleton from "@/components/ui/MyComponents/cards/skeletons/EventSkeleton";

const Events = () => {
	const { data: eventData, isLoading } = useEventsMeQuery(null);
	console.log(eventData);

	return (
		<div className="flex flex-col gap-y-4">
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
						isOwner
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
		</div>
	);
};

export default Events;
