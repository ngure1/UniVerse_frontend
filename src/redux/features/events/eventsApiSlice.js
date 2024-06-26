import { baseApi } from "@/redux/baseApiSlice";

const eventApiSlice = baseApi.injectEndpoints({
	overrideExisting: true,
	endpoints: (builder) => ({
		eventsCreate: builder.mutation({
			query: ({
				title,
				description,
				time,
				address,
				event_link,
				media,
			}) => {
				const formData = new FormData();
				formData.append("title", title);
				formData.append("description", description);
				formData.append("time", time);
				formData.append("address", address);
				formData.append("event_link", event_link);
				if (media && media.length > 0) {
					formData.append("media", media[0]);
				}

				return {
					url: "/events/listcreate/",
					method: "POST",
					body: formData,
				};
			},
			// invalidatesTags: ["EVENTS"],
		}),
	}),
});

export const { useEventsCreateMutation } = eventApiSlice;
