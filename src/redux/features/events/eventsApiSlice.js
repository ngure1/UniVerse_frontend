import { baseApi } from "@/redux/baseApiSlice";

const eventApiSlice = baseApi.injectEndpoints({
	overrideExisting: true,
	endpoints: (builder) => ({
		eventsCreate: builder.mutation({
			query: ({
				title,
				description,
				event_start_time,
				event_start_date,
				address,
				event_link,
				media,
			}) => {
				const formData = new FormData();
				formData.append("title", title);
				formData.append("description", description);
				formData.append("event_start_time", event_start_time);
				formData.append("event_start_date", event_start_date);
				formData.append("address", address);
				formData.append("event_link", event_link);
				if (media && media.length > 0) {
					formData.append("media", media[0]);
				}

				return {
					url: "/events/",
					method: "POST",
					body: formData,
				};
			},
			invalidatesTags: ["EVENTS"],
		}),
		//listing events
		eventsList: builder.query({
			query: ({}) => ({
				url: "/events/",
				method: "GET",
			}),
			providesTags: ["EVENTS"],
		}),

		// liking an event
		eventsLikesCreate: builder.mutation({
			query: ({ event }) => ({
				url: `/events/likes/${event}/`,
				method: "POST",
			}),
			invalidatesTags: ["EVENTS", "LIKES"],
		}),

		// unliking an event
		eventsUnlikeCreate: builder.mutation({
			query: ({ event }) => ({
				url: `/events/unlikes/${event}/`,
				method: "DELETE",
			}),
			invalidatesTags: ["EVENTS", "LIKES"],
		}),

		// saving/bookmarking a post
		eventBookmarkCreate: builder.mutation({
			query: ({ event }) => ({
				url: `/events/bookmarks/${event}/`,
				method: "POST",
			}),
			invalidatesTags: ["EVENTS", "BOOKMARKS"],
		}),

		// unsaving/unbookmarking an event
		eventUnbookmarkCreate: builder.mutation({
			query: ({ event }) => ({
				url: `/events/unbookmarks/${event}/`,
				method: "DELETE",
			}),
			invalidatesTags: ["EVENTS", "BOOKMARKS"],
		}),

		// creating comments
		eventsCommentCreate: builder.mutation({
			query: ({ event, text }) => ({
				url: `/events/comments/${event}/`,
				method: "POST",
				body: { text },
			}),
			invalidatesTags: ["EVENTS"],
		}),

		//events comments
		eventsCommentsList: builder.query({
			query: ({ event }) => ({
				url: `/events/comments/event/${event}/`,
				method: "GET",
			}),
		}),
	}),
});

export const {
	useEventsCreateMutation,
	useEventsListQuery,
	useEventsLikesCreateMutation,
	useEventsUnlikeCreateMutation,
	useEventBookmarkCreateMutation,
	useEventUnbookmarkCreateMutation,
	useEventsCommentCreateMutation,
	useEventsCommentsListQuery,
} = eventApiSlice;
