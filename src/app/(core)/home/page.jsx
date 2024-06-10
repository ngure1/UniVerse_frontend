"use client";
import React from "react";
import PostImage from "@/../public/images/postImage.png";
import PostCard from "@/components/ui/MyComponents/PostCard";

const Home = () => {
	return (
		<div className="flex flex-col gap-4">
			<PostCard
				first_name="John"
				last_name="Doe"
				pfpImage={"https://github.com/shadcn.png"}
				isVerified
				type="Student"
				date="1 Month Ago"
				content="Exploring the intersection of technology, design, and innovation, our blog offers insights, tips, and  .....Read More"
				postImage={PostImage}
				size="large"
			/>
			<PostCard
				first_name="Jane"
				last_name="Doe"
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

export default Home;
