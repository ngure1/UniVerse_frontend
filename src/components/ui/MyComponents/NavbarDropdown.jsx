import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/shadcnComponents/dropdown-menu";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const NavbarDropdown = ({ className }) => {
	const menuLinks = [
		{
			to: "/home",
			text: "Home",
		},
		{
			to: "/events",
			text: "Events",
		},
		{
			to: "/jobs",
			text: "Jobs",
		},
		{
			to: "/news",
			text: "News & Announcements",
		},
		{
			to: "/profiles",
			text: "Profiles",
		},
		{
			to: "/userprofile",
			text: "User Profile",
		},
		{
			to: "/logout",
			text: "Logout",
		},
	];
	return (
		<div className={`${className}`}>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<div>
						<MenuIcon />
					</div>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					{menuLinks.map((link, index) => {
						return (
							<DropdownMenuItem key={index}>
								<Link
									href={link.to}
									spy={true}
									smooth={true}
									className="cursor-pointer body-md"
									duration={600}>
									{link.text}
								</Link>
							</DropdownMenuItem>
						);
					})}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default NavbarDropdown;
