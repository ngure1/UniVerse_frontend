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

import React from "react";

const PostForm = () => {
	const form = useForm({
		resolver: zodResolver(postFormSchema),
		defaultValues: {
			title: "",
			content: "",
		},
	});
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
						name="fileInput"
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
						className="w-full">
						Post
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default PostForm;
