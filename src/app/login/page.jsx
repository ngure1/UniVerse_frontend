"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/MyComponents/Footer";

export default function Login() {
	const [formData, setFormData] = useState({ email: "", password: "" });
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
		console.log("data:", formData);
	}

	return (
		<div className="inline-flex w-full pt-[14.0625rem] pr-[0.625rem] pb-[0.01rem] pl-[0.625rem] flex-col justify-end items-center gap-[18.375rem] ">
			<div className="flex flex-col items-start gap-[2.375rem]">
				<div className="flex flex-col items-center gap-[1.5rem]">
					<p className="text-black sub-heading-3">LOGIN</p>
					<form onSubmit={handleSubmit}>
						<div className="flex flex-col justify-center items-start gap-[0.25rem]">
							<label
								htmlFor="email"
								className="text-black body-text">
								Email
							</label>
							<input
								className="flex w-[18.75rem] h-[2.75rem] py-[0.625rem] px-[1rem] items-center gap-[0.625rem] rounded-[0.625rem] border border-solid border-black"
								type="text"
								name="email"
								id="email"
								placeholder="example@gmail.com"
								value={formData.email}
								onChange={handleChange}
							/>
						</div>

						<div class="flex flex-col justify-center items-start gap-[0.25rem]">
							<label
								htmlFor="password "
								className="text-black body-text">
								Password
							</label>
							<input
								className="flex w-[18.75rem] h-[2.75rem] py-[0.625rem] px-[1rem] items-center gap-[0.625rem] rounded-[0.625rem] border border-solid border-black"
								type="text"
								name="password"
								id="password"
								value={formData.password}
								onChange={handleChange}
							/>
						</div>
						<Button
							type="submit"
							className="mt-1">
							Login
						</Button>
					</form>
				</div>

				<div className="flex flex-col items-start gap-[0.75rem]">
					<a
						href=""
						className="text-[#008BF8] body-text ">
						Forgot Password?
					</a>
					<p className="text-[#008BF8] body-text">
						Don&#39;t have an account?{" "}
						<a
							href="./signup"
							className="text-[#0F0F0F] body-underline">
							SignUp
						</a>
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}
