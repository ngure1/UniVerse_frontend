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
					url: "/posts/listcreate/",
					method: "POST",
					body: formData,
				};
			},
		}),

		postList: builder.query({
			query: ({}) => ({
				url: "/posts/listcreate/",
				method: "GET",
			}),
		}),
	}),
});

export const { usePostCreateMutation, usePostListQuery } = postApiSlice;
