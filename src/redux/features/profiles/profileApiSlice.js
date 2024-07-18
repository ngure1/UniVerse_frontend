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
				course,
				job_role,
				organization,
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
					course,
					job_role,
					organization,
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
				url: "/address/",
				method: "PATCH",
				body: { city, country },
			}),
			invalidatesTags: ["PROFILE"],
		}),

		//retrieve address
		profileAddressRetrieve: builder.query({
			query: () => ({
				url: "/address/",
				method: "GET",
			}),
			providesTags: ["PROFILE"],
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
			invalidatesTags: ["PROFILE", "POSTS", "EVENTS"],
		}),

		// * fetch posts for the logged in user
		postsMe: builder.query({
			query: ({ page }) => ({
				url: `/posts/me/?page=${page}`,
				method: "GET",
			}),
			transformResponse: (response) => {
				return {
					results: response.results,
					hasNextPage: !!response.next,
				};
			},
			providesTags: ["POSTS"],
		}),

		// users post listing
		postsUserList: builder.query({
			query: ({ user_id, page }) => ({
				url: `/posts/user/${user_id}/?page=${page}`,
				method: "GET",
			}),
			transformResponse: (response) => {
				return {
					results: response.results,
					hasNextPage: !!response.next,
				};
			},
			providesTags: ["POSTS"],
		}),

		postsBookmarksMe: builder.query({
			query: () => ({
				url: "/posts/bookmarks/me/",
				method: "GET",
			}),
			providesTags: ["POSTS"],
		}),

		// * profile details
		profileDetail: builder.query({
			query: ({ profile_id }) => ({
				url: `/user/profiles/${profile_id}/`,
				method: "GET",
			}),
			providesTags: ["PROFILE"],
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
	useProfileAddressRetrieveQuery,

	//profile detail
	useProfileDetailQuery,
} = profileApiSlice;
