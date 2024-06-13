"use client";
import React from "react";
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

const ProfileForm = () => {
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

	function onSubmit(data) {
		console.log(data);
	}

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
										className="resize-none"
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
					className="uppercase w-full">
					Save
				</Button>
			</form>
		</Form>
	);
};

export default ProfileForm;
