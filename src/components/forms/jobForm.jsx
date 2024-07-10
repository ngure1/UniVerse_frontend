"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	FormDescription,
} from "@/components/ui/shadcnComponents/form";
import { zodResolver } from "@hookform/resolvers/zod";
import jobFormSchema from "@/schema/jobSchema";
import { Input } from "@/components/ui/shadcnComponents/input";
import { Textarea } from "@/components/ui/shadcnComponents/textarea";
import { Button } from "../ui/shadcnComponents/button";
import { toast } from "react-toastify";
import { useDialog } from "@/hooks/responsiveDialog";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

const JobForm = () => {
	const [previewUrl, setPreviewUrl] = useState(null);

	const form = useForm({
		resolver: zodResolver(jobFormSchema),
		defaultValues: {
			job_title: "",
			job_description: "",
			job_skills: "",
			company: "",
			job_qualifications: "",
			job_type: "",
			application_deadline: "",
			application_procedure: "",
			address: "",
			application_link: "",
			media: undefined,
		},
	});
	const mediaRef = form.register("media");
	return (
		<Form {...form}>
			<form
				// onSubmit={form.handleSubmit(onSubmit)}
				encType="multipart/form-data"
				className="space-y-[1.5rem] max-h-[37rem] overflow-auto pr-5">
				<div className="space-y-4 h-[100%]">
					{previewUrl ? (
						<div className="min-h-[15rem] w-full relative">
							<Image
								src={previewUrl}
								alt="Preview Image"
								layout="fill"
								objectFit="contain"
								className="rounded-md"
							/>
						</div>
					) : (
						<div className="min-h-[15rem] w-full relative bg-slate-200 rounded-sm flex flex-col gap-2 items-center justify-center">
							<ImageIcon
								size={100}
								color="#4392F1"
							/>
							<p>Your image will be displayed here</p>
						</div>
					)}
					<FormField
						control={form.control}
						name="media"
						render={({ field }) => (
							<FormItem className>
								<FormLabel>Media Upload</FormLabel>
								<FormControl>
									<Input
										type="file"
										{...mediaRef}
										onChange={(event) => {
											const file =
												event.target.files?.[0];
											if (file) {
												// Create a URL for the file
												const url =
													URL.createObjectURL(file);
												setPreviewUrl(url); // Update state with the new URL
											} else {
												setPreviewUrl(null); // Reset preview URL if no file is selected
											}
											field.onChange(file ?? undefined);
										}}
									/>
								</FormControl>
								<FormDescription>
									We recommend adding a photo relevant to your
									job posting.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="job_title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Job Title</FormLabel>
								<FormControl>
									<Input
										placeholder="Title of the job"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="company"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Company</FormLabel>
								<FormControl>
									<Input
										placeholder="Company"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="application_deadline"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Application Deadline</FormLabel>
								<FormControl>
									<Input
										type="date"
										placeholder="Date"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="job_type"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Job Type</FormLabel>
								<FormControl>
									<Input
										placeholder="Remote/ On-site"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="address"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Address</FormLabel>
								<FormControl>
									<Input
										placeholder="Job address"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="job_skills"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Job Skills</FormLabel>
								<FormControl>
									<Input
										placeholder="Major skills required for the job"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="job_description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Job Description</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Description of the job"
										className="resize-none min-w-fit text-[1rem] min-h-28"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="job_qualifications"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Qualifications</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Qualifications of the job"
										className="resize-none min-w-fit text-[1rem] min-h-28"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="application_procedure"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Application Procedure</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Application procedure"
										className="resize-none min-w-fit text-[1rem] min-h-28"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="application_link"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Application Link</FormLabel>
								<FormControl>
									<Input
										type="url"
										placeholder="http://example.com"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						variant="secondary"
						type="submit"
						className="w-full"
						// disabled={isLoading}
					>
						{" "}
						Post
						{/* {isEditMode ? "Update Event" : "Create Event"} */}
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default JobForm;
