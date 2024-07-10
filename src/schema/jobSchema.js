"use client";
import { z } from "zod";

const jobFormSchema = z.object({
	job_title: z.string().nonempty("Required field"),
	job_description: z.string().nonempty("Required field"),
	application_deadline: z.string().nonempty("Required field"),
	job_skills: z.string().nonempty("Required field"),
	job_qualifications: z.string().nonempty("Required field"),
	job_type: z.string().nonempty("Required field"),
	company: z.string().nonempty("Required field"),
	application_procedure: z.string().nonempty("Required field"),
	address: z.string().optional(),
	media: typeof window === "undefined" ? z.any() : z.instanceof(FileList),
	application_link: z.string().url("Invalid URL").nonempty("Required field"),
});

export default jobFormSchema;
