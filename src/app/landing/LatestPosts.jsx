"use client";
import React from "react";
import { Element } from "react-scroll";
import Image from "next/image";

const Card1 = require("@/../public/images/Card1.png");
const Card2 = require("@/../public/images/Card2.png");
const Card3 = require("@/../public/images/Card3.png");
const Card4 = require("@/../public/images/Card4.png");

const LatestPosts = () => {
	return (
		<Element
			name="latestPosts"
			className="pt-[8.75rem]">
			<div className="flex flex-col py-[1.5rem] items-center justify-center gap-[2.25rem] w-full">
				<div className="flex flex-col justify-center items-center gap-[0.25rem]">
					<h2 className="heading-2">Latest Posts</h2>
					<p className="body-text muted">
						Stay updated with the latest news and insights
					</p>
				</div>
				<div className="flex flex-col justify-center items-center w-full px-[6.25rem] gap-[2rem] max-sm:px-[4rem]">
					<div className="flex gap-[1.25rem] items-center px-[1.25rem] py-[2rem] border border-cyan-400 w-full rounded-md max-sm:flex-col">
						<div className="w-[8.25rem] h-[8.25rem] rounded-full flex items-center justify-center">
							<Image
								alt="post card image"
								src="/images/Card1.png"
								width="200"
								height="200"
							/>
						</div>
						<div className="flex max-w-[25rem] flex-col gap-[0.75rem] items-start">
							<p className="sub-heading-4">
								Alumni Connect:Our Journey So far
							</p>
							<p className="body-text muted">
								A look back at rour jouney and what’s to come
							</p>
						</div>
					</div>
					<div className="flex gap-[1.25rem] items-center px-[1.25rem] py-[2rem] border border-cyan-400 w-full rounded-md max-sm:flex-col">
						<div className="w-[8.25rem] h-[8.25rem] rounded-full flex items-center justify-center">
							<Image
								alt="post card image"
								src="/images/Card2.png"
								width="200"
								height="200"
							/>
						</div>
						<div className="flex max-w-[25rem] flex-col gap-[0.75rem] items-start">
							<p className="sub-heading-4">
								5 tips for landing your first job after
								graduation
							</p>
							<p className="body-text muted">
								How to navigate the new job market as a new
								graduate
							</p>
						</div>
					</div>
					<div className="flex gap-[1.25rem] items-center px-[1.25rem] py-[2rem] border border-cyan-400 w-full rounded-md max-sm:flex-col">
						<div className="w-[8.25rem] h-[8.25rem] rounded-full flex items-center justify-center">
							<Image
								alt="post card image"
								src="/images/Card3.png"
								width="200"
								height="200"
							/>
						</div>
						<div className="flex max-w-[25rem] flex-col gap-[0.75rem] items-start">
							<p className="sub-heading-4">
								How to make the most of your mentorship
								experience
							</p>
							<p className="body-text muted">
								Tips for a successful mentorship
							</p>
						</div>
					</div>
					<div className="flex gap-[1.25rem] items-center px-[1.25rem] py-[2rem] border border-cyan-400 w-full rounded-md max-sm:flex-col">
						<div className="w-[8.25rem] h-[8.25rem] rounded-full flex items-center justify-center">
							<Image
								alt="post card image"
								src="/images/Card4.png"
								width="200"
								height="200"
							/>
						</div>
						<div className="flex max-w-[25rem] flex-col gap-[0.75rem] items-start">
							<p className="sub-heading-4">
								The importance of networking in college
							</p>
							<p className="body-text muted">
								Why it’s never too early to start networking
							</p>
						</div>
					</div>
				</div>
			</div>
		</Element>
	);
};

export default LatestPosts;
