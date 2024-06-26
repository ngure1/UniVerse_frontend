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
			// invalidatesTags: ["EVENTS"],
		}),
		//listing events
		eventsList: builder.query({
			query: ({}) => ({
				url: "/events/",
				method: "GET",
			}),
			// providesTags: ["EVENTS"],
		}),
	}),
});

export const { useEventsCreateMutation, useEventsListQuery } = eventApiSlice;
