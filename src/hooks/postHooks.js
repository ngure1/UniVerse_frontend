import {
	usePostsLikesCreateMutation,
	usePostBookmarkCreateMutation,
	usePostsUnlikeCreateMutation,
	usePostUnbookmarkCreateMutation,
} from "@/redux/features/posts/postsApiSlice";

export const useLike = (post) => {
	const [like, { isLoading, error }] = usePostsLikesCreateMutation();
	const postId = post;
	const handleLike = () => {
		like({ post: postId })
			.unwrap()
			.then(() => {
				console.log("success");
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
				console.log("success");
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
				console.log("success");
			});
	};
	return handleUnbookmark;
};
