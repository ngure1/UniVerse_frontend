"use client";
import useGoogleAuth from "@/hooks/continue-with-google-hook";

function Page() {
	const loading = useGoogleAuth();

	if (loading) {
		return (
			<div>
				<h1>Signing in with Google...</h1>
			</div>
		);
	}

	return (
		<div>
			<h1>Redirecting...</h1>
		</div>
	);
}

export default Page;
