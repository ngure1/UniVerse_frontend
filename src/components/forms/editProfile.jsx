"use client";
import React from "react";
import { editProfileSchema } from "@/schema/editProfile";
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
import { countries } from "@/constats/countries";

const EditProfileForm = () => {
	const form = useForm({
		resolver: zodResolver(editProfileSchema),
		defaultValues: {
			bio: "",
			phone_number: "",
			address: {
				country: "",
				state: "",
			},
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
									<Input {...field} />
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
								name="address.state"
								render={({ field }) => (
									<FormItem>
										<FormLabel>State/County</FormLabel>
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
