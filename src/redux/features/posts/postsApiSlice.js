import { baseApi } from "@/redux/baseApiSlice";

const postApiSlice = baseApi.injectEndpoints({
	overrideExisting: true,
	endpoints: (builder) => ({
		postCreate: builder.mutation({
			query: ({ title, content, media }) => {
				const formData = new FormData();
				formData.append("title", title);
				formData.append("content", content);
				formData.append("media", media[0]);

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
	}),
});

export const {
	// * crud on post
	usePostCreateMutation,
	usePostListQuery,
	usePostDeleteMutation,

	// * crud on like
	usePostsLikesCreateMutation,
	usePostsUnlikeCreateMutation,

	// * crud on bookmark
	usePostBookmarkCreateMutation,
	usePostUnbookmarkCreateMutation,
} = postApiSlice;
