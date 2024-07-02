import { z } from "zod";

const eventFormSchema = z.object({
	title: z.string().nonempty("Title is required"),
	description: z.string().nonempty("Description is required"),
	event_start_date: z.string().nonempty("Date is required"),
	event_start_time: z.string().nonempty("Time is required"),
	address: z.string().optional(),
	isOnline: z.boolean(),
	isPhysical: z.boolean(),
	media: typeof window === "undefined" ? z.any() : z.instanceof(FileList),
	event_form_url: z.string().url("Invalid URL").optional(),
});

export default eventFormSchema;
