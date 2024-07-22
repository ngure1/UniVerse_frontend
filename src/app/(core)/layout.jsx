import React from "react";
import NavBar from "../../components/ui/MyComponents/NavBar";
import Sidebar from "../../components/ui/MyComponents/SideBar";
import RequireAuth from "@/redux/features/auth/RequireAuth";

const Layout = ({ children }) => {
	return (
		// <RequireAuth>
		<div className="flex flex-col min-h-screen bg-gray-200 overflow-hidden dark:bg-gray-900">
			<NavBar className="fixed top-0 w-full bg-muted z-50 p-4" />
			<div className="flex flex-1 pt-[7rem]">
				<Sidebar className="hidden sm:block xl:flex w-[23.5vw] fixed top-[7rem] left-2 bottom-2 bg-white dark:bg-gray-900 z-30 rounded-[0.5rem]" />
				<div className="flex-1 mt-4 sm:ml-[23.5vw] px-4 sm:px-8 overflow-x-hidden">
					{children}
				</div>
			</div>
		</div>
		// </RequireAuth>
	);
};

export default Layout;
