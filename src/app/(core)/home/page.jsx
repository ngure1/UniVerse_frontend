"use client";
import React from "react";
import PostImage from "@/../public/images/postImage.png";
import PostCard from "@/components/ui/MyComponents/PostCard";
import { usePostListQuery } from "@/redux/features/posts/postsApiSlice";

const Home = () => {
	const { data, isLoading } = usePostListQuery(1);
	console.log(data);
	// console.log(data?.result?.author.user)

	return (
		<div className="flex flex-col gap-4">
			{isLoading ? (
				<p>Is Loading...</p>
			) : (
				data?.results?.map((post, index) => (
					<PostCard
						key={index}
						first_name={post.author.user.first_name}
						last_name={post.author.user.last_name}
						pfpImage={post.author.profile_picture}
						isVerified={post.author.is_verified}
						type="Student"
						date="1 Month Ago"
						content={post.content}
						postImage={PostImage}
						size="large"
					/>
				))
			)}

			{/* <PostCard
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
			/> */}
		</div>
	);
};

export default Home;
