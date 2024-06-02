"use client";
import React from "react";
import { useState } from "react";
import "./page.css";
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/MyComponents/Footer";
import Image from "next/image";
import googleImage from "@/../public/images/googleLogo.png";

export default function SignUp() {
	// http://localhost:8000/auth/users/
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		re_password: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: value,
			};
		});
	}
	function handleSubmit(event) {
		event.preventDefault();
		console.log("data:", JSON.stringify(formData));
		if (formData.password === formData.re_password) {
			console.log("Success");
		} else {
			console.log("unsuccessful");
		}
		fetch(" http://localhost:8000/auth/users/ ", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => {
				console.log(res);
				if (res.ok) {
				}
				console.log(res.json());
				return res.json();
			})
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	}

	return (
		<div className="inline-flex w-full flex-col pt-[9.09375rem] pr-[0.625rem] pb-[0.01rem] pl-[0.625rem] justify-end items-center gap-[7.71875rem]">
			<div className="flex flex-col justify-center items-start w-[28.75rem] p-[1.25rem] gap-[2.25rem]">
				<div className="flex flex-col justify-center items-center gap-[2rem] self-stretch">
					<p className="text-[#0F0F0F] text-justify sub-heading-3">
						SIGNUP
					</p>
					<form
						className="form"
						onSubmit={handleSubmit}>
						<div className="flex items-center gap-[0.75rem] self-stretch">
							<div className="flex flex-1 flex-grow-0 flex-shrink-0 flex-col justify-center items-start gap-[0.25rem] ">
								<label
									className="text-black body-text"
									htmlFor="first_name">
									First Name
								</label>
								<input
									type="text"
									className="flex h-[2.75rem] py-[0.625rem] px-[1rem] items-center gap-[0.625rem] self-stretch rounded-[0.625rem] border border-solid border-black"
									name="first_name"
									value={formData.first_name}
									id="first_name"
									onChange={handleChange}
									required
								/>
							</div>

							<div className="flex flex-1 flex-grow-0 flex-shrink-0 flex-col justify-center items-start gap-[0.25rem] ">
								<label
									className="text-black body-text"
									htmlFor="last_name">
									Last Name
								</label>
								<input
									type="text"
									name="last_name"
									value={formData.last_name}
									id="last_name"
									className="flex h-[2.75rem] py-[0.625rem] px-[1rem] items-center gap-[0.625rem] self-stretch rounded-[0.625rem] border border-solid border-black"
									onChange={handleChange}
									required
								/>
							</div>
						</div>

						<div className="flex flex-col justify-center items-start gap-[0.25rem] self-stretch">
							<label
								htmlFor="email"
								className="text-black body-text">
								Email
							</label>
							<input
								type="email"
								name="email"
								value={formData.email}
								id="email"
								className="flex h-[2.75rem] py-[0.625rem] px-[1rem] items-center gap-[0.625rem] self-stretch rounded-[0.625rem] border border-solid border-black"
								onChange={handleChange}
								required
							/>
						</div>
						<div className="flex flex-col justify-center items-start gap-[0.25rem] self-stretch">
							<label
								htmlFor="password"
								className="text-black body-text">
								Password
							</label>
							<input
								type="text"
								name="password"
								value={formData.password}
								id="password"
								className="flex h-[2.75rem] py-[0.625rem] px-[1rem] items-center gap-[0.625rem] self-stretch rounded-[0.625rem] border border-solid border-black"
								onChange={handleChange}
								minLength={8}
								required
							/>
						</div>

						<div className="flex flex-col justify-center items-start gap-[0.25rem] self-stretch">
							<label
								htmlFor="re_password"
								className="text-black body-text">
								Confirm Password
							</label>
							<input
								type="text"
								name="re_password"
								value={formData.re_password}
								id="re_password"
								className="flex h-[2.75rem] py-[0.625rem] px-[1rem] items-center gap-[0.625rem] self-stretch rounded-[0.625rem] border border-solid border-black"
								onChange={handleChange}
								minLength={8}
								required
							/>
						</div>
						<Button className="mt-1">SIGN UP</Button>
					</form>
				</div>
				<div className="flex flex-col justify-center items-start gap-[0.5rem] ml-[-1.25rem]">
					<p className=" text-[#008BF8] body-text">
						Already have an account?{" "}
						<a
							href="./login"
							className="text-black body-text">
							Login
						</a>
					</p>

					<Button
						variant="outline"
						className="flex py-[0.625rem] px-[0.75rem] justify-center items-center gap-[0.5rem]">
						<Image
							src={googleImage}
							alt="Google Logo"
							className="w-[1.875rem] h-[1.875rem]"
						/>
						<span className="text-black body-text">
							Continue with Google
						</span>
					</Button>
				</div>
			</div>
			<Footer />
		</div>
	);
}
