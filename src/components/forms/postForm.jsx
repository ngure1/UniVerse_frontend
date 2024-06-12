"use client";
import postFormSchema from "@/schema/postFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/shadcnComponents/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/shadcnComponents/form";
import { Input } from "@/components/ui/shadcnComponents/input";
import { usePostCreateMutation } from "@/redux/features/posts/postsApiSlice";
import { toast } from "react-toastify";

import React from "react";

const PostForm = () => {
	// handling form default values and media upload
	const form = useForm({
		resolver: zodResolver(postFormSchema),
		defaultValues: {
			title: "",
			content: "",
			media: undefined,
		},
	});
	const mediaRef = form.register("media");

	// * initializing the create post mutation
	const [post, { isLoading, error }] = usePostCreateMutation();

	const onSubmit = (data) => {
		// * create promise toast for creating the post
		const toastId = toast.loading("Creating your post", {
			theme: "colored",
			autoClose: false, // Disable autoClose to manually control the toast
		});

		post(data)
			.unwrap()
			.then(() => {
				// Update the toast on success
				toast.update(toastId, {
					render: "Post created successfully",
					type: "success",
					isLoading: false,
					autoClose: 5000, // Close after 5 seconds
				});
			})
			.catch(() => {
				// Update the toast on failure
				toast.update(toastId, {
					render: "Something went wrong with your post",
					type: "error",
					isLoading: false,
					autoClose: 5000, // Close after 5 seconds
				});
			});
	};
	return (
		<div className="">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					action=""
					encType="multipart/form-data"
					className="space-y-[1.5rem]">
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Title</FormLabel>
								<FormControl>
									<Input
										placeholder="Your Post Title Goes Here"
										type="text"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="content"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Content</FormLabel>
								<FormControl>
									<Input
										placeholder="Type here..."
										type="text"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="media"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Media Upload</FormLabel>
								<FormControl>
									<Input
										type="file"
										{...mediaRef}
										onChange={(event) => {
											field.onChange(
												event.target?.files?.[0] ??
													undefined,
											);
										}}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						variant="secondary"
						className="w-full"
						disabled={isLoading}>
						Post
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default PostForm;
