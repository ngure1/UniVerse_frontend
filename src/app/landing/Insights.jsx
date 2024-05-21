"use client";
import React from "react";
import { Element } from "react-scroll";
import card1 from "../../../public/images/card1.png";
import card2 from "../../../public/images/card2.png";
import card3 from "../../../public/images/card3.png";
import InsightsCard from "./InsightsCard";

const Insights = () => {
	return (
		<Element className="h-screen pt-[8rem] mx-[3.75rem]" name="Insights">
			<h2 className="heading-2 text-center ">Insights</h2>
			<div className="flex flex-col gap-[0.75rem] items-start">
				<p className="sub-heading-2">Stay Informed, Get Inspired</p>
				<p className="body-text max-w-[50rem]">
					Discover the latest insights, experiences, and multimedia content
					shared by our alumni community.
				</p>
			</div>
			<div className="inline-flex items-center justify-center gap-[2.8125rem] mt-5">
				<InsightsCard
					cardSrc={card1}
					title={"Unlocking the Power of Collaboration"}
					description={
						"Learn how collaboration can drive innovation and success in the tech industry."
					}
				/>
				<InsightsCard
					cardSrc={card2}
					title={"The Future of Artificial Intelligence"}
					description={
						"Explore the potential and impact of AI on various industries."
					}
				/>
				<InsightsCard
					cardSrc={card3}
					title={"The Rise of Blockchain Technology"}
					description={
						"Learn how blockchain is revolutionizing industries and transforming business processes."
					}
				/>
				<InsightsCard
					cardSrc={card1}
					title={"The Rise of Blockchain Technology"}
					description={
						"Learn how blockchain is revolutionizing industries and transforming business processes."
					}
				/>
			</div>
		</Element>
	);
};

export default Insights;
