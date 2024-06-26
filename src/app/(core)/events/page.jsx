"use client";
import React from "react";
import EventCard from "@/components/ui/MyComponents/cards/EventCard";
import { useEventsListQuery } from "@/redux/features/events/eventsApiSlice";
const Events = () => {
	const { data: eventData } = useEventsListQuery(1);
	console.log(eventData);
	return eventData?.results?.map((event, index) => (
		<EventCard
			key={index}
			first_name={event.author.user.first_name}
			last_name={event.author.user.last_name}
			isVerified={event.author.is_verified}
			title={event.title}
			isOnline={event.is_online}
			isPhysical={event.is_physical}
			address={event.address}
			event_link={event.event_form_url}
			event_date={event.event_start_date}
			type={event.type}
			time={event.event_start_time}
			pfpImage={event.profile_picture}
			date={event.date}
			description={event.description}
			postImage={event.media}
			size={"large"}
		/>
	));
};

export default Events;
