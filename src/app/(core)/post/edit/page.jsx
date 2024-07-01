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
import { Card } from "@/components/ui/shadcnComponents/card";
import { Input } from "@/components/ui/shadcnComponents/input";
import { toast } from "react-toastify";
import Tiptap from "@/components/ui/MyComponents/RichTextEditor/TipTap";
import { useDialog } from "@/hooks/responsiveDialog";
import Image from "next/legacy/image";
import { ImageIcon } from "lucide-react";
import {
	usePostDetailQuery,
	usePostUpdateMutation,
} from "@/redux/features/posts/postsApiSlice";

const EditPostForm = ({ id }) => {
	const { data: post } = usePostDetailQuery({ post_id: id });
	console.log(post);

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

	const [previewUrl, setPreviewUrl] = useState(null);

	useEffect(() => {
		if (post) {
			form.reset({
				title: post.title,
				content: post.content,
			});
			setPreviewUrl(post.media);
		}
	}, [post]);

	// * initializing the update post mutation
	const [updatePost, { isLoading }] = usePostUpdateMutation();

	const onSubmit = (data) => {
		// * create promise toast for updating the post
		const toastId = toast.loading("Updating your post", {
			theme: "colored",
			autoClose: false,
		});

		updatePost({ post_id: id, ...data })
			.unwrap()
			.then(() => {
				// Update the toast on success
				toast.update(toastId, {
					render: "Post updated successfully",
					type: "success",
					isLoading: false,
					autoClose: 5000,
				});
				closePostDialog();
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

	const { handleCloseDialog: closePostDialog } = useDialog("post");

	return (
		<Card className="py-10 px-5">
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
					<FormField
						control={form.control}
						name="content"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="required">
									Content
								</FormLabel>
								<FormControl>
									<Tiptap
										content={field.value} // Set initial content here
										onChange={field.onChange} // Update form state on change
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{previewUrl ? (
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
											const file =
												event.target.files?.[0];
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
						Update Post
					</Button>
				</form>
			</Form>
		</Card>
	);
};

export default EditPostForm;
