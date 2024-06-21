"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
	Home,
	CalendarFold,
	BriefcaseBusiness,
	Handshake,
	Newspaper,
	CodeXml,
	CirclePlus,
	CircleUserRound,
	LogOut,
} from "lucide-react";
import { Button } from "../shadcnComponents/button";
import { ResponsiveDialog } from "./ResponsiveDialog";
import PostForm from "@/components/forms/postForm";
import { useDialog } from "@/hooks/responsiveDialog";
import AvatarProfile from "./profile/AvatarProfile";
import { useProfile } from "@/hooks/profile";

const SideBar = ({ className }) => {
	const links = [
		{ Icon: Home, text: "Home", href: "/home" },
		{ Icon: CalendarFold, text: "Events", href: "/events" },
		{ Icon: BriefcaseBusiness, text: "Jobs", href: "/jobs" },
		{ Icon: Handshake, text: "Giving Back", href: "/support" },
		{ Icon: Newspaper, text: "News & Announcements", href: "/news" },
		{ Icon: CodeXml, text: "Department Stars", href: "/dpt-stars" },
		{ Icon: CircleUserRound, text: "Profile", href: "/profile" },
		{ Icon: LogOut, text: "Logout" },
	];
	const { data: profileData, isLoading, error } = useProfile();

	const lastTwoLinks = links.slice(-2);

	const topLinks = links.slice(0, -2).map((link, index) => (
		<Link
			key={index}
			href={link.href || "#"}
			className="flex items-center self-stretch gap-[1rem] py-[0.75rem] px-[0.5rem] active-sidebar">
			<link.Icon size={30} />
			<p className="body-md text-lg">{link.text}</p>
		</Link>
	));

	const bottomLinks = lastTwoLinks.map((link, index) => (
		<Link
			key={index}
			href={link.href || "#"}
			className="flex items-center self-stretch gap-[1rem] py-[0.75rem] px-[0.5rem] active-sidebar">
			<link.Icon size={30} />
			<p className="body-md text-lg">{link.text}</p>
		</Link>
	));

	const { isDialogOpen, handleOpenDialog, handleCloseDialog } =
		useDialog("post");
	return (
		<div
			className={`inline-flex flex-col pt-[1.25rem] pr-[0] pb-[0.75rem] pl-[1.25rem] justify-between items-start shrink-0 gap-[4rem] ${className}`}>
			<div className="space-y-4">
				{topLinks}
				{/* <Button
					variant="ghost"
					className="flex items-center self-stretch gap-[1rem] py-[0.75rem] px-[0.5rem]"
					onClick={handleOpenDialog}>
					<CirclePlus size={30} />
					<span className="body-md text-lg">New Post</span>
				</Button> */}
			</div>
			{/* <ResponsiveDialog
				title={"Create New Post"}
				className="w-[60rem]"
				isOpen={isDialogOpen}
				setIsOpen={handleCloseDialog}>
				<PostForm />
			</ResponsiveDialog> */}
			<div className="w-full">{bottomLinks}</div>
		</div>
	);
};

export default SideBar;
