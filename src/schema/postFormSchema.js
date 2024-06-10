"use client";

import { z } from "zod";

const postFormSchema = z.object({
	title: z.string().max(20),
	content: z.string(),
	media: z
		.instanceof(File)
		.optional()
		.refine(
			(file) => file == null || file?.length == 1,
			"File is required.",
		),
});
export default postFormSchema;
