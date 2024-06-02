"use client";
import React from "react";
import { Element } from "react-scroll";
import AboutCard from "./AboutCard";
import { ShareSVG, CareerSVG, SupportSVG } from "./SVGIcon";

const About = () => {
	return (
		<Element
			className="flex flex-col justify-center items-center pb-[1.5rem] pt-[8.75rem] px-0 gap-[2.25rem] w-full"
			name="whyJoinUs">
			<div className="flex flex-col justify-center items-center gap-[0.25rem]">
				<h2 className="heading-2 text-center">Why Join Us</h2>
				<p className="muted text-center body-text">
					Bridging the gap between fellow alumni and current students
					in the computing department
				</p>
			</div>
			<div className="flex w-full py-0 px-[2.5rem] justify-center items-center gap-[4.75rem] max-sm:flex-col">
				<AboutCard
					aboutSVG={<ShareSVG />}
					aboutTitle={"Share and Engage"}
					aboutContent={
						"Post insights, experiences, and multimedia content"
					}
					aboutLink={"Share now "}
				/>
				<AboutCard
					aboutSVG={<CareerSVG />}
					aboutTitle={"Career Opportunities"}
					aboutContent={
						"Explore job postings curated specifically for you."
					}
					aboutLink={"Explore now "}
				/>
				<AboutCard
					aboutSVG={<SupportSVG />}
					aboutTitle={"Support"}
					aboutContent={"Contribute to departmental initiatives."}
					aboutLink={"Join now  "}
				/>
			</div>
		</Element>
	);
};

export default About;
