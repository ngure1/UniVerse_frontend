"use client";
import React from "react";
import EventCard from "@/components/ui/MyComponents/cards/EventCard";
import { useEventsListQuery } from "@/redux/features/events/eventsApiSlice";
import RightSidebar from "@/components/ui/MyComponents/RightSidebar";
const Events = () => {
	const { data: eventData, isLoading } = useEventsListQuery(1);
	console.log(eventData);
	return (
		<div className="flex flex-col gap-y-4">
			{isLoading ? (
				<p>Loading</p>
			) : (
				eventData?.results?.map((event, index) => (
					<EventCard
						key={index}
						first_name={event.author.user.first_name}
						last_name={event.author.user.last_name}
						isVerified={event.author.is_verified}
						title={event.title}
						isOnline={true}
						isPhysical={event.is_physical}
						address={event.address}
						event_link="https://www.example.com"
						event_start_date="12th October 2021"
						event_start_time="12:00 PM"
						pfpImage={event.profile_picture}
						description={event.description}
						postImage={event.media}
						size={"large"}
						type={"Student"}
						date={"1 Month Ago"}
					/>
				))
			)}
			<RightSidebar className="fixed top-[6rem] bottom-0 right-0 bg-gray-200 z-30 " />
		</div>
	);
};

export default Events;
