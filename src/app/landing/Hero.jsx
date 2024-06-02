"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Element } from "react-scroll";
import { ButtonsAlertDialog } from "@/components/ui/MyComponents/ButtonsAlertDialog";

const Hero = () => {
	return (
		<Element
			name="Home"
			className="relative flex flex-col justify-center items-center w-full h-[47.25rem] py-[3.25rem] pt-[8.75rem] px-0 gap-[3.25rem] border border-black shrink-0">
			<video
				src="./videoBg.mp4"
				type="video/mp4"
				autoPlay
				muted
				loop
				className="absolute inset-0 w-full h-full object-cover">
				Your browser does not support the video tag.
			</video>
			<div className="z-[1] heading-1 text-white text-center">
				<h1 className="heading-1  text-center self-stretch text-[#00BD9D] font-nico-moji">
					UniVerse
				</h1>

				<div className="text-center">
					<p className="sub-heading-2">
						Welcome to JKUAT alumni connect.
					</p>
					<p className="sub-heading-2">
						Your hub for networking collaboration and career growth.
					</p>
				</div>
			</div>

			<ButtonsAlertDialog className="z-[1]">
				<Button
					variant="outline"
					size="lg"
					className="flex justify-center items-center gap-[0.5rem] rounded-[0.625rem] bg-transparent ">
					<img
						src="./images/googleLogo.png"
						alt="Google Logo"
						className="w-[1.875rem] h-[1.875rem]"
					/>
					<span className="text-white body-text">
						Continue with Google
					</span>
				</Button>
			</ButtonsAlertDialog>
		</Element>
	);
};

export default Hero;
