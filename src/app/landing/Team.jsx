"use client";
import React from "react";
import TeamCard from "./TeamCard";
import Nderu from "@/../public/images/profiles/Nderu.jpeg";
import Jose from "@/../public/images/profiles/Jose.jpeg";
import Maurice from "@/../public/images/profiles/Maurice.jpeg";
import Hilda from "@/../public/images/profiles/Hilda.jpeg";
import Florence from "@/../public/images/profiles/Florence.jpeg";
import Boni from "@/../public/images/profiles/Boni.jpeg";
import { Element } from "react-scroll";

const Team = () => {
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
					<div className="flex px-[2.5rem] items-center justify-center gap-[1.75rem] max-sm:flex-col">
						<TeamCard
							memberImage={Nderu}
							memberName={"Dr. Nderu"}
							memberRole={"Project PI"}
							linkedInLink={""}
							githubLink={"https://www.github.com/"}
						/>
						<TeamCard
							memberImage={Jose}
							memberName={"Joseph Ngure"}
							memberRole={"Team Lead"}
							linkedInLink={""}
							githubLink={"https://www.github.com/ngure1"}
						/>
						<TeamCard
							memberImage={Maurice}
							memberName={"Maurice Maina"}
							memberRole={"Full stack developer"}
							linkedInLink={""}
							githubLink={
								"https://www.github.com/Macharia-Maurice"
							}
						/>
						<TeamCard
							memberImage={Hilda}
							memberName={"Hilda Mwangi"}
							memberRole={"Frontend developer"}
							linkedInLink={""}
							githubLink={"https://www.github.com/mwangi-hilda"}
						/>
					</div>
					<div className="flex items-start gap-[1.75rem] max-sm:flex-col">
						<TeamCard
							memberImage={Florence}
							memberName={"Florence King'ori"}
							memberRole={"Frontend developer"}
							linkedInLink={""}
							githubLink={
								"https://www.github.com/kingoriwangechi"
							}
						/>
						<TeamCard
							memberImage={Boni}
							memberName={"Bonface Theuri"}
							memberRole={"Backend developer"}
							linkedInLink={""}
							githubLink={"https://www.github.com/theurikarue"}
						/>
					</div>
				</div>
			</div>
		</Element>
	);
};

export default Team;
