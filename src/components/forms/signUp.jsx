"use client";
import { useState } from "react";
import SignUpFormSchema from "@/schema/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/shadcnComponents/button";
import GoogleBtn from "../ui/MyComponents/googlebtn";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/shadcnComponents/form";
import { Input } from "@/components/ui/shadcnComponents/input";
import { Eye, EyeOff } from "lucide-react";
import { useUserCreateMutation } from "@/redux/features/auth/authApiSlice";
import { Card, CardHeader } from "@/components/ui/shadcnComponents/card";
import GoogleLogo from "@/../public/images/googleLogo.png";
import Image from "next/legacy/image";
import Link from "next/link";
import { toast } from "react-toastify";

const SignUpForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showRePassword, setShowRePassword] = useState(false);

	const form = useForm({
		resolver: zodResolver(SignUpFormSchema),
		defaultValues: {
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			re_password: "",
		},
	});

	const [signUp, { isLoading }] = useUserCreateMutation();

	const handleClick = () => {
		setShowPassword(!showPassword);
	};

	const onSubmit = (data) => {
		// * Show a loading toast when the signUp process starts
		const toastId = toast.loading("Creating your account...", {
			theme: "colored",
			autoClose: false,
			position: "top-center",
		});

		signUp(data)
			.unwrap()
			.then(() => {
				// * Update the toast on successful signUp
				toast.update(toastId, {
					render: "Account created! Check your email for an activation link.",
					type: "success",
					isLoading: false,
					autoClose: 5000,
					position: "top-center",
				});
				// Redirect logic or other actions after successful signUp
			})
			.catch((error) => {
				// Update the toast on signUp failure
				if (error.data.password) {
					toast.update(toastId, {
						render: `Failed to create account.${error.data.password}`,
						type: "error",
						isLoading: false,
						autoClose: 5000,
						position: "top-center",
					});
				} else {
					toast.update(toastId, {
						render: `Failed to create account.Please Try again`,
						type: "error",
						isLoading: false,
						autoClose: 5000,
						position: "top-center",
					});
				}
			});
	};

	return (
		<div className="h-screen flex items-center justify-center">
			<Card className="xl:w-1/4 md:w-1/2 shadow-md p-[2rem]">
				<CardHeader>
					<p className="sub-heading-3 text-center">SIGNUP</p>
				</CardHeader>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-6">
						<div className="space-y-4">
							<div className="flex align-center gap-[0.75rem] self-stretch">
								<FormField
									control={form.control}
									name="first_name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>First Name</FormLabel>
											<FormControl>
												<Input
													placeholder="Jane"
													type="text"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="last_name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Last Name</FormLabel>
											<FormControl>
												<Input
													placeholder="Doe"
													type="text"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												placeholder="example@gmail.com"
												type="email"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input
												type={
													showPassword
														? "text"
														: "password"
												}
												suffix={
													showPassword ? (
														<Eye
															onClick={
																handleClick
															}
															color="#777777"
														/>
													) : (
														<EyeOff
															onClick={
																handleClick
															}
															color="#777777"
														/>
													)
												}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="re_password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Confirm Password</FormLabel>
										<FormControl>
											<Input
												type={
													showRePassword
														? "text"
														: "password"
												}
												suffix={
													showRePassword ? (
														<Eye
															onClick={() => {
																setShowRePassword(
																	!showRePassword,
																);
															}}
															color="#777777"
														/>
													) : (
														<EyeOff
															onClick={() => {
																setShowRePassword(
																	!showRePassword,
																);
															}}
															color="#777777"
														/>
													)
												}
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
							className="uppercase w-full"
							disabled={isLoading}>
							Sign Up
						</Button>
						<p className="text-blue-500">
							Already have an account?{" "}
							<Link href="/login"> Login</Link>
						</p>
					</form>
					<GoogleBtn />
				</Form>
			</Card>
		</div>
	);
};

export default SignUpForm;
