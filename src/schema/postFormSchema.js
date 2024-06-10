"use client";

import { z } from "zod";

const postFormSchema = z.object({
	title: z.string().max(20),
	content: z.string(),
	media: typeof window === "undefined" ? z.any() : z.instanceof(FileList),
});
export default postFormSchema;
