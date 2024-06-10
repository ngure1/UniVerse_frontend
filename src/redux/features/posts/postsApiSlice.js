import { baseApi } from "@/redux/baseApiSlice";

const postApiSlice = baseApi.injectEndpoints({
	overrideExisting: true,
	endpoints: (builder) => ({
		postCreate: builder.mutation({
			query: ({ title, content, media }) => ({
				url: "/posts/listcreate/",
				method: "POST",
				body: { title, content, media },
			}),
		}),
	}),
});

export const { usePostCreateMutation } = postApiSlice;
