import React from "react";
import NavBar from "../../components/ui/MyComponents/NavBar";
import Sidebar from "../../components/ui/MyComponents/SideBar";
import RequireAuth from "@/redux/features/auth/RequireAuth";

const layout = ({ children }) => {
	return (
		// <RequireAuth>
		<div className="flex min-h-screen bg-gray-200 dark:bg-gray-900">
			<NavBar className="fixed top-0 w-full bg-muted z-30" />
			<div className="flex-1 ml-[23.5vw] mt-[7rem]">
				<Sidebar className="w-[23.5vw] fixed top-[7rem] left-2 bottom-2 bg-white dark:bg-gray-900 z-30 rounded-sm" />
				<div className="pl-[4rem]"> {children}</div>
			</div>
		</div>
		// </RequireAuth>
	);
};

export default layout;
