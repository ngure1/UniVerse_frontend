import { z } from "zod";
export const editProfileSchema = z.object({
	bio: z.string().optional(),
	phone_number: z.string(),
	address: z
		.object({
			country: z.string(),
			state: z.string(),
		})
		.optional(),
});
