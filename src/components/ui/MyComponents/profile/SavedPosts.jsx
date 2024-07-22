import PostCard from "@/components/ui/MyComponents/cards/PostCard";
import { useBookmarkedPosts } from "@/hooks/profile";
import PostSkeleton from "../cards/skeletons/Skeleton";
import { formatCreatedAt } from "@/lib/utils";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

const SavedPosts = ({ id, is_owner }) => {
	const bookmarkedPosts = (queryArgs) => useBookmarkedPosts(queryArgs);

	const {
		items: postData,
		isLoading,
		error,
		lastItemRef,
		isFetchingNextPage,
	} = useInfiniteScroll(bookmarkedPosts, { id });

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
			{error && <div>Error loading posts</div>}
		</div>
	);
};

export default SavedPosts;
