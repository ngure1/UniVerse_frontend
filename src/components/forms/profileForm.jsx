"use client";
import React, { useEffect } from "react";
import { editProfileSchema } from "@/schema/editProfileSchema";
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
import { Textarea } from "../ui/shadcnComponents/textarea";
import { Button } from "@/components/ui/shadcnComponents/button";
import { Checkbox } from "../ui/shadcnComponents/checkbox";
import { useProfileCreateMutation } from "@/redux/features/profiles/profileApiSlice";
import { toast } from "react-toastify";
import { useProfileMeQuery } from "@/redux/features/profiles/profileApiSlice";
import { useDialog } from "@/hooks/responsiveDialog";

const ProfileForm = () => {
	// * fetch profile details for the user and use them to prefill the form
	const { data: profileData } = useProfileMeQuery(null);

	const form = useForm({
		resolver: zodResolver(editProfileSchema),
		defaultValues: {
			is_student: false,
			is_alumni: false,
			is_lecturer: false,
			bio: "",
			phone_number: "",
			linked_in_url: "",
		},
	});

	// * useEffect to prefill the form once profileData is available
	useEffect(() => {
		if (profileData) {
			form.reset({
				is_student: profileData.is_student,
				is_alumni: profileData.is_alumni,
				is_lecturer: profileData.is_lecturer,
				bio: profileData.bio,
				phone_number: profileData.phone_number,
				linked_in_url: profileData.linked_in_url,
			});
		}
	}, [profileData]);
	// * initialise dialog close function on successful submition
	const { handleCloseDialog: closeEditProfileDialog } =
		useDialog("editProfile");

	// * create profile mutation
	const [profile, { isLoading, error }] = useProfileCreateMutation();

	const onSubmit = (data) => {
		// * create promise toast for updating the profile
		const toastId = toast.loading("Updating your profile", {
			theme: "colored",
			autoClose: false,
		});

		profile(data)
			.unwrap()
			.then(() => {
				// Update the toast on success
				toast.update(toastId, {
					render: "Profile updated successfully",
					type: "success",
					isLoading: false,
					autoClose: 5000, // Close after 5 seconds
				});
			})
			.catch(() => {
				// Update the toast on failure
				toast.update(toastId, {
					render: "Something went wrong with your request",
					type: "error",
					isLoading: false,
					autoClose: 5000, // Close after 5 seconds
				});
			});
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-6 max-w-[600px]">
				<div className="space-y-4">
					<div className="flex space-x-1">
						<FormField
							control={form.control}
							name="is_student"
							render={({ field }) => (
								<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
									<FormControl>
										<Checkbox
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
									<div className="space-y-1 leading-none">
										<FormLabel className="font-normal">
											I am a student
										</FormLabel>
									</div>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="is_alumni"
							render={({ field }) => (
								<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
									<FormControl>
										<Checkbox
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
									<div className="space-y-1 leading-none">
										<FormLabel className="font-normal">
											I am an alumni
										</FormLabel>
									</div>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="is_lecturer"
							render={({ field }) => (
								<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
									<FormControl>
										<Checkbox
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
									<div className="space-y-1 leading-none">
										<FormLabel className="font-normal">
											I am a lecturer
										</FormLabel>
									</div>
								</FormItem>
							)}
						/>
					</div>

					<FormField
						control={form.control}
						name="bio"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Bio</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Tell us a little bit about yourself"
										className="resize-none min-w-fit text-[1rem] min-h-32"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="phone_number"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone Number</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="+254 1234567"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<Button
					type="submit"
					variant="secondary"
					onClick={closeEditProfileDialog}
					className="uppercase w-full">
					Save
				</Button>
			</form>
		</Form>
	);
};

export default ProfileForm;
