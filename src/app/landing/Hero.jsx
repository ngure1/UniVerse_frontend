"use client";
import React from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import { ButtonsAlertDialog } from "@/components/ui/MyComponents/ButtonsAlertDialog";
import googleImage from "@/../public/images/googleLogo.png";
import videoBg from "@/../public/images/videoBg.gif";

const Hero = () => {
	return (
		<Element
			name="Home"
			className="relative flex flex-col justify-center items-center w-full h-[46.25rem] py-[3.25rem] pt-[8.75rem] px-0 gap-[3.25rem] border border-black shrink-0">
			<Image
				src={videoBg}
				alt="Background Gif"
				unoptimized
				layout="fill"
				priority={true}
				className="absolute inset-0 w-full h-full object-cover"
			/>

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

			<ButtonsAlertDialog
				className="z-[1] flex justify-center items-center gap-[0.5rem] bg-transparent"
				variant="outline"
				size="lg">
				<Image
					src={googleImage}
					alt="Google Logo"
					className="w-[1.875rem] h-[1.875rem]"
				/>
				<span className="muted">Continue with Google</span>
			</ButtonsAlertDialog>
		</Element>
	);
};

export default Hero;
