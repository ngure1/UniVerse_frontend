import {
	usePostsLikesCreateMutation,
	usePostBookmarkCreateMutation,
	usePostsUnlikeCreateMutation,
	usePostUnbookmarkCreateMutation,
	usePostsCommentCreateMutation,
} from "@/redux/features/posts/postsApiSlice";
import { toast } from "react-toastify";

export const useLike = (post) => {
	const [like, { isLoading, error }] = usePostsLikesCreateMutation();
	const postId = post;
	const handleLike = () => {
		like({ post: postId })
			.unwrap()
			.then(() => {
				console.log("success");
				toast.success("Post liked successfully!");
			})
			.catch((err) => {
				console.error(err);
				toast.error("Failed to like the post.");
			});
	};
	return handleLike;
};

export const useUnlike = (post) => {
	const [unlike, { isLoading, error }] = usePostsUnlikeCreateMutation();
	const postId = post;
	const handleUnlike = () => {
		unlike({ post: postId })
			.unwrap()
			.then(() => {
				console.log("success");
				toast.success("Post unliked successfully!");
			})
			.catch((err) => {
				console.error(err);
				toast.error("Failed to unlike the post.");
			});
	};
	return handleUnlike;
};
export const useBookmark = (post) => {
	const [bookmark, { isLoading, error }] = usePostBookmarkCreateMutation();
	const postId = post;
	const handleBookmark = () => {
		bookmark({ post: postId })
			.unwrap()
			.then(() => {
				toast.success("Post bookmarked successfully!");
			})
			.catch((err) => {
				toast.error("Failed to bookmark the post.");
			});
	};
	return handleBookmark;
};

export const useUnbookmark = (post) => {
	const [unbookmark, { isLoading, error }] =
		usePostUnbookmarkCreateMutation();
	const postId = post;
	const handleUnbookmark = () => {
		unbookmark({ post: postId })
			.unwrap()
			.then(() => {
				toast.success("Post unbookmarked successfully!");
			})
			.catch((err) => {
				toast.error("Failed to unbookmark the post.");
			});
	};
	return handleUnbookmark;
};

export const useComment = (postId, text) => {
	const [comment] = usePostsCommentCreateMutation();
	const handleComment = () => {
		comment({ post: postId, text: text })
			.unwrap()
			.then(() => {
				toast.success("Comment added successfully!");
			})
			.catch((err) => {
				toast.error("Failed to add your comment.");
			});
	};
	return handleComment;
};
