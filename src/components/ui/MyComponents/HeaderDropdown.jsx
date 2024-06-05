import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/shadcnComponents/dropdown-menu";
import { ButtonsAlertDialog } from "./ButtonsAlertDialog";
import { MenuIcon } from "lucide-react";
import { Link } from "react-scroll";

const HeaderDropdown = ({ className }) => {
	const menuLinks = [
		{
			to: "Home",
			text: "Home",
		},
		{
			to: "whyJoinUs",
			text: "Why Join Us",
		},
		{
			to: "community",
			text: "Community",
		},
		{
			to: "latestPosts",
			text: "Latest Posts",
		},
		{
			to: "theTeam",
			text: "The Team",
		},
		{
			to: "partners",
			text: "Partners",
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
									to={link.to}
									spy={true}
									smooth={true}
									className="cursor-pointer body-md"
									duration={600}>
									{link.text}
								</Link>
							</DropdownMenuItem>
						);
					})}
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<ButtonsAlertDialog variant="outline">
							Login
						</ButtonsAlertDialog>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<ButtonsAlertDialog>Signup</ButtonsAlertDialog>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default HeaderDropdown;
