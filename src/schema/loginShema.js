import { z } from "zod";

const passwordRegex =
	/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const loginFormSchema = z.object({
	email: z.string().email({ message: "The email you provided was invalid" }),
	password: z.string(),
	// .regex(passwordRegex, {
	// 	message:
	// 		"Minimum eight characters, at least one letter, one number and a special character"
	// }),
});
