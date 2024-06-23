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
				// linked_in_url,
			}) => ({
				url: "/profile/",
				method: "PATCH",
				body: {
					is_student,
					is_alumni,
					is_lecturer,
					bio,
					phone_number,
					// linked_in_url,
				},
			}),
			invalidatesTags: ["PROFILE"],
		}),

		// profilePucture
		profilePictureUpdate: builder.mutation({
			query: ({ profile_picture }) => {
				const formData = new FormData();
				formData.append("profile_picture", profile_picture[0]);
				return {
					url: "/profile/",
					method: "PATCH",
					body: formData,
				};
			},
			invalidatesTags: ["PROFILE", "POSTS", "BOOKMARKS"],
		}),

		//add an address to the profile
		profileAddressCreate: builder.mutation({
			query: ({ city, country }) => ({
				url: "/address/create/",
				method: "POST",
				body: { city, country },
			}),
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
			providesTags: ["POSTS"],
		}),
	}),
});

export const {
	useProfileCreateMutation,
	useProfilePictureUpdateMutation,
	useProfileMeQuery,
	useProfileFollowToggleMutation,

	//address
	useProfileAddressCreateMutation,
	usePostsMeQuery,
	usePostsBookmarksMeQuery,
} = profileApiSlice;
