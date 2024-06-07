"use client";
import { useState } from "react";
import { loginFormSchema } from "@/schema/loginShema";
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

	const [login, { isLoading }] = useJwtCreateMutation();

	const handleClick = () => {
		setShowPassword(!showPassword);
	};

	const onSubmit = (data) => {
		login(data)
			.unwrap()
			.then(() => {
				//redirect logic,
				//toast
				router.push("/");
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
							<Link href="#">Forgot Password</Link>
						</p>
						<p>
							Don't have an account?{" "}
							<Link href="/signup">Sign Up</Link>
						</p>
					</form>
				</Form>
			</Card>
		</div>
	);
};

export default LoginPage;
