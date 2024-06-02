"use client";
import React from "react";
import { Link } from "react-scroll";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import HeaderDropdown from "@/components/ui/MyComponents/HeaderDropdown";
import { ButtonsAlertDialog } from "@/components/ui/MyComponents/ButtonsAlertDialog";
import Image from "next/image";
import { default as NextLink } from "next/link";
import Logo from "@/../public/images/logo.png";

const Header = () => {
	return (
		<header className="flex justify-between items-center w-full h-[7.25rem] py-[1.75rem] px-[1.25rem] shrink-0 fixed bg-white dark:bg-zinc-500 z-20 shadow-md pb-3 ">
			<NextLink href="">
				<Image
					src={Logo}
					alt="Universe Logo"
					className="cursor-pointer max-sm:w-[150px] sm:w-[250px]"
				/>
			</NextLink>
			<nav className="flex items-center gap-[3rem] max-sm:hidden">
				<Link
					activeClass="active"
					to="Home"
					spy={true}
					smooth={true}
					className="cursor-pointer body-md"
					duration={600}>
					Home
				</Link>
				<Link
					activeClass="active"
					to="whyJoinUs"
					spy={true}
					smooth={true}
					className="cursor-pointer body-md"
					duration={600}>
					Why Join Us
				</Link>
				<Link
					activeClass="active"
					to="community"
					spy={true}
					smooth={true}
					className="cursor-pointer body-md"
					duration={600}>
					Community
				</Link>
				<Link
					activeClass="active"
					to="latestPosts"
					spy={true}
					smooth={true}
					className="cursor-pointer body-md"
					duration={600}>
					Latest posts
				</Link>
				<Link
					The
					TeamactiveClass="active"
					to="theTeam"
					spy={true}
					smooth={true}
					className="cursor-pointer body-md"
					duration={600}>
					The Team
				</Link>
				<Link
					activeClass="active"
					to="partners"
					spy={true}
					smooth={true}
					className="cursor-pointer body-md"
					duration={600}>
					Partners
				</Link>
			</nav>
			<div className="flex justify-end items-center gap-[1.8125rem] max-sm:hidden">
				<ButtonsAlertDialog variant="outline">Login</ButtonsAlertDialog>
				<ButtonsAlertDialog>Signup</ButtonsAlertDialog>
			</div>
			<HeaderDropdown className="sm:hidden" />
		</header>
	);
};

export default Header;
