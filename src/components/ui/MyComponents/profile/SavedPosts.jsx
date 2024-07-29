"use client";
import PostCard from "@/components/ui/MyComponents/cards/PostCard";
import { useBookmarkedPosts } from "@/hooks/profile";
import PostSkeleton from "../cards/skeletons/Skeleton";
import { formatCreatedAt } from "@/lib/utils";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { useEffect, useState } from "react";

const SavedPosts = ({ id, is_owner }) => {
	const {
		items: postData,
		isLoading,
		error,
		lastItemRef,
		isFetchingNextPage,
	} = useInfiniteScroll(useBookmarkedPosts, { id });

	const [hasNoContent, setHasContent] = useState(false);
	useEffect(() => {
		if (!isLoading && error) {
			if (
				error.message ===
				"Cannot read properties of null (reading 'results')"
			)
				setHasContent(true);
		}
	}, [isLoading, error]);
	console.log(error);

	return (
		<div className="grid grid-cols-2 w-full gap-y-3 gap-x-4">
			{isLoading && <PostSkeleton />}
			{postData?.map((post, index) => (
				<PostCard
					key={post.id}
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
					smallImage
					isOwner={is_owner}
					ref={index === postData.length - 1 ? lastItemRef : null}
				/>
			))}
			{isFetchingNextPage && <PostSkeleton />}
			{error && hasNoContent ? (
				<p className="muted">User has no bookmarks</p>
			) : (
				<p>Error loading bookmarks</p>
			)}
		</div>
	);
};

export default SavedPosts;
