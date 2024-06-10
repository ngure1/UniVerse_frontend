import React from "react";
import PostCard from "@/components/ui/MyComponents/PostCard";
import PostImage from "@/../public/images/postImage.png";
const Events = () => {
	return (
		<div>
			<PostCard
				first_name="Jane"
				last_name="Doe"
				forEvents
				isOnline
				address="JKUAT"
				event_date="10th June 2024"
				type="Student"
				pfpImage={"images/ProfilePic.jpeg"}
				date="1 Month Ago"
				content="Exploring the intersection of technology, design, and innovation, our blog offers insights, tips, and  .....Read More"
				postImage={PostImage}
				size="small"
			/>
		</div>
	);
};

export default Events;
