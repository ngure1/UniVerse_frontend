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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/shadcnComponents/select";
import { Input } from "@/components/ui/shadcnComponents/input";
import { Textarea } from "../ui/shadcnComponents/textarea";
import { Button } from "@/components/ui/shadcnComponents/button";
import { Separator } from "../ui/shadcnComponents/separator";
import { Checkbox } from "../ui/shadcnComponents/checkbox";
import { countries } from "@/constats/countries";

const EditProfileForm = () => {
	const form = useForm({
		resolver: zodResolver(editProfileSchema),
		defaultValues: {
			is_student: false,
			is_alumni: false,
			is_lecturer: false,
			bio: "",
			phone_number: "",
			address: {
				country: "",
				city: "",
			},
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
					<div className="flex flex-col gap-1">
						<p className="text-sm text-muted-foreground">Address</p>
						<Separator />
						<div className="space-y-4">
							<FormField
								control={form.control}
								name="address.country"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Country</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select a Country" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{countries.map(
													(country, index) => (
														<SelectItem
															value={
																country.value
															}
															key={index}>
															{country.label}
														</SelectItem>
													),
												)}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="address.city"
								render={({ field }) => (
									<FormItem>
										<FormLabel>City</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="linked_in_url"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Link to your LinkedIn profile
										</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>
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

export default EditProfileForm;
