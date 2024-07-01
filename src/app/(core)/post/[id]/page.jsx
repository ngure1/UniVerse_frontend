"use client";
import React from "react";
import { usePostDetailQuery } from "@/redux/features/posts/postsApiSlice";
import PostCard from "@/components/ui/MyComponents/cards/PostCard";
import PostSkeleton from "@/components/ui/MyComponents/cards/skeletons/Skeleton";
import RightSidebar from "@/components/ui/MyComponents/RightSidebar";
import { formatCreatedAt } from "@/lib/utils";

const Page = ({ params }) => {
	const {
		data: post,
		error,
		isLoading,
	} = usePostDetailQuery({ post_id: params.id });
	console.log(post);
	const id = params.id;
	return (
		<div>
			{isLoading ? (
				<PostSkeleton />
			) : (
				<PostCard
					postId={post.id}
					profileId={post.author.id}
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
					date={formatCreatedAt(post.created_at)}
					title={post.title}
					content={post.content}
					postImage={post.media}
					size="large"
					isPostDetails
				/>
			)}
			<RightSidebar className="fixed top-[6rem] bottom-0 right-0 bg-gray-200 z-30 " />
		</div>
	);
};

export default Page;
