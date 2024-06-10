"use client";
import { useState } from "react";
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

import React from "react";

const PostForm = () => {
	const form = useForm({
		resolver: zodResolver(postFormSchema),
		defaultValues: {
			title: "",
			content: "",
		},
	});

	const [post, { isLoading }] = usePostCreateMutation();

	const onSubmit = (data) => {
		post(data)
			.unwrap()
			.then(() => {
				setSuccess(true);
			});
	};

	return (
		<div className="">
			<Form {...form}>
				<form
					action=""
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
						name="file_input"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Media Upload</FormLabel>
								<FormControl>
									<Input
										type="file"
										{...field}
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
