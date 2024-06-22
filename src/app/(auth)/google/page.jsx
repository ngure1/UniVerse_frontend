"use client";
import useGoogleAuth from "@/hooks/continue-with-google-hook";

function Page() {
	useGoogleAuth();

	return (
		<div>
			<h1>Signing in with google...</h1>
		</div>
	);
}

export default Page;
