"use client";
import React from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";

const Header = () => {
	return (
		<header className="flex justify-center w-full fixed bg-white z-10 shadow-md pb-3 ">
			<nav className="inline-flex flex-row items-center justify-between w-full  sm:gap-2 mx-[6.06rem] mt-[1.88rem]">
				<p className="sub-heading-2">Logo</p>
				<div className="flex items-end gap-[4.3125rem] ">
					<Link
						activeClass="active"
						to="Home"
						spy={true}
						smooth={true}
						className="cursor-pointer"
						duration={600}
					>
						Home
					</Link>
					<Link
						activeClass="active"
						to="About"
						spy={true}
						smooth={true}
						className="cursor-pointer"
						duration={600}
					>
						About
					</Link>
					<Link
						activeClass="active"
						to="Insights"
						spy={true}
						smooth={true}
						className="cursor-pointer"
						duration={600}
					>
						Insights
					</Link>
				</div>
				<Button>signup</Button>
			</nav>
		</header>
	);
};

export default Header;
