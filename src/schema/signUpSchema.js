"use client";

import { z } from "zod";

const SignUpFormSchema = z.object({
	first_name: z.string().min(2).max(50),
	last_name: z.string().min(2).max(50),
	email: z.string().email(),
	password: z.string().min(8).max(15),
	re_password: z.string().min(8).max(15),
});
export default SignUpFormSchema;
