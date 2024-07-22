"use client";
import React from "react";
import Link from "next/link";
import {
	Home,
	CalendarFold,
	BriefcaseBusiness,
	Handshake,
	Newspaper,
	Users,
	CircleUserRound,
	LogOut,
} from "lucide-react";
import { Button } from "../shadcnComponents/button";
import { useLogoutMutation } from "@/redux/features/auth/authApiSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAuth } from "@/redux/features/auth/authSlice";
import { usePathname } from "next/navigation";

const SideBar = ({ className }) => {
	const pathname = usePathname();
	const links = [
		{ Icon: Home, text: "Home", href: "/home" },
		{ Icon: CalendarFold, text: "Events", href: "/events" },
		{ Icon: BriefcaseBusiness, text: "Jobs", href: "/jobs" },
		{ Icon: Handshake, text: "Support", href: "/support" },
		{ Icon: Newspaper, text: "News", href: "/news" },
		{ Icon: Users, text: "Profiles", href: "/profiles" },
		{ Icon: CircleUserRound, text: "User Profile", href: "/userprofile" },
		// { Icon: LogOut, text: "Logout" },
	];

	const lastTwoLinks = links.slice(-1);

	const topLinks = links.slice(0, -1).map((link, index) => (
		<Link
			key={index}
			href={link.href || "#"}
			className={`flex items-center self-stretch gap-[1rem] py-[0.75rem] w-full px-[0.5rem] hover:text-accent-foreground rounded-sm ${pathname.startsWith(link.href) ? "border border-ring" : ""} relative`}>
			<link.Icon
				size={30}
				className="sm:w-[1.25rem] sm:h-[1.25rem]  xl:w-[2rem] xl:h-[2rem]"
			/>
			<p className="xl:body-text text-sm text-ellipsis overflow-hidden truncate">
				{link.text}
			</p>
		</Link>
	));

	const bottomLinks = lastTwoLinks.map((link, index) => (
		<Link
			key={index}
			href={link.href || "#"}
			className={`flex items-center self-stretch gap-[1rem] py-[0.75rem] w-full px-[0.5rem] hover:text-accent-foreground rounded-sm ${pathname.startsWith(link.href) ? "border border-ring" : ""}`}>
			<link.Icon
				size={30}
				className="sm:w-[1.25rem] sm:h-[1.25rem] xl:w-[2rem] xl:h-[2rem]"
			/>
			<p className="xl:body-text text-sm truncate">{link.text}</p>
		</Link>
	));

	return (
		<div
			className={`inline-flex flex-col pt-[1.25rem] pr-[0] pb-[0.75rem] pl-[1.25rem] justify-between items-start shrink-0 gap-[4rem] ${className}`}>
			<div className="space-y-[0.5rem] xl:space-y-5 w-full flex-grow mt-4">
				{topLinks}
			</div>
			<div className="space-y-1 xl:space-y-4 w-full flex-col mt-auto">
				{bottomLinks}
				<Logout
					iconSize={30}
					className={"w-full justify-start [1.25rem]"}
				/>
			</div>
		</div>
	);
};

export default SideBar;

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
			className={`flex items-center self-stretch gap-[1rem] py-[0.75rem] px-[0.5rem] ${className}`}>
			<LogOut
				size={iconSize}
				className="sm:w-[1.25rem] sm:h-[1.25rem] xl:w-[2rem] xl:h-[2rem]"
			/>
			<p className="xl:body-text text-sm body-md ">Logout</p>
		</Button>
	);
};
