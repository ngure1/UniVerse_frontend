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
		<div className="w-full h-screen flex justify-center pt-[6rem]">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex gap-[1rem] flex-col w-[400px]">
					<p className="sub-heading-3 text-center">SIGNUP</p>
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
											showPassword ? "text" : "password"
										}
										suffix={
											showPassword ? (
												<Eye
													onClick={handleClick}
													color="#777777"
												/>
											) : (
												<EyeOff
													onClick={handleClick}
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
											showRePassword ? "text" : "password"
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

					<Button
						type="submit"
						className="uppercase"
						disabled={isLoading}>
						Sign Up
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default SignUpForm;
