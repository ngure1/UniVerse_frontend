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
		}),

		postList: builder.query({
			query: ({}) => ({
				url: "/posts/",
				method: "GET",
			}),
		}),

		// liking a post
		postsLikesCreate: builder.mutation({
			query: ({ post }) => ({
				url: `/posts/likes/${post}/`,
				method: "POST",
			}),
		}),

		// unliking a post
		postsUnlikeCreate: builder.mutation({
			query: ({ post }) => ({
				url: `/posts/unlikes/${post}/`,
				method: "DELETE",
			}),
		}),

		// saving/bookmarking a post
		postBookmarkCreate: builder.mutation({
			query: ({ post }) => ({
				url: `/posts/bookmarks/${post}/`,
				method: "POST",
			}),
		}),

		// unsaving/unbookmarking a post
		postUnbookmarkCreate: builder.mutation({
			query: ({ post }) => ({
				url: `/posts/unbookmarks/${post}/`,
				method: "DELETE",
			}),
		}),
	}),
});

export const {
	usePostCreateMutation,
	usePostListQuery,
	usePostsLikesCreateMutation,
	usePostBookmarkCreateMutation,
	usePostsUnlikeCreateMutation,
	usePostUnbookmarkCreateMutation,
} = postApiSlice;
