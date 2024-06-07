"use client";

import { z } from "zod";

const postFormSchema = z.object({
	title: z.string().max(20),
	content: z.string(),
	fileInput: z.instanceof(File).refine(
		(file) => {
			return file && file.type.startsWith("image/");
		},
		{ message: "Please upload a valid image file." },
	),
});
export default postFormSchema;
