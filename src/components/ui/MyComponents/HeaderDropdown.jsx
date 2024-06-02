import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ButtonsAlertDialog } from "./ButtonsAlertDialog";
import { MenuIcon } from "lucide-react";
import { Link } from "react-scroll";

const HeaderDropdown = ({ className }) => {
	return (
		<div className={`${className}`}>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<div>
						<MenuIcon />
					</div>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>
						<Link
							activeClass="active"
							to="Home"
							spy={true}
							smooth={true}
							className="cursor-pointer body-md"
							duration={600}>
							Home
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link
							activeClass="active"
							to="whyJoinUs"
							spy={true}
							smooth={true}
							className="cursor-pointer body-md"
							duration={600}>
							Why Join Us
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link
							activeClass="active"
							to="community"
							spy={true}
							smooth={true}
							className="cursor-pointer body-md"
							duration={600}>
							Community
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link
							activeClass="active"
							to="latestPosts"
							spy={true}
							smooth={true}
							className="cursor-pointer body-md"
							duration={600}>
							Latest posts
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link
							activeClass="active"
							to="theTeam"
							spy={true}
							smooth={true}
							className="cursor-pointer body-md"
							duration={600}>
							The Team
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link
							activeClass="active"
							to="partners"
							spy={true}
							smooth={true}
							className="cursor-pointer body-md"
							duration={600}>
							Partners
						</Link>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuLabel>Actions</DropdownMenuLabel>
					<DropdownMenuItem>
						<ButtonsAlertDialog>Login</ButtonsAlertDialog>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<ButtonsAlertDialog>
							<button>SignUp</button>
						</ButtonsAlertDialog>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default HeaderDropdown;
