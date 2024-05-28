"use client";
import React from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";

const Header = () => {
	return (
		<header className="flex justify-end items-end w-[90rem] h-[7.25rem] py-[1.75rem]  px-[1.25rem] gap-[13.6875rem] shrink-0 border-b-1 border-black-60 fixed bg-white z-10 shadow-md pb-3 ">
			<nav className="inline-flex flex-row items-center justify-between w-full  sm:gap-2 mx-[6.06rem] mt-[1.88rem]">
				<img src="./images/universeLogo.png" alt="Universe Logo" className="w-[15.625rem] h-[3.75rem] absolute left-0 bottom-[0.8125rem] " />
				<div className="flex items-start gap-[3rem] my-[1.75rem] ml-[20rem] mr-[13.69rem] ">
					<Link
						activeClass="active"
						to="Home"
						spy={true}
						smooth={true}
						className="cursor-pointer text-black body-text"
						duration={600}
					>
						Home
					</Link>
					<Link
						activeClass="active"
						to="About"
						spy={true}
						smooth={true}
						className="cursor-pointer text-[#00BD9D] body-underline"
						duration={600}
					>
						About
					</Link>
					<Link
						activeClass="active"
						to="The_Team"
						spy={true}
						smooth={true}
						className="cursor-pointer text-black body-text"
						duration={600}
					>
						The Team
					</Link>
					<Link
						activeClass="active"
						to="Sponsors"
						spy={true}
						smooth={true}
						className="cursor-pointer text-black body-text"
						duration={600}
					>
						Sponsors
					</Link>
				</div>
				<div className="flex justify-end items-center gap-[1.8125rem]">
				<Button className="bg-white flex py-[0.375rem] px-[1.75rem] justify-center items-center gap[0.625rem] rounded-[0.25rem] border border-solid border-[#00AB8B]"><span className="text-black primary-btn-text">Login</span></Button>
				<Button className="flex py-[0.375rem] px-[1.75rem] justify-center items-center gap[0.625rem] rounded-[0.25rem] border border-solid border-[#00AB8B]"><span className="primary-btn-text">Signup</span></Button>

				</div>
			</nav>
		</header>
	);
};

export default Header;
