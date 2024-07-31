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
	Compass,
	Cog,
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
			className={`flex items-center justify-start gap-[1rem] py-[0.75rem] text-[#F8F7F4] w-[70%] pl-[18%] hover:pl-6 transition-all duration-300 rounded-sm ${pathname.startsWith(link.href) ? "bg-[#d91413] text-[#F8F7F4] transition-all duration-300" : ""} relative`}>
			<link.Icon
				size={30}
				className="sm:w-[1.25rem] sm:h-[1.25rem]  xl:w-[1.4rem] xl:h-[1.4rem]"
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
			className={`flex items-center justify-start gap-[1rem] py-[0.75rem] w-[70%] pl-[18%] hover:pl-6 text-[#F8F7F4] transition-all duration-300 rounded-sm ${pathname.startsWith(link.href) ? "bg-[#d91413] text-[#F8F7F4]  transition-all duration-300" : ""} relative`}>
			<link.Icon
				size={30}
				className="sm:w-[1.25rem] sm:h-[1.25rem]  xl:w-[1.8rem] xl:h-[1.8rem]"
			/>
			<p className="xl:body-text text-sm text-ellipsis overflow-hidden truncate">
				{link.text}
			</p>
		</Link>
	));

	return (
		<div
			className={` flex flex-col justify-around px-5 bg-[#96cb49] ${className}`}>
			{/* Top links */}
			<div className="w-full pt-6 flex flex-col gap-3">
				<div className="flex gap-2 items-center">
					<span className="text-[#F8F7F4]">Explore</span>
					<Compass
						size={18}
						className="text-[#F8F7F4]"
					/>
				</div>
				<div className="flex flex-col w-full justify-center items-center gap-4">
					{topLinks}
				</div>
			</div>

			{/* Bottom links */}
			<div className="space-y-1 xl:space-y-4 w-full flex-col">
				<div className="flex gap-2 items-center text-[#F8F7F4]">
					<span className="">Account</span>
					<Cog
						size={18}
						className="text-[#F8F7F4]"
					/>
				</div>
				<div className="w-full flex flex-col items-center justify-center gap-3">
					{bottomLinks}
					{/* <Logout
						iconSize={30}
						className={
							"justify-start gap-[1rem] py-6 w-[70%] pl-[10%] hover:bg-red-500 hover:text-white transition-all duration-300"
						}
					/> */}
				</div>
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
			className={`flex items-center gap-[1rem]${className}`}>
			<LogOut
				size={iconSize}
				className="sm:w-[1.25rem] sm:h-[1.25rem] xl:w-[1.8rem] xl:h-[1.8rem]"
			/>
			<p className="xl:body-text text-sm body-md">Logout</p>
		</Button>
	);
};
