import { baseApi } from "@/redux/baseApiSlice";

const educationApiSlice = baseApi.injectEndpoints({
	overrideExisting: true,
	endpoints: (builder) => ({
		//education creation
		educationCreate: builder.mutation({
			query: ({
				institution_name,
				field_of_study,
				start_date,
				end_date,
			}) => {
				const formData = new FormData();
				formData.append("institution_name", institution_name);
				formData.append("field_of_study", field_of_study);
				formData.append("start_date", start_date);
				formData.append("end_date", end_date);

				return {
					url: "/education/create/",
					method: "POST",
					body: formData,
				};
			},
			invalidatesTags: ["EDUCATION"],
		}),
		//list education
		educationList: builder.query({
			query: ({}) => ({
				url: "/education/create/",
				method: "GET",
			}),

			providesTags: ["EDUCATION"],
		}),

		//delete education post
		educationDelete: builder.mutation({
			query: ({ education_id }) => ({
				url: `/education/create/${education_id}/`,
				method: "DELETE",
			}),
			invalidatesTags: ["EDUCATION"],
		}),

		//education update
		educationUpdate: builder.mutation({
			query: ({
				education_id,
				institution_name,
				start_date,
				end_date,
				field_of_study,
			}) => {
				const formData = new FormData();
				formData.append("institution_name", institution_name);
				formData.append("start_date", start_date);
				formData.append("end_date", end_date);
				formData.append("field_of_study", field_of_study);

				return {
					url: `/education/create/${education_id}/`,
					method: "PATCH",
					body: formData,
				};
			},
			invalidatesTags: ["EDUCATION"],
		}),
		//education deetails
		educationDetail: builder.query({
			query: ({ education_id }) => ({
				url: `/education/create/${education_id}/`,
				method: "GET",
			}),
			providesTags: ["EDUCATION"],
		}),
	}),
});

export const {
	useEducationCreateMutation,
	useEducationListQuery,
	useEducationDeleteMutation,
	useEducationUpdateMutation,
	useEducationDetailQuery,
} = educationApiSlice;
