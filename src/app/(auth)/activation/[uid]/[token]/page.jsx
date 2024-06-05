"use client";
import { useRouter } from "next/navigation";
import { useUsersActivationMutation } from "@/redux/features/auth/authApiSlice";

import { useEffect } from "react";

export default function Page({ params }) {
	const router = useRouter();
	const [activate] = useUsersActivationMutation();

	useEffect(() => {
		console.log("useEffect called");
		const { uid, token } = params;

		activate({ uid, token })
			.unwrap()
			.then(() => {
				console.log("Activation successful");
				router.push("/login");
			})
			.catch(() => {
				console.error("Activation failed");
			});
	}, []);

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Activating your account...
				</h1>
			</div>
		</div>
	);
}
