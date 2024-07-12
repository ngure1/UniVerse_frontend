import { baseApi } from "@/redux/baseApiSlice";

const jobApiSlice = baseApi.injectEndpoints({
	overrideExisting: true,
	endpoints: (builder) => ({
		jobCreate: builder.mutation({
			query: ({
				job_title,
				job_description,
				job_skills,
				company,
				job_qualifications,
				job_type,
				application_deadline,
				application_procedure,
				address,
				application_link,
				media,
			}) => {
				const formData = new FormData();
				formData.append("job_title", job_title);
				formData.append("job_description", job_description);
				formData.append("job_skills", job_skills);
				formData.append("company", company);
				formData.append("address", address);
				formData.append("job_type", job_type);
				formData.append("application_deadline", application_deadline);
				formData.append("job_qualifications", job_qualifications);
				formData.append("application_procedure", application_procedure);
				formData.append("application_link", application_link);
				if (media && media.length > 0) {
					formData.append("media", media[0]);
				}

				return {
					url: "/jobs/",
					method: "POST",
					body: formData,
				};
			},
			invalidatesTags: ["JOBS"],
		}),

		// Listing jobs
		jobsList: builder.query({
			query: ({}) => ({
				url: "/jobs/",
				method: "GET",
			}),
			providesTags: ["JOBS"],
		}),

		//editing a job
		jobUpdate: builder.mutation({
			query: ({
				job_title,
				job_description,
				job_skills,
				company,
				job_qualifications,
				job_type,
				application_deadline,
				application_procedure,
				address,
				application_link,
				media,
			}) => {
				const formData = new FormData();
				formData.append("job_title", job_title);
				formData.append("job_description", job_description);
				formData.append("job_skills", job_skills);
				formData.append("company", company);
				formData.append("address", address);
				formData.append("job_type", job_type);
				formData.append("application_deadline", application_deadline);
				formData.append("job_qualifications", job_qualifications);
				formData.append("application_procedure", application_procedure);
				formData.append("application_link", application_link);
				if (media && media.length > 0) {
					formData.append("media", media[0]);
				}
				return {
					url: `/jobs/${job_id}/`,
					method: "PATCH",
					body: formData,
				};
			},
			invalidatesTags: ["JOBS"],
		}),

		//job details
		jobDetails: builder.query({
			query: ({ job_id }) => ({
				url: `/jobs/${job_id}/`,
				method: "GET",
			}),
			providesTags: ["JOBS"],
		}),
	}),
});
export const {
	useJobCreateMutation,
	useJobDetailsQuery,
	useJobUpdateMutation,
	useJobsListQuery,
} = jobApiSlice;
