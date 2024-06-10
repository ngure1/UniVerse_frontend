"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const RequireAuth = ({ children }) => {
	// * initialize router
	const router = useRouter();
	const { isAuthenticated } = useSelector((state) => state.auth);
	useEffect(() => {
		// need is loading so that in the case one is not authenticated we dont display the page for some time then redirect them
		if (!isAuthenticated) {
			router.push("/login");
		}
	});

	return <>{children} </>;
};

export default RequireAuth;
