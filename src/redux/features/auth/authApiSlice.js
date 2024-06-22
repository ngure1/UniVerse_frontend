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

		// resetPassword
		resetPassword: builder.mutation({
			query: (email) => ({
				url: "auth/users/reset_password/",
				method: "POST",
				body: { email },
			}),
		}),

		// resetPasswordConfirm
		resetPasswordConfirm: builder.mutation({
			query: ({ uid, token, new_password, re_new_password }) => ({
				url: "auth/users/reset_password_confirm/",
				method: "POST",
				body: { uid, token, new_password, re_new_password },
			}),
		}),

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

		// logout
		logout: builder.mutation({
			query: () => ({
				url: "/auth/logout/",
				method: "POST",
			}),
		}),
	}),
});

export const {
	useJwtCreateMutation,
	useUserCreateMutation,
	useUsersActivationMutation,
	useResetPasswordMutation,
	useResetPasswordConfirmMutation,
	useLogoutMutation,
} = authApiSlice;
