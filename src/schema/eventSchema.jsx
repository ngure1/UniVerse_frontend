"use client";

import { date, z } from "zod";

const eventFormSchema = z.object({
	title: z.string(),
	description: z.string(),
	date: date(),
	time: z.string().time(),
	address: z.string(),
	isOnline: z.boolean(),
	isPhysical: z.boolean(),
	media: typeof window === "undefined" ? z.any() : z.instanceof(FileList),
	event_link: z
		.string()
		.refine((val) => val === "" || urlValidationFunction(val), {
			message: "Invalid URL",
		}),
});
function urlValidationFunction(url) {
	// Example validation logic for URL
	try {
		new URL(url);
		return true;
	} catch (e) {
		return false;
	}
}
export default eventFormSchema;
