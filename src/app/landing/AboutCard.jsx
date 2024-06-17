import React from "react";
import { ButtonsAlertDialog } from "@/components/ui/MyComponents/ButtonsAlertDialog";

export default function AboutCard({
	aboutSVG,
	aboutTitle,
	aboutContent,
	aboutLink,
}) {
	return (
		<div className="max-w-[31.5rem] flex-grow flex flex-col px-[2.125rem] py-[1.125rem] items-center gap-[1rem] rounded-[0.5rem] border border-solid border-[#00B595] shadow-lg">
			<div className="flex flex-col gap-[0.5rem] self-stretch items-center">
				{aboutSVG}
				<p className="sub-heading-2 w-full text-center">{aboutTitle}</p>
			</div>
			<p className="max-w-[18.75rem] text-center body-text">
				{aboutContent}
			</p>
			<p className="muted body-underline">
				<ButtonsAlertDialog
					className={"muted body-underline normal-case"}
					variant={"ghost"}>
					<p>{aboutLink} &#x3E;</p>
				</ButtonsAlertDialog>
			</p>
		</div>
	);
}
