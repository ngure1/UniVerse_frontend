"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Element } from "react-scroll";

const Hero = () => {
	return (
		<Element
			name="Home"
			className="inline-flex items-center gap-[6.875rem] lg:mx-[9.75rem] md:mx-[6.75rem] sm:mx-0 h-screen "
		>
			<div className="flex flex-col justify-center items-start gap-[1.875rem]">
				<h1 className="heading-1 w-[40.625rem]">
					Welcome to Universe: Empowering JKUAT Computing Alumni
				</h1>
				<p className="body-text w-[40.625rem] h-[15.75rem] flex-shrink-0">
					Join a vibrant community of JKUAT Computing alumni on Universe, your
					centralized platform for seamless communication, collaboration, and
					resource-sharing. Connect with fellow alumni, share insights, explore
					career opportunities, and stay updated on departmental events.
					Together, let's foster a thriving ecosystem of learning and growth
					within our community.
				</p>
				<div className="flex gap-[3.125rem]">
					<Button variant="outline">Login</Button>
					<Button>signup</Button>
				</div>
			</div>
			<div className="w-[35rem] h-[32.875rem] bg-slate-700"></div>
		</Element>
	);
};

export default Hero;
