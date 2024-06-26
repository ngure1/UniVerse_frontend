"use client";
import React from "react";
import PostCard from "@/components/ui/MyComponents/cards/PostCard";
import PostImage from "@/../public/images/postImage.png";
import EventForm from "@/components/forms/eventForm";
import EventCard from "@/components/ui/MyComponents/cards/EventCard";
const Events = () => {
	return (
		<div>
			<EventForm article />
			{/* <EventCard
				first_name="Jane"
				last_name="Doe"
				title = "JKUAT Tech Expo"
				isOnline={false}
				address="JKUAT"
				event_link="https://www.jkuat.ac.ke/"
				event_date="10th June 2024"
				type="Student"
				time="10:00 AM"
				pfpImage={"images/ProfilePic.jpeg"}
				date="1 Month Ago"
				description="Exploring the intersection of technology, design, and innovation, our blog offers insights, tips, and  .....Read More"
				postImage={PostImage}
				size="small"
			/> */}
		</div>
	);
};

export default Events;
