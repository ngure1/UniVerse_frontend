"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/../public/images/jkanLogo3.png";
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
import NavbarDropdown from "./NavbarDropdown";
import { useLogoutMutation } from "@/redux/features/auth/authApiSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAuth } from "@/redux/features/auth/authSlice";

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
			className="rounded-[6.25rem]  w-[20rem] xl:w-[31.25rem] bg-[#F8F7F4]"
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
			className={`flex justify-between items-center w-full pt-[1.75rem] pr-[1.25rem] h-[6rem] border-b pb-[0.5rem] pl-[1.25rem] dark:bg-muted ${className}`}>
			<Image
				src={Logo}
				alt="Universe Logo"
				className="hidden sm:block cursor-pointer max-sm:w-[150px] sm:w-[175px] dark:filter dark:invert"
			/>
			<NavbarDropdown className="sm:hidden" />
			<SearchBar
				placeholder={`What's on your mind, ${profileData?.user.first_name}?`}
				onSearch={handleSearch}
			/>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<AvatarProfile
						className="w-[3rem] h-[3rem] hidden sm:block"
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
							iconSize={24}
							className={"w-full justify-start"}
						/>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};
export const Logout = ({ className, iconSize, size }) => {
	// * initialize router
	const router = useRouter();

	// * initialize dispatch
	const dispatch = useDispatch();
	30;

	// * logout functionality
	const [logout, { isLoading }] = useLogoutMutation();

	function handleLogout() {
		const toastId = toast.loading("Wait while logging you out...", {
			theme: "colored",
			autoClose: false,
			position: "top-center",
		});

		// * Update the toast on successful logout
		toast.update(toastId, {
			render: "Login successful! Redirecting you to the login page...",
			type: "success",
			isLoading: false,
			autoClose: 5000,
			position: "top-center",
		});

		dispatch(setAuth(false));
		logout()
			.unwrap()
			.then(() => {
				// * Update the toast on successful logout
				toast.update(toastId, {
					render: "Logout successful! Redirecting you to the login page...",
					type: "success",
					isLoading: false,
					autoClose: 5000,
					position: "top-center",
				});

				// * redirect to the login page
				router.push("/login");
			})
			.catch(() => {
				//* Update the toast on login failure
				toast.update(toastId, {
					render: "Failed to logout.",
					type: "error",
					isLoading: false,
					autoClose: 5000,
					position: "top-center",
				});
			});
	}
	return (
		<Button
			onClick={handleLogout}
			variant="ghost"
			size={size}
			className={`flex items-center self-stretch gap-[0.4rem] py-[0.75rem] px-[0rem] ${className}`}>
			<LogOut size={iconSize} />
			<p className=" body-md ">Logout</p>
		</Button>
	);
};

export default NavBar;
