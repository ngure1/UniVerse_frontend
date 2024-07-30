import React from "react";
import NavBar from "../../components/ui/MyComponents/NavBar";
import Sidebar from "../../components/ui/MyComponents/SideBar";
import RequireAuth from "@/redux/features/auth/RequireAuth";

const Layout = ({ children }) => {
	return (
		// <RequireAuth>
		<div className="flex flex-col min-h-screen bg-[#F8F7F4] overflow-hidden dark:bg-gray-900">
			<NavBar className="fixed top-0 w-full bg-white z-50 p-4" />
			<div className="flex flex-1 pt-[7rem]">
				<Sidebar className="max-sm:hidden w-[20.5vw] fixed top-[6rem] bottom-0 left-0 dark:bg-gray-900 z-30" />
				<div className="flex-1 mt-4 sm:ml-[27.5vw] px-4 sm:px-8 overflow-x-hidden">
					{children}
				</div>
			</div>
		</div>
		// </RequireAuth>
	);
};

export default Layout;
