"use client";
import React from "react";
import { Button } from "@/components/ui/button";
// import VideoBg from "@/components/VideoBg";
import { Element } from "react-scroll";

const Hero = () => {
	return (
		<Element
			name="Home"
			className="flex flex-col justify-center items-center w-[90rem] h-[44.25rem] py-[3.25rem] px-0 gap-[3.25rem] shrink-0"
		>
		
			<div className="flex flex-col justify-center items-center w-[56.25rem] padding-[0.625rem] gap-[0.5rem] ">
				<h1 className="heading-1 w-[50.625rem] text-center self-stretch text-[#00BD9D] font-nico-moji">
					UniVerse
				</h1>

			<div className="w-[50rem] text-center">
			<p className="sub-heading-2">
					Welcome to JKUAT alumni connect.
				</p>
				<p className="sub-heading-2">
					Your hub for networking collaboration and career growth.
				</p>
			</div>
				</div>
				<div className="flex gap-[3.125rem]">

				
				<Button variant="outline" className="flex py-[0.625rem] px-[0.75rem] justify-center items-center gap-[0.5rem] rounded-[0.625rem] border border-solid border-[#F3FBF9] ">
                <img  src="./images/googleLogo.png" alt="Google Logo" className="w-[1.875rem] h-[1.875rem]" />
                <span className="text-black body-text">Continue with Google</span></Button>
        
				</div>
		</Element>
	);
};

export default Hero;
