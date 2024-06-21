import PostImage from "@/../public/images/postImage.png";
import PostCard from "@/components/ui/MyComponents/cards/PostCard";
import { usePostsMe } from "@/hooks/profile";
import PostSkeleton from "../cards/skeletons/Skeleton";

const PostsList = () => {
	const { data, isLoading, error } = usePostsMe();
	console.log(data);
	return (
		<div className="grid grid-cols-2 w-full gap-y-3 gap-x-4">
			{isLoading ? (
				<PostSkeleton />
			) : (
				data?.map((post, index) => (
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
						smallImage
					/>
				))
			)}
		</div>
	);
};

export default PostsList;
