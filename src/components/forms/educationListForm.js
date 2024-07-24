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
import { useDialog } from "@/hooks/responsiveDialog";
import { Button } from "@/components/ui/shadcnComponents/button";

const EducationListForm = ({ id }) => {
	const isEditMode = !!id;
	const { data: education } = useEducationDetailQuery(
		{ education_id: id },
		{ skip: !isEditMode },
	);

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
			{
				theme: "colored",
				autoClose: false,
			},
		);

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
				closePostDialog();
			})
			.catch(() => {
				toast.update(toastId, {
					render: "Something went wrong",
					type: "error",
					isLoading: false,
					autoClose: 5000,
				});
			});
	};

	const { handleCloseDialog: closePostDialog } = useDialog("education");

	return (
		<Form {...form}>
			<form
				id="education-form"
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-6 max-w-[600px]">
				<div className="space-y-4">
					<FormField
						control={form.control}
						name="institution_name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Instituition</FormLabel>
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
										{...field}
										placeholder="PhD/MSc/BSc..."
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
			</form>
			<Button
				variant="secondary"
				type="submit"
				className="w-full"
				form="education-form"
				disabled={isLoading}>
				{isEditMode ? "Update " : "Create"}
			</Button>
		</Form>
	);
};

export default EducationListForm;
