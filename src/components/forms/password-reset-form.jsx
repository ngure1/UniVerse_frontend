"use client";
import { usePasswordReset } from "@/hooks/passwordresethooks";
import CardWrapper from "./cardwrapper";
import {
	Form,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
	FormField,
} from "../ui/shadcnComponents/form";
import { Input } from "../ui/shadcnComponents/input";
import { Button } from "../ui/shadcnComponents/button";

const PasswordReset = () => {
	const { form, handleSubmit, isLoading, error } = usePasswordReset();

	return (
		<div className="h-screen flex items-center justify-center gap-4">
			<CardWrapper
				title={"Password Reset"}
				subtitle={"Enter your email"}>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(handleSubmit)}
						className="flex flex-col gap-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											{...field}
											type="email"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							type="submit"
							isLoading={isLoading}
							disabled={isLoading}>
							Reset Password
						</Button>
					</form>
				</Form>
			</CardWrapper>
		</div>
	);
};

export default PasswordReset;
