"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/../public/images/logo.png";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/shadcnComponents/input";
import AvatarProfile from "./profile/AvatarProfile";
import { useProfile } from "@/hooks/profile";

const SearchBar = ({ placeholder, onSearch }) => {
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
			<AvatarProfile
				className="w-[3rem] h-[3rem]"
				pfpImage={profileData?.profile_picture}
				first_name={profileData?.user.first_name}
				last_name={profileData?.user.last_name}
			/>
		</div>
	);
};

export default NavBar;
