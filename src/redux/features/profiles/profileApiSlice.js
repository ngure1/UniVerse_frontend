import { baseApi } from "@/redux/baseApiSlice";

const profileApiSlice = baseApi.injectEndpoints({
	overrideExisting: true,
	endpoints: (builder) => ({
		profileCreate: builder.mutation({
			query: ({
				is_student,
				is_alumni,
				is_lecturer,
				bio,
				phone_number,
				linked_in_url,
			}) => {
				const formData = new FormData();
				formData.append("is_student", is_student);
				formData.append("is_alumni", is_alumni);
				formData.append("is_lecturer", is_lecturer);
				formData.append("bio", bio);
				formData.append("phone_number", phone_number);
				formData.append("linked_in_url", linked_in_url);

				return {
					url: "/profile/",
					method: "PATCH",
					body: formData,
				};
			},
			invalidatesTags: ["PROFILE"],
		}),

		profileMe: builder.query({
			query: () => ({
				url: "/profile/",
				method: "GET",
			}),
			providesTags: ["PROFILE"],
		}),

		//following and unfollowing a profile/user
		profileFollowToggle: builder.mutation({
			query: ({ followed_id }) => ({
				url: "/follow-toggle/",
				method: "POST",
				body: { followed_id },
			}),
			providesTags: ["PROFILE", "POSTS"],
		}),

		// * fetch posts for the logged in user
		postsMe: builder.query({
			query: () => ({
				url: "/posts/me/",
				method: "GET",
			}),
			providesTags: ["POSTS"],
		}),

		postsBookmarksMe: builder.query({
			query: () => ({
				url: "/posts/bookmarks/me/",
				method: "GET",
			}),
			providesTags: ["BOOKMARKS"],
		}),
	}),
});

export const {
	useProfileCreateMutation,
	useProfileMeQuery,
	useProfileFollowToggleMutation,
	usePostsMeQuery,
	usePostsBookmarksMeQuery,
} = profileApiSlice;
