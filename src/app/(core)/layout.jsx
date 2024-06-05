import React from "react";
import NavBar from "./home/NavBar";
import Sidebar from "./home/SideBar";
import Post from "./home/Post";

const layout = ({ children }) => {
	return (
		<div>
			{/* <NavBar/> */}
			<Sidebar />
			{/* <Post/> */}

			{/* {children} */}
		</div>
	);
};

export default layout;
