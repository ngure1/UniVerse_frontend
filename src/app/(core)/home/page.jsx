"use client";
import React from "react";
import PostImage from "@/../public/images/postImage.png";
import PostCard from "@/components/ui/MyComponents/PostCard";
import PostSkeleton from "@/components/ui/MyComponents/Skeleton";
import ProfilePic from "@/../public/images/ProfilePic.jpeg";

const Home = () => {
	return (
		<div className="flex flex-col gap-4">
			<PostCard
				name="Jane Doe"
				pfpImage={"https://github.com/shadcn.png"}
				isVerified
				type="Student"
				date="1 Month Ago"
				content="Exploring the intersection of technology, design, and innovation, our blog offers insights, tips, and  .....Read More"
				postImage={PostImage}
			/>
			<PostCard
				name="Jane Doe"
				type="Student"
				pfpImage={"../../../../public/images/ProfilePic.jpeg"}
				date="1 Month Ago"
				content="Exploring the intersection of technology, design, and innovation, our blog offers insights, tips, and  .....Read More"
				postImage={PostImage}
			/>
			<PostSkeleton />
		</div>
	);
};

export default Home;
