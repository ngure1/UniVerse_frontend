import React from "react";
import NavBar from "../../components/ui/MyComponents/NavBar";
import Sidebar from "../../components/ui/MyComponents/SideBar";

const layout = ({ children }) => {
	return (
		<div className="relative w-full border h-screen bg-gray-200">
			<NavBar className="fixed top-0 bg-muted" />
			<Sidebar className="fixed top-[6rem] bottom-0 bg-muted" />
			<div className="mt-[8rem] ml-[17rem]">{children}</div>
		</div>
	);
};

export default layout;
