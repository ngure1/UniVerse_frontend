"use client";
import { useState } from "react";
import SignUpFormSchema from "@/schema/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/shadcnComponents/button";
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
import {
	Card,
	CardContent,
	CardHeader,
} from "@/components/ui/shadcnComponents/card";
import GoogleLogo from "@/../public/images/googleLogo.png";
import Image from "next/image";
import Link from "next/link";

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
		signUp(data)
			.unwrap()
			.then(() => {
				//redirect logic,
				//toast
				setSuccess(true);
			});
		// 	fetch("http://localhost:8000/auth/jwt/create/", {
		// 		method: "POST",
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 			Accept: "application/json",
		// 		},
		// 		body: dataToSubmit,
		// 	})
		// 		.then((res) => {
		// 			return res.json();
		// 		})
		// 		.then((data) => console.log(data));
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
						<p>
							Already have an account?{" "}
							<Link href="/login"> Login</Link>
						</p>

						<Button
							type="submit"
							className="flex py-[0.625rem] px-[0.75rem] justify-start items-center w-full gap-[5.625rem] capitalize bg-transparent text-muted border border-solid"
							disabled={isLoading}>
							<Image
								src={GoogleLogo}
								alt="Google Logo"
								className="w-[1.875rem] h-[1.875rem]"
							/>
							Continue with Google
						</Button>
					</form>
				</Form>
			</Card>
		</div>
	);
};

export default SignUpForm;
