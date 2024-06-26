"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	FormDescription,
} from "@/components/ui/shadcnComponents/form";
import { Card, CardHeader } from "../ui/shadcnComponents/card";
import { zodResolver } from "@hookform/resolvers/zod";
import eventFormSchema from "@/schema/eventSchema";
import { Input } from "@/components/ui/shadcnComponents/input";
import { Textarea } from "@/components/ui/shadcnComponents/textarea";
import {
	RadioGroup,
	RadioGroupItem,
} from "@/components/ui/shadcnComponents/radio-group";
import { Button } from "../ui/shadcnComponents/button";
import { useEventsCreateMutation } from "@/redux/features/events/eventsApiSlice";
import { toast } from "react-toastify";

const EventForm = ({ article }) => {
	const form = useForm({
		resolver: zodResolver(eventFormSchema),
		defaultValues: {
			title: "",
			description: "",
			date: "",
			time: "",
			address: "",
			isOnline: false,
			isPhysical: false,
			event_link: "",
			media: undefined,
		},
	});

	const [event, { isLoading }] = useEventsCreateMutation();
	const [eventType, setEventType] = useState("");
	const onSubmit = (data) => {
		const toastId = toast.loading("Creating your event", {
			theme: "colored",
			autoClose: false,
		});

		event(data)
			.unwrap()
			.then(() => {
				toast.update(toastId, {
					render: "Event created successfully",
					type: "success",
					isLoading: false,
					autoClose: 5000,
				});
				closePostDialog();
			})
			.catch(() => {
				toast.update(toastId, {
					render: "Something went wrong with your request",
					type: "error",
					isLoading: false,
					autoClose: 5000,
				});
			});
	};

	const mediaRef = form.register("media");

	return (
		<Form {...form}>
			{article && (
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					encType="multipart/form-data"
					className="space-y-[1.5rem]">
					<div className="space-y-4 h-[100%]">
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
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="isOnline"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Event Type</FormLabel>
									<FormControl>
										<RadioGroup
											className="flex space-x-4"
											onValueChange={(value) => {
												setEventType(value);
												form.setValue(
													"isOnline",
													value === "isOnline",
												);
												form.setValue(
													"isPhysical",
													value === "isPhysical",
												);
											}}
											defaultValue={field.value}>
											<FormItem className="space-x-1">
												<FormControl>
													<RadioGroupItem value="isOnline">
														Online
													</RadioGroupItem>
												</FormControl>
												<FormLabel>Online</FormLabel>
											</FormItem>
											<FormItem className="space-x-1">
												<FormControl>
													<RadioGroupItem value="isPhysical">
														Physical
													</RadioGroupItem>
												</FormControl>
												<FormLabel>Physical</FormLabel>
											</FormItem>
										</RadioGroup>
									</FormControl>
								</FormItem>
							)}
						/>
						{eventType === "isPhysical" && (
							<FormField
								control={form.control}
								name="address"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Event Address</FormLabel>
										<FormControl>
											<Input
												placeholder="Event Address"
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
							name="date"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Event Date</FormLabel>
									<FormControl>
										<Input
											type="date"
											placeholder="Date"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="time"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Event Time</FormLabel>
									<FormControl>
										<Input
											type="time"
											placeholder="Time"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input
											placeholder="Title"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Description</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Event Description"
											className="resize-none min-w-fit text-[1rem] min-h-28"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="event_link"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Event Link</FormLabel>
									<FormControl>
										<Input
											type="url"
											placeholder="http://example.com"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							variant="secondary"
							type="submit"
							className="w-full"
							disabled={isLoading}>
							Post
						</Button>
					</div>
				</form>
			)}
		</Form>
	);
};

export default EventForm;
