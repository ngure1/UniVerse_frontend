import { z } from "zod";
import { phoneNumberRegex } from "@/constats/regex";

export const editProfileSchema = z.object({
	is_student: z.boolean(),
	is_alumni: z.boolean(),
	is_lecturer: z.boolean(),
	bio: z.string().optional(),
	course: z.string().optional(),
	job_role: z.string().optional(),
	organization: z.string().optional(),
	phone_number: z
		.string()
		.refine((val) => val === "" || phoneNumberValidationFunction(val), {
			message: "Invalid phone number",
		})
		.optional(),
	linked_in_url: z
		.string()
		.refine((val) => val === "" || urlValidationFunction(val), {
			message: "Invalid URL",
		})
		.optional(),
});

export const addressSchema = z.object({
	country: z.string().optional(),
	city: z.string().optional(),
});

// Ensure phoneNumberValidationFunction and urlValidationFunction correctly handle empty strings and validate non-empty inputs.
function phoneNumberValidationFunction(phoneNumber) {
	// Example validation logic for phone number
	return phoneNumberRegex.test(phoneNumber) || phoneNumber === "";
}

function urlValidationFunction(url) {
	// Example validation logic for URL
	try {
		new URL(url);
		return true;
	} catch (e) {
		return false;
	}
}
