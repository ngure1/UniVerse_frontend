"use client";
import React from "react";
import PostCard from "@/components/ui/MyComponents/cards/PostCard";
import { usePostListQuery } from "@/redux/features/posts/postsApiSlice";
import PostSkeleton from "@/components/ui/MyComponents/cards/skeletons/Skeleton";
import RightSidebar from "@/components/ui/MyComponents/RightSidebar";

const Home = () => {
	const { data, isLoading } = usePostListQuery(1);

	return (
		<div>
			<div className="flex flex-col gap-4">
				{isLoading ? (
					<PostSkeleton />
				) : (
					data?.results?.map((post, index) => (
						<PostCard
							key={index}
							postId={post.id}
							first_name={post.author.user.first_name}
							last_name={post.author.user.last_name}
							pfpImage={post.author.profile_picture}
							isVerified={post.author.is_verified}
							isLiked={post.is_liked}
							isFollowingCreator={post.is_following_creator}
							likeCount={post.likes_count}
							isSaved={post.is_bookmarked}
							bookmarkCount={post.bookmarks_count}
							type="Student"
							date="1 Month Ago"
							title={post.title}
							content={post.content}
							postImage={post.media}
							size="large"
						/>
					))
				)}
			</div>
			<RightSidebar className="fixed top-[6rem] bottom-0 right-0 bg-gray-200 z-30 " />
		</div>
	);
};

export default Home;
