"use client";
import { useState } from "react";
import { loginFormSchema } from "@/schema/loginShema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useJwtCreateMutation } from "@/redux/features/auth/authApiSlice";

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
		<div className="w-full h-screen flex justify-center pt-[6rem]">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex gap-[1rem] flex-col w-[400px]">
					<p className="sub-heading-3 text-center">LOGIN</p>
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

					<Button
						type="submit"
						className="uppercase"
						disabled={isLoading}>
						Login
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default LoginPage;
