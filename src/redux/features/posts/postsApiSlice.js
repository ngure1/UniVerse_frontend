import { baseApi } from "@/redux/baseApiSlice";

const postApiSlice = baseApi.injectEndpoints({
	overrideExisting: true,
	endpoints: (builder) => ({
		postCreate: builder.mutation({
			query: ({ title, content, media }) => {
				const formData = new FormData();
				formData.append("title", title);
				formData.append("content", content);
				if (media && media.length > 0) {
					formData.append("media", media[0]);
				}

				return {
					url: "/posts/",
					method: "POST",
					body: formData,
				};
			},
			invalidatesTags: ["POSTS"],
		}),

		// * listing all posts
		postList: builder.query({
			query: ({}) => ({
				url: "/posts/",
				method: "GET",
			}),
			providesTags: ["POSTS"],
		}),

		// * deleting a post
		postDelete: builder.mutation({
			query: ({ post_id }) => ({
				url: `/posts/${post_id}/`,
				method: "DELETE",
			}),
			invalidatesTags: ["POSTS"],
		}),

		// liking a post
		postsLikesCreate: builder.mutation({
			query: ({ post }) => ({
				url: `/posts/likes/${post}/`,
				method: "POST",
			}),
			invalidatesTags: ["POSTS", "LIKES"],
		}),

		// unliking a post
		postsUnlikeCreate: builder.mutation({
			query: ({ post }) => ({
				url: `/posts/unlikes/${post}/`,
				method: "DELETE",
			}),
			invalidatesTags: ["POSTS", "LIKES"],
		}),

		// saving/bookmarking a post
		postBookmarkCreate: builder.mutation({
			query: ({ post }) => ({
				url: `/posts/bookmarks/${post}/`,
				method: "POST",
			}),
			invalidatesTags: ["POSTS", "BOOKMARKS"],
		}),

		// unsaving/unbookmarking a post
		postUnbookmarkCreate: builder.mutation({
			query: ({ post }) => ({
				url: `/posts/unbookmarks/${post}/`,
				method: "DELETE",
			}),
			invalidatesTags: ["POSTS", "BOOKMARKS"],
		}),

		//* creating a comment
		postsCommentCreate: builder.mutation({
			query: ({ post, text }) => ({
				url: `/posts/comments/${post}/`,
				method: "POST",
				body: { text },
			}),
			invalidatesTags: ["POSTS"],
		}),

		// * listing a posts comments
		postsCommentList: builder.query({
			query: ({ post }) => ({
				url: `/posts/comments/post/${post}/`,
				method: "GET",
			}),
			providesTags: ["POSTS"],
		}),

		postDetail: builder.query({
			query: ({ post_id }) => ({
				url: `/posts/${post_id}/`,
				method: "GET",
			}),
			providesTags: ["POSTS"],
		}),

		postUpdate: builder.mutation({
			query: ({ post_id, title, content, media }) => {
				const formData = new FormData();
				formData.append("title", title);
				formData.append("content", content);
				if (media && media.length > 0) {
					formData.append("media", media[0]);
				}

				return {
					url: `/posts/${post_id}/`,
					method: "PATCH",
					body: formData,
				};
			},
			invalidatesTags: ["POSTS"],
		}),

		// users post listing
		postsUserList: builder.query({
			query: ({ user_id }) => ({
				url: `/posts/user/${user_id}/`,
				method: "GET",
			}),
			providesTags: ["POSTS"],
		}),
	}),
});

export const {
	// * crud on post
	usePostCreateMutation,
	usePostListQuery,
	usePostDeleteMutation,

	// * crud on post detail
	usePostDetailQuery,
	usePostUpdateMutation,

	// * crud on like
	usePostsLikesCreateMutation,
	usePostsUnlikeCreateMutation,

	// * crud on bookmark
	usePostBookmarkCreateMutation,
	usePostUnbookmarkCreateMutation,

	// * comments
	usePostsCommentCreateMutation,
	usePostsCommentListQuery,

	// * user specific posts
	usePostsUserListQuery,
} = postApiSlice;
