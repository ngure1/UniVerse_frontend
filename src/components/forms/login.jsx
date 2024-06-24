"use client";
import { useState } from "react";
import { loginFormSchema } from "@/schema/loginShema";
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
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/shadcnComponents/input";
import { Eye, EyeOff } from "lucide-react";
import { useJwtCreateMutation } from "@/redux/features/auth/authApiSlice";
import {
	Card,
	CardContent,
	CardHeader,
} from "@/components/ui/shadcnComponents/card";
import Link from "next/link";
import { setAuth } from "@/redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Separator } from "@/components/ui/shadcnComponents/separator";

const LoginPage = () => {
	const [showPassword, setShowPassword] = useState(false);

	const router = useRouter();

	const form = useForm({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const [login, { isLoading, error }] = useJwtCreateMutation();

	const handleClick = () => {
		setShowPassword(!showPassword);
	};

	const dispatch = useDispatch();
	const onSubmit = async (data) => {
		// * Show a loading toast when the login process starts

		const toastId = toast.loading("Wait while logging you in...", {
			theme: "colored",
			autoClose: false,
			position: "top-center",
		});

		try {
			await login(data).unwrap();
			// * Update the toast on successful login
			toast.update(toastId, {
				render: "Login successful! Redirecting you to the home page...",
				type: "success",
				isLoading: false,
				autoClose: 5000,
				position: "top-center",
			});
			dispatch(setAuth(true));

			// * Redirect to home page or perform any other action on successful login
			router.push("/home");
		} catch (error) {
			//* Update the toast on login failure
			toast.update(toastId, {
				render: "Failed to log in. Please check your credentials and try again.",
				type: "error",
				isLoading: false,
				autoClose: 5000,
				position: "top-center",
			});
		}
	};

	return (
		<div className="h-screen flex items-center justify-center">
			<Card className="xl:w-1/4 md:w-1/2 shadow-md p-[2rem]">
				<CardHeader>
					<p className="sub-heading-3 text-center">LOGIN</p>
				</CardHeader>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-6">
						<div className="space-y-4">
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
						</div>

						<Button
							type="submit"
							className="uppercase w-full"
							disabled={isLoading}>
							Login
						</Button>
						<p>
							<Link
								href="/password-reset"
								className="text-blue-500">
								Forgot Password
							</Link>
						</p>
						<p className="text-blue-500">
							Don&#39;t have an account?{" "}
							<Link href="/signup">Sign Up</Link>
						</p>
						<div className="flex items-center justify-center">
							<Separator />
							<p>or</p>
							<Separator />
						</div>
					</form>

					<GoogleBtn />
				</Form>
			</Card>
		</div>
	);
};

export default LoginPage;
