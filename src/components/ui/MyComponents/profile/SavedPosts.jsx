import PostImage from "@/../public/images/postImage.png";
import PostCard from "@/components/ui/MyComponents/cards/PostCard";
import { useBookmarksMe } from "@/hooks/profile";
import PostSkeleton from "../cards/skeletons/Skeleton";

const SavedPosts = () => {
	const { data, isLoading, error } = useBookmarksMe();
	console.log(data);
	return (
		<div className="grid grid-cols-2 w-full gap-y-3 gap-x-4">
			{isLoading ? (
				<PostSkeleton />
			) : (
				data?.results.map((post, index) => (
					<PostCard
						key={index}
						postId={post.post.id}
						first_name={post.post.author.user.first_name}
						last_name={post.post.author.user.last_name}
						pfpImage={post.post.author.profile_picture}
						isVerified={post.post.author.is_verified}
						isLiked={post.post.is_liked}
						isFollowingCreator={post.post.is_following_creator}
						likeCount={post.post.likes_count}
						isSaved={post.post.is_bookmarked}
						bookmarkCount={post.post.bookmarks_count}
						type="Student"
						date="1 Month Ago"
						title={post.post.title}
						content={post.post.content}
						postImage={post.post.media}
						smallImage
					/>
				))
			)}
		</div>
	);
};

export default SavedPosts;
