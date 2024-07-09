import { baseApi } from "@/redux/baseApiSlice";

const profilesApiSlice = baseApi.injectEndpoints({
	overrideExisting: true,
	endpoints: (builder) => ({
		//Retrieving students' profiles
		studentList: builder.query({
			query: () => ({
				url: "/profile/student/",
				method: "GET",
			}),
			providesTags: ["PROFILES"],
		}),
		//Retrieving alumni' profiles
		alumniList: builder.query({
			query: () => ({
				url: "/profile/alumni/",
				method: "GET",
			}),
			providesTags: ["PROFILES"],
		}),
		//Retrieving lecturers' profiles
		lecturerList: builder.query({
			query: () => ({
				url: "/profile/lecturer/",
				method: "GET",
			}),
			providesTags: ["PROFILES"],
		}),
		//Retrieving departmental stars' profiles
		dptStarsList: builder.query({
			query: () => ({
				url: "/profile/verified/",
				method: "GET",
			}),
			providesTags: ["PROFILES"],
		}),
	}),
});

export const {
	useAlumniListQuery,
	useDptStarsListQuery,
	useStudentListQuery,
	useLecturerListQuery,
} = profilesApiSlice;
