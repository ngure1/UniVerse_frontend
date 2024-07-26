import React, { useEffect } from "react";
import educationListSchema from "@/schema/educationListSchema";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/shadcnComponents/form";
import { Input } from "@/components/ui/shadcnComponents/input";
import {
	useEducationCreateMutation,
	useEducationDetailQuery,
	useEducationUpdateMutation,
} from "@/redux/features/educationList/educationApiSlice";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/shadcnComponents/button";

const EducationListForm = ({ id }) => {
	const isEditMode = !!id;
	console.log("Edit Mode:", isEditMode, "ID:", id); // Debug log

	const {
		data: education,
		isFetching,
		error,
	} = useEducationDetailQuery({ education_id: id }, { skip: !isEditMode });
	useEffect(() => {
		if (error) {
			console.error("Error fetching education details:", error);
		}
	}, [error]);
	const form = useForm({
		resolver: zodResolver(educationListSchema),
		defaultValues: {
			institution_name: "",
			field_of_study: "",
			start_date: "",
			end_date: "",
		},
	});

	useEffect(() => {
		if (education) {
			form.reset({
				institution_name: education.institution_name,
				field_of_study: education.field_of_study,
				start_date: education.start_date,
				end_date: education.end_date,
			});
		}
	}, [education, form]);

	const [createEducation, { isLoading: isCreating }] =
		useEducationCreateMutation();
	const [updateEducation, { isLoading: isUpdating }] =
		useEducationUpdateMutation();

	const isLoading = isCreating || isUpdating;

	const onSubmit = (data) => {
		const toastId = toast.loading(
			isEditMode ? "Updating your education" : "Creating your education",
			{ theme: "colored", autoClose: false },
		);
		console.log("Submitting data: ", data);

		const submitAction = isEditMode
			? updateEducation({ education_id: id, ...data })
			: createEducation(data);

		submitAction
			.unwrap()
			.then(() => {
				toast.update(toastId, {
					render: isEditMode
						? "Updated successfully"
						: "Created successfully",
					type: "success",
					isLoading: false,
					autoClose: 5000,
				});
			})
			.catch(({ error }) => {
				console.error("Error creating/updating education: ", error);
				toast.update(toastId, {
					render: "Something went wrong",
					type: "error",
					isLoading: false,
					autoClose: 5000,
				});
			});
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-6 max-w-[600px]">
				<div className="space-y-4">
					<FormField
						control={form.control}
						name="institution_name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Institution</FormLabel>
								<FormControl>
									<Input
										placeholder="Institution"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="start_date"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Start Date</FormLabel>
								<FormControl>
									<Input
										type="date"
										placeholder="Start Date"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="end_date"
						render={({ field }) => (
							<FormItem>
								<FormLabel>End Date</FormLabel>
								<FormControl>
									<Input
										type="date"
										placeholder="End Date"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="field_of_study"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Field of Study</FormLabel>
								<FormControl>
									<Input
										placeholder="Field of Study"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<Button
					type="submit"
					disabled={isLoading}>
					{isEditMode ? "Update" : "Create"}
				</Button>
			</form>
		</Form>
	);
};

export default EducationListForm;
