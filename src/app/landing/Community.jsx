"use client";
import React from "react";
import { Element } from "react-scroll";

const Community = () => {
	return (
		<Element
			name="community"
			className="pt-[8.75rem] flex pb-[1.5rem] flex-col gap-9 items-center justify-center w-full">
			<div className="flex flex-col justify-center items-center gap-1">
				<p className="heading-2">Our community</p>
				<p className="body-text text-center muted">
					Meet some of our active members
				</p>
			</div>

			<div className="flex w-full sm:px-[6.25rem] justify-center items-center gap-[5.25rem] max-sm:flex-col max-sm:gap-[2rem] pl-[0.5rem]">
				<div className="flex max-w-[31.25rem] w-full items-center gap-4 flex-shrink-0">
					{/* image */}
					<div className="w-[8.25rem] h-[8.25rem]  flex-shrink-0 rounded-[8.25rem]  bg-gradient-to-r from-cyan-500 to-blue-500"></div>

					<div className="flex flex-col justify-center items-start gap-3 self-stretch flex-1">
						<div className="flex flex-col items-start">
							<p className="body-text text-center">Jane Doe</p>
							<p className="body-text text-center muted">
								Alumni class of '05
							</p>
						</div>

						<p className="self-stretch body-text">
							This platform has helped me connect with my fellow
							alumni and find jobs.
						</p>
					</div>
				</div>

				<div className="flex max-w-[31.25rem] w-full items-center gap-4 flex-shrink-0">
					{/* image */}
					<div className="w-[8.25rem] h-[8.25rem]  flex-shrink-0 rounded-[8.25rem]  bg-gradient-to-r from-cyan-500 to-blue-500"></div>

					<div className="flex flex-col justify-center items-start gap-3 self-stretch flex-1">
						<div className="flex flex-col items-start">
							<p className="body-text text-center">John Doe</p>
							<p className="body-text text-center muted">
								Current Student
							</p>
						</div>

						<p className="self-stretch body-text">
							This platform has helped me connect with my fellow
							alumni and find jobs.
						</p>
					</div>
				</div>
			</div>
		</Element>
	);
};

export default Community;
