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
import { date } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import eventFormSchema from "@/schema/eventSchema";
import { Input } from "@/components/ui/shadcnComponents/input";
import { Textarea } from "@/components/ui/shadcnComponents/textarea";
import {
	RadioGroup,
	RadioGroupItem,
} from "@/components/ui/shadcnComponents/radio-group";
import { Button } from "../ui/shadcnComponents/button";

const EventForm = () => {
	const form = useForm({
		resolver: zodResolver(eventFormSchema),
		defaultValues: {
			title: "",
			description: "",
			date: date(),
			time: "",
			address: "",
			isOnline: false,
			isPhysical: false,
			event_link: "",
			media: undefined,
		},
	});
	const mediaRef = form.register("media");
	const [eventType, setEventType] = useState("");
	return (
		<Card className="xl:w-[60%] md:w-[90%] h-[50rem] shadow-md p-[2rem] ">
			<CardHeader className="pt-0">
				<p className="sub-heading-3 text-center">Create Event</p>
			</CardHeader>{" "}
			<Form {...form}>
				<form action="">
					<div className="space-y-4 h-[100%]">
						<FormField
							control={form.control}
							name="media"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Media Upload</FormLabel>
									<FormControl>
										<Input
											placeholder="Media Upload"
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
												// Update the eventType state based on selection
												setEventType(value);
												field.onChange(value);
											}}
											defaultValue={field.value}>
											<FormItem className="space-x-1">
												<FormControl>
													<RadioGroupItem value="isOnline">
														Online
													</RadioGroupItem>
												</FormControl>
												<FormLabel> Online </FormLabel>
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
							name="time"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Event Time</FormLabel>
									<FormControl>
										<Input
											type="time"
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
							// disabled={isLoading}
						>
							Post
						</Button>
					</div>
				</form>
			</Form>
		</Card>
	);
};

export default EventForm;
