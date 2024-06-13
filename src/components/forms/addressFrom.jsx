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

const AddressFrom = () => {
	const form = useForm({
		resolver: zodResolver(addressSchema),
		defaultValues: {
			country: "",
			city: "",
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
						name="country"
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
export default AddressFrom;
