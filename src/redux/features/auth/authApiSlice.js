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
		userCreate: builder.mutation({
			query: ({
				first_name,
				last_name,
				email,
				password,
				re_password,
			}) => ({
				url: "/auth/users/",
				method: "POST",
				body: { first_name, last_name, email, password, re_password },
			}),
		}),
	}),
});

export const { useJwtCreateMutation, useUserCreateMutation } = authApiSlice;
