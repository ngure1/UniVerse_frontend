import * as z from "zod";

export const PasswordResetSchema = z.object({
	email: z.string().email({
		message: "Please enter a valid email address",
	}),
});

export const ResetPasswordConfirmSchema = z
	.object({
		new_password: z
			.string()
			.min(6, "Password must be at least 6 characters long")
			.max(100),
		re_new_password: z
			.string()
			.min(6, "Password must be at least 6 characters long")
			.max(100),
	})
	.refine((data) => data.new_password === data.re_new_password, {
		message: "Passwords don't match",
		path: ["re_new_password"],
	});
