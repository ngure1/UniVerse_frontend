import React, { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/shadcnComponents/form";
import { Input } from "@/components/ui/shadcnComponents/input";
import Image from "next/legacy/image";
import { Button } from "@/components/ui/shadcnComponents/button";
import { useProfile } from "@/hooks/profile";
import { useDialog } from "@/hooks/responsiveDialog";
import { useProfilePictureUpdateMutation } from "@/redux/features/profiles/profileApiSlice";
import { toast } from "react-toastify";

const AvatarSchema = z.object({
	profile_picture:
		typeof window === "undefined" ? z.any() : z.instanceof(FileList),
});

const EditAvatar = () => {
	const [updateProfilePicture] = useProfilePictureUpdateMutation();

	const { data: profileData, isLoading, error } = useProfile(null);
	const form = useForm({
		resolver: zodResolver(AvatarSchema),
	});
	const [previewUrl, setPreviewUrl] = useState(null);

	// Load the initial profile picture if available
	useEffect(() => {
		if (profileData?.profile_picture) {
			const url = profileData.profile_picture;
			setPreviewUrl(url);
		} else {
			setPreviewUrl(null);
		}
	}, [profileData]); // Trigger when profileData changes

	const onSubmit = (data) => {
		console.log("submitted");
		updateProfilePicture(data)
			.unwrap()
			.then(() => {
				toast.success("Profile Picture changed successfully", {
					theme: "colored",
				});
			})
			.catch(() => {
				toast.error(
					"An error occured in changing your profile picture",
					{
						theme: "colored",
					},
				);
			});
	};

	const { handleCloseDialog } = useDialog("editProfilePicture");

	const fileRef = form.register("profile_picture");

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				action=""
				encType="multipart/form-data"
				className="space-y-[1.5rem]">
				<div className="flex justify-center w-full">
					<div className="relative w-64 h-64 rounded-full overflow-hidden bg-gray-200">
						{previewUrl ? (
							<Image
								src={previewUrl}
								alt="Preview Image"
								layout="fill"
								objectFit="cover"
							/>
						) : (
							<div className="w-full h-full bg-black"></div>
						)}
					</div>
				</div>
				<FormField
					control={form.control}
					name="profile_picture"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="required">
								Profile Picture
							</FormLabel>
							<FormControl>
								<Input
									type="file"
									{...fileRef}
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
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					onClick={handleCloseDialog}>
					Save
				</Button>
			</form>
		</Form>
	);
};

export default EditAvatar;
