'use client'
import React from "react";
import Image from "next/image";
import ReadMore from "./ReadMore";

const InsightsCard = ({ cardSrc, title, description }) => {
	return (
			<div className="flex gap-[1.5rem] flex-col min-h-[30.5rem] max-w-[23.75rem] relative">
				<Image
					src={cardSrc}
					width={380}
					
					className="rounded-[0.25rem] max-w-fit"
				/>
				<div className="flex flex-col gap-[0.5rem] items-start self-stretch">
					<p className="sub-heading-3 max-w-full">{title}</p>
					<p className="body-text max-w-[21.25rem]">{description}</p>
					<ReadMore className={"absolute bottom-0 left-0"} />
				</div>
			</div>
	);
};

export default InsightsCard;
