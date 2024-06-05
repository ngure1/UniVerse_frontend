import { baseApi } from "@/redux/baseApiSlice";

const authApiSlice = baseApi.injectEndpoints({
	overrideExisting: true,
	endpoints: (builder) => ({
		// activation
		usersActivation: builder.mutation({
			query: ({ uid, token }) => ({
				url: "/auth/users/activation/",
				method: "POST",
				body: { uid, token },
			}),
		}),

		jwtCreate: builder.mutation({
			query: ({ email, password }) => ({
				url: "/auth/jwt/create/",
				method: "POST",
				body: { email, password },
			}),
		}),
	}),
});

export const {
	useJwtCreateMutation,
	useUsersActivationMutation,
	useRegisterMutation,
} = authApiSlice;
