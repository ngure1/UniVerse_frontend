import {
	usePostsLikesCreateMutation,
	usePostBookmarkCreateMutation,
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

export const useBookmark = (post) => {
	const [bookmark, { isLoading, error }] = usePostBookmarkCreateMutation();
	const postId = post;
	const handlebookmark = () => {
		bookmark({ post: postId })
			.unwrap()
			.then(() => {
				console.log("success");
			});
	};
	return handlebookmark;
};
