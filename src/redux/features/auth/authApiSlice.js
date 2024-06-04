import { baseApi } from "@/redux/baseApiSlice";

const authApiSlice = baseApi.injectEndpoints({
	overrideExisting: true,
	endpoints: (builder) => ({
		jwtCreate: builder.mutation({
			query: ({ email, password }) => ({
				url: "/auth/jwt/create/",
				method: "POST",
				body: { email, password },
			}),
		}),
	}),
});

export const { useJwtCreateMutation } = authApiSlice;
