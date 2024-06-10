import { baseApi } from "@/redux/baseApiSlice";

const postApiSlice = baseApi.injectEndpoints({
	overrideExisting: true,
	endpoints: (builder) => ({
		postCreate: builder.mutation({
			query: ({ title, content, file_input }) => ({
				url: "/auth/post/listcreate/",
				method: "POST",
				body: { title, content, file_input },
			}),
		}),
	}),
});

export const { usePostCreateMutation } = postApiSlice;
