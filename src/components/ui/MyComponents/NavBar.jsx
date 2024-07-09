"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/../public/images/logo.png";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/shadcnComponents/input";
import AvatarProfile from "./profile/AvatarProfile";
import { useProfile } from "@/hooks/profile";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/shadcnComponents/dropdown-menu";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { CircleUserRound, LogOut } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../shadcnComponents/button";
import { Logout } from "./SideBar";

function ModeToggle() {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<Button
			size="xsm"
			variant="ghost"
			onClick={toggleTheme}
			className="inline-flex justify-start text-base font-normal items-center gap-2 p-0 w-full">
			{theme === "dark" ? (
				<SunIcon className="w-[1.2rem] h-[1.2rem]" />
			) : (
				<MoonIcon className="w-[1.2rem] h-[1.2rem]" />
			)}
			{theme === "dark" ? "Light" : "Dark"}
		</Button>
	);
}

export const SearchBar = ({ placeholder, onSearch }) => {
	const [query, setQuery] = useState("");

	const handleInputChange = (event) => {
		setQuery(event.target.value);
		onSearch(event.target.value);
	};

	return (
		<Input
			type="text"
			value={query}
			onChange={handleInputChange}
			placeholder={placeholder}
			suffix={<Search />}
			className="w-[31.25rem] rounded-[6.25rem] border border-solid border-[#11294D]"
		/>
	);
};

const NavBar = ({ className }) => {
	const handleSearch = (query) => {
		console.log("Search query:", query);
	};

	const { data: profileData, isLoading, error } = useProfile();

	return (
		<div
			className={`flex justify-between items-center w-full pt-[1.75rem] pr-[1.25rem] h-[6rem] pb-[0.5rem] pl-[1.25rem] ${className}`}>
			<Image
				src={Logo}
				alt="Universe Logo"
				className="cursor-pointer max-sm:w-[150px] sm:w-[250px] dark:filter dark:invert"
			/>
			<SearchBar
				placeholder={`What's on your mind, ${profileData?.user.first_name}?`}
				onSearch={handleSearch}
			/>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<AvatarProfile
						className="w-[3rem] h-[3rem]"
						pfpImage={profileData?.profile_picture}
						first_name={profileData?.user.first_name}
						last_name={profileData?.user.last_name}
						email={profileData?.user.email}
					/>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56">
					<DropdownMenuItem>
						<Link
							href="/userprofile"
							className="flex gap-2 justify-center items-center">
							<CircleUserRound size={20} />
							View Profile
						</Link>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem as="button">
						<ModeToggle />
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<Logout
							iconSize={20}
							size={"xsm"}
							className={"p-0 gap-2"}
						/>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default NavBar;
