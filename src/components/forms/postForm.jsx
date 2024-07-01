"use client";
import React, { useState, useEffect } from "react";
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
	FormDescription,
} from "@/components/ui/shadcnComponents/form";
import { Card } from "../ui/shadcnComponents/card";
import { Input } from "@/components/ui/shadcnComponents/input";
import { Textarea } from "@/components/ui/shadcnComponents/textarea";
import { toast } from "react-toastify";
import Tiptap from "../ui/MyComponents/RichTextEditor/TipTap"; // Ensure the path is correct
import { useDialog } from "@/hooks/responsiveDialog";
import Image from "next/legacy/image";
import { ImageIcon } from "lucide-react";
import {
	usePostDetailQuery,
	usePostUpdateMutation,
	usePostCreateMutation,
} from "@/redux/features/posts/postsApiSlice";

const PostForm = ({ id, article }) => {
	const isEditMode = !!id;
	const { data: post } = usePostDetailQuery(
		{ post_id: id },
		{ skip: !isEditMode },
	);
	const [previewUrl, setPreviewUrl] = useState(null);

	const form = useForm({
		resolver: zodResolver(postFormSchema),
		defaultValues: {
			title: "",
			content: "",
			media: undefined,
		},
	});
	const mediaRef = form.register("media");

	useEffect(() => {
		if (post) {
			form.reset({
				title: post.title,
				content: post.content,
			});
			setPreviewUrl(post.media);
		}
	}, [post, form]);

	const [createPost, { isLoading: isCreating }] = usePostCreateMutation();
	const [updatePost, { isLoading: isUpdating }] = usePostUpdateMutation();

	const isLoading = isCreating || isUpdating;

	const onSubmit = (data) => {
		const toastId = toast.loading(
			isEditMode ? "Updating your post" : "Creating your post",
			{
				theme: "colored",
				autoClose: false,
			},
		);

		const submitAction = isEditMode
			? updatePost({ post_id: id, ...data })
			: createPost(data);

		submitAction
			.unwrap()
			.then(() => {
				toast.update(toastId, {
					render: isEditMode
						? "Post updated successfully"
						: "Post created successfully",
					type: "success",
					isLoading: false,
					autoClose: 5000,
				});
				closePostDialog();
			})
			.catch(() => {
				toast.update(toastId, {
					render: "Something went wrong with your post",
					type: "error",
					isLoading: false,
					autoClose: 5000,
				});
			});
	};

	const { handleCloseDialog: closePostDialog } = useDialog("post");

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				action=""
				encType="multipart/form-data"
				className="space-y-[1.5rem]">
				{article && (
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="required">
									Title
								</FormLabel>
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
				)}
				<FormField
					control={form.control}
					name="content"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="required">Content</FormLabel>
							<FormControl>
								{article ? (
									<Tiptap
										content={field.value}
										onChange={field.onChange}
									/>
								) : (
									<Textarea
										placeholder="What do you want to talk about"
										className="resize-none min-w-fit text-[1rem] min-h-[14rem]"
										{...field}
									/>
								)}
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{previewUrl ? (
					article ? (
						<div className="min-h-[32rem] w-[80%] relative">
							<Image
								src={previewUrl}
								alt="Preview Image"
								layout="fill"
								objectFit="contain"
								className="rounded-md"
							/>
						</div>
					) : (
						<div className="min-h-[15rem] w-full relative">
							<Image
								src={previewUrl}
								alt="Preview Image"
								layout="fill"
								objectFit="contain"
								className="rounded-md"
							/>
						</div>
					)
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
						<FormItem>
							<FormLabel>Media Upload</FormLabel>
							<FormControl>
								<Input
									type="file"
									{...mediaRef}
									onChange={(event) => {
										const file = event.target.files?.[0];
										if (file) {
											const url =
												URL.createObjectURL(file);
											setPreviewUrl(url);
										} else {
											setPreviewUrl(null);
										}
										field.onChange(file ?? undefined);
									}}
								/>
							</FormControl>
							<FormDescription>
								We recommend adding a photo relevant to your
								post.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					variant="secondary"
					type="submit"
					className="w-full"
					disabled={isLoading}>
					{isEditMode ? "Update Post" : "Create Post"}
				</Button>
			</form>
		</Form>
	);
};

export default PostForm;
