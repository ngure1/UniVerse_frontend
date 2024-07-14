"use client";
import React from "react";
import TeamCard from "./TeamCard";
import { Element } from "react-scroll";

const Nderu = require("@/../public/images/profiles/Nderu.jpeg");
const Jose = require("@/../public/images/profiles/Jose.jpeg");
const Maurice = require("@/../public/images/profiles/Maurice.jpeg");
const Hilda = require("@/../public/images/profiles/Hilda.jpeg");
const Florence = require("@/../public/images/profiles/Florence.jpeg");
const Boni = require("@/../public/images/profiles/Boni.jpeg");

const Team = () => {
	const teamMembers = [
		{
			memberName: "Dr. Lawrence Nderu",
			memberImage: Nderu,
			memberRole: "Project PI",
			linkedInLink: "https://www.linkedin.com/in/dr-lawrence-nderu/",
			githubLink: "https://www.github.com/",
		},
		{
			memberName: "Joseph Ngure",
			memberImage: Jose,
			memberRole: "Team Lead",
			linkedInLink: "https://www.linkedin.com/in/joseph-ngure-bba51025b/",
			githubLink: "https://www.github.com/ngure1",
		},
		{
			memberName: "Maurice Maina",
			memberImage: Maurice,
			memberRole: "Full stack developer",
			linkedInLink:
				"https://www.linkedin.com/in/maurice-macharia-1300332a1/",
			githubLink: "https://www.github.com/Macharia-Maurice",
		},
		{
			memberName: "Hilda Mwangi",
			memberImage: Hilda,
			memberRole: "Frontend developer",
			linkedInLink: "https://www.linkedin.com/in/hilda-mwangi-8585a5254/",
			githubLink: "https://www.github.com/mwangi-hilda",
		},
		{
			memberName: "Florence King'ori",
			memberImage: Florence,
			memberRole: "Frontend developer",
			linkedInLink:
				"https://www.linkedin.com/in/florence-king-ori-779448309/",
			githubLink: "https://www.github.com/kingoriwangechi",
		},
		{
			memberName: "Bonface Theuri",
			memberImage: Boni,
			memberRole: "Backend developer",
			linkedInLink: "https://www.linkedin.com/in/theuri-karue-260846242/",
			githubLink: "https://www.github.com/theurikarue",
		},
	];
	return (
		<Element
			name="theTeam"
			className="pt-[8.75rem]">
			<div className="flex flex-col py-[2rem] justify-center items-center gap-[1rem] self-stretch w-full">
				<div className="flex flex-col justify-center items-center gap-[0.25rem]">
					<h2 className="heading-2"> Meet the Team </h2>
					<p className="body-text muted">
						The Brains behind the brilliant project
					</p>
				</div>
				<div className="flex items-center justify-center flex-col gap-[1rem] py-[0.75rem] w-full">
					<div className="flex px-[2.5rem] flex-wrap items-center justify-center gap-[1.75rem] max-sm:flex-col">
						{teamMembers.map((member, index) => (
							<TeamCard
								key={index}
								memberImage={member.memberImage}
								memberName={member.memberName}
								memberRole={member.memberRole}
								linkedInLink={member.linkedInLink}
								githubLink={member.githubLink}
							/>
						))}
					</div>
				</div>
			</div>
		</Element>
	);
};

export default Team;
