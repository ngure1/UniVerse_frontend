"use client";

export const ContinueWithGoogle = async () => {
	try {
		const url =
			"http://127.0.0.1:8000/auth/o/google-oauth2/?redirect_uri=http://127.0.0.1:3000/google";
		const res = await fetch(url, {
			method: "GET",
			headers: {
				Accept: "application/json",
			},
			credentials: "include",
		});

		const data = await res.json();
		console.log(data);

		if (res.status === 200 && typeof window !== "undefined") {
			window.location.replace(data.authorization_url);
		} else {
			// Toast message for error
			console.log("Error: Unable to get authorization URL");
		}
	} catch (error) {
		// Toast message for error
		console.error("Error:", error);
	}
};

// const GoogleButton = () => (
//     <Button onClick={ContinueWithGoogle}>Continue with Google</Button>
// )

// export default GoogleButton
