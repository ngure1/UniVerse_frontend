"use client";
import React from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import { ButtonsAlertDialog } from "@/components/ui/MyComponents/ButtonsAlertDialog";
import { ContinueWithGoogle } from "../../../utils/continue-with-google";

const Hero = () => {
	return (
		<Element
			name="Home"
			className="relative flex flex-col justify-center items-center w-full h-[49.25rem] py-[3.25rem] pt-[8.75rem] px-0 gap-[3.25rem] border border-black shrink-0">
			<Image
				src="/images/jkuat.JPG"
				alt="Background Gif"
				unoptimized
				layout="fill"
				priority={true}
				className="absolute inset-0 w-full h-[49.25rem] object-cover"
			/>
			<Image
				alt="Jkuat logo"
				src="/images/image 1.png"
				width={50}
				height={50}
				className="z-1 absolute top-[9rem] max-sm:w-24"
			/>

			<div className="backdrop-blur-sm gap-5 flex flex-col p-5 rounded-sm border-2 border-white">
				<div className="z-[1] heading-1 text-white text-center">
					<h1 className="heading-1 text-center self-stretch text-[#00BD9D]">
						JKAN
					</h1>

					<div className="text-center">
						<p className="sub-heading-2">
							Welcome to JKUAT alumni network.
						</p>
						<p className="sub-heading-2">
							Your hub for networking collaboration and career
							growth.
						</p>
					</div>
				</div>
				<ButtonsAlertDialog
					className="z-[1] flex justify-center items-center gap-[0.5rem] bg-transparent"
					variant="outline"
					size="lg"
					onClick={ContinueWithGoogle}>
					<Image
						src="/images/googleLogo.png"
						width={50}
						height={50}
						alt="Google Logo"
						className="w-[1.875rem] h-[1.875rem]"
					/>
					<span className="text-white">Continue with Google</span>
				</ButtonsAlertDialog>
			</div>
		</Element>
	);
};

export default Hero;
