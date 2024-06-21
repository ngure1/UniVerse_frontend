"use client";

import { usePasswordResetConfirm } from "@/hooks/passwordresethooks";
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

const PasswordResetConfirmForm = ({ uid, token }) => {
	const { form, handleSubmit, isLoading, error } = usePasswordResetConfirm({
		uid,
		token,
	});

	return (
		<div className="h-screen flex items-center justify-center gap-4">
			<CardWrapper
				title={"Password reset"}
				subtitle={"Enter your new password"}>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(handleSubmit)}
						className="flex flex-col gap-4">
						<FormField
							control={form.control}
							name="new_password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>New Password</FormLabel>
									<FormControl>
										<Input
											{...field}
											type="password"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="re_new_password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Confirm New Password</FormLabel>
									<FormControl>
										<Input
											{...field}
											type="password"
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

export default PasswordResetConfirmForm;
