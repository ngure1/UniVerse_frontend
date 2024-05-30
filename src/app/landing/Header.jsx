"use client";
import React from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import HeaderDropdown from "@/components/ui/MyComponents/HeaderDropdown";
import { MainMenu } from "@/components/ui/MyComponents/MainMenu";
import { ButtonsAlertDialog } from "@/components/ui/MyComponents/ButtonsAlertDialog";

const Header = () => {
	return (
		<header className="flex justify-end items-end w-full h-[7.25rem] py-[1.75rem]  px-[1.25rem] gap-[13.6875rem] shrink-0 border-b-1 border-black-60 fixed bg-white z-20 shadow-md pb-3 ">
			<nav className="inline-flex flex-row items-center justify-between w-full  sm:gap-2 mx-[6.06rem] mt-[1.88rem] h-full">
				<img src="./images/universeLogo.png" alt="Universe Logo" className="w-[15.625rem] h-[3.75rem] absolute left-0 bottom-[0.8125rem] " />
				<div className="flex items-start gap-[3rem] my-[1.75rem] ml-[20rem] mr-[13.69rem] max-sm:hidden">
					<Link
						activeClass="active"
						to="Home"
						spy={true}
						smooth={true}
						className="cursor-pointer body-md"
						duration={600}
					>
						Home
					</Link>
					<Link
						activeClass="active"
						to="whyJoinUs"
						spy={true}
						smooth={true}
						className="cursor-pointer body-md"
						duration={600}
					>
						Why Join Us
					</Link>
					<Link
						activeClass="active"
						to="community"
						spy={true}
						smooth={true}
						className="cursor-pointer body-md"
						duration={600}
					>
						Community
					</Link>
					<Link
						activeClass="active"
						to="latestPosts"
						spy={true}
						smooth={true}
						className="cursor-pointer body-md"
						duration={600}
					>
						Latest posts
					</Link>
					<Link
						activeClass="active"
						to="theTeam"
						spy={true}
						smooth={true}
						className="cursor-pointer body-md"
						duration={600}
					>
						The Team
					</Link>
					<Link
						activeClass="active"
						to="partners"
						spy={true}
						smooth={true}
						className="cursor-pointer body-md"
						duration={600}
					>
						Partners
					</Link>
					
				</div>
				<div className="flex justify-end items-center gap-[1.8125rem]">
				<ButtonsAlertDialog>
				<Button className="bg-white flex py-[0.375rem] px-[1.75rem] justify-center items-center gap[0.625rem] rounded-[0.25rem] border border-solid border-[#00AB8B] max-sm:hidden"><span className="text-black primary-btn-text">Login</span></Button>	
				</ButtonsAlertDialog>
				<ButtonsAlertDialog>
				<Button className="flex py-[0.375rem] px-[1.75rem] justify-center items-center gap[0.625rem] rounded-[0.25rem] border border-solid border-[#00AB8B] max-sm:hidden"><span className="primary-btn-text">Signup</span></Button>

				</ButtonsAlertDialog>
				</div>
				<MainMenu/>
			</nav>
		</header>
	);
};

export default Header;
