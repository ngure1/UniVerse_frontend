"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressSchema } from "@/schema/editProfileSchema";
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
import { countries } from "@/constats/countries";
import { Button } from "../ui/shadcnComponents/button";
import {
	useProfileAddressCreateMutation,
	useProfileAddressRetrieveQuery,
} from "@/redux/features/profiles/profileApiSlice";
import { toast } from "react-toastify";

const AddressForm = () => {
	const form = useForm({
		resolver: zodResolver(addressSchema),
		defaultValues: {
			country: "",
			city: "",
		},
	});

	const { data: addressData, isLoading } =
		useProfileAddressRetrieveQuery(null);

	useEffect(() => {
		if (!isLoading && addressData) {
			console.log("Fetched address data:", addressData);
			form.setValue("country", addressData.country);
			form.setValue("city", addressData.city);
		}
	}, [isLoading, addressData, form]);

	const [addressCreate, { error }] = useProfileAddressCreateMutation();

	const onSubmit = (data) => {
		addressCreate(data)
			.unwrap()
			.then(() => {
				toast.success("Address Updated Successfully", {
					theme: "colored",
				});
			})
			.catch(() => {
				toast.error("Failed to update address", { theme: "colored" });
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
						name="country"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="required">
									Country
								</FormLabel>
								<Select
									onValueChange={field.onChange}
									value={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select a Country" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{countries.map((country, index) => (
											<SelectItem
												value={country.value}
												key={index}>
												{country.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="city"
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

export default AddressForm;
