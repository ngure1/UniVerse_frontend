"use client";
import React from "react";
import PostCard from "./PostCard";
import { Element } from "react-scroll";

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
					<div className="flex gap-[2rem] items-center justify-center w-full max-sm:flex-col">
						<PostCard
							postImage={Card1}
							postTitle={"Alumni Connect:Our Journey So far"}
							postDescription={
								"A look back at rour jouney and what’s to come"
							}
						/>
						<PostCard
							postImage={Card2}
							postTitle={
								"5 tips for landing your first job after graduation"
							}
							postDescription={
								"How to navigate the new job market as a new graduate"
							}
						/>
					</div>
					<div className="flex gap-[2rem] items-center justify-center w-full max-sm:flex-col">
						<PostCard
							postImage={Card3}
							postTitle={
								"How to make the most of you mentorship experience"
							}
							postDescription={
								"Why it’s never too early to start networking"
							}
						/>
						<PostCard
							postImage={Card4}
							postTitle={
								"The importance of networking in college"
							}
							postDescription={"Tips for a successful mentorship"}
						/>
					</div>
				</div>
			</div>
		</Element>
	);
};

export default LatestPosts;
