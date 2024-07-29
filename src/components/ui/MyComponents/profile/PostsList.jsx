"use client";
import React, { useState, useEffect } from "react";
import PostCard from "@/components/ui/MyComponents/cards/PostCard";
import PostSkeleton from "../cards/skeletons/Skeleton";
import { useProfilePosts } from "@/hooks/profile";
import { formatCreatedAt } from "@/lib/utils";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

const PostsList = ({ id, is_owner }) => {
	const {
		items: postData,
		isLoading,
		error,
		lastItemRef,
		isFetchingNextPage,
	} = useInfiniteScroll(useProfilePosts, { id });

	return (
		<div className="flex flex-col w-full gap-y-3">
			{isLoading && <PostSkeleton />}
			{postData?.map((post, index) => (
				<PostCard
					key={post.id} // Use post.id as the key instead of index for better stability
					postId={post.id}
					first_name={post.author.user.first_name}
					last_name={post.author.user.last_name}
					profileId={post.author.id}
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
					smallImage
					forProfile
					isOwner={is_owner}
					ref={index === postData.length - 1 ? lastItemRef : null} // Add ref to the last item
				/>
			))}
			{isFetchingNextPage && <PostSkeleton />}
			{error && hasNoContent ? (
				<p className="muted">User has not posted any events</p>
			) : (
				<div>Error loading events</div>
			)}{" "}
		</div>
	);
};

export default PostsList;
