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
		{ Icon: Handshake, text: "Giving Back", href: "/support" },
		{ Icon: Newspaper, text: "News & Announcements", href: "/news" },
		{ Icon: Users, text: "Profiles", href: "/profiles" },
		{ Icon: CircleUserRound, text: "User Profile", href: "/profile" },
		// { Icon: LogOut, text: "Logout" },
	];

	const lastTwoLinks = links.slice(-1);

	const topLinks = links.slice(0, -1).map((link, index) => (
		<Link
			key={index}
			href={link.href || "#"}
			className={`flex items-center self-stretch gap-[1rem] py-[0.75rem] w-full px-[0.5rem] hover:text-accent-foreground rounded-sm ${pathname.startsWith(link.href) ? "border border-ring" : ""}`}>
			<link.Icon size={30} />
			<p className="body-md text-lg">{link.text}</p>
		</Link>
	));

	const bottomLinks = lastTwoLinks.map((link, index) => (
		<Link
			key={index}
			href={link.href || "#"}
			className={`flex items-center self-stretch gap-[1rem] py-[0.75rem] w-full px-[0.5rem] hover:text-accent-foreground rounded-sm ${pathname.startsWith(link.href) ? "border border-ring" : ""}`}>
			<link.Icon size={30} />
			<p className="body-md text-lg">{link.text}</p>
		</Link>
	));

	return (
		<div
			className={`inline-flex flex-col pt-[1.25rem] pr-[0] pb-[0.75rem] pl-[1.25rem] justify-between items-start shrink-0 gap-[4rem] ${className}`}>
			<div className="space-y-4 w-full">{topLinks}</div>
			<div className="w-full">
				{bottomLinks}
				<Logout
					iconSize={30}
					className={"w-full justify-start"}
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
			<LogOut size={iconSize} />
			<p className="body-md text-lg">Logout</p>
		</Button>
	);
};
