"use client";
import { useRouter } from "next/navigation";
import { useUsersActivationMutation } from "@/redux/features/auth/authApiSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { LoaderCircleIcon } from "lucide-react";

export default function Page({ params }) {
	const router = useRouter();
	const [activate, { isLoading, error }] = useUsersActivationMutation();

	useEffect(() => {
		const { uid, token } = params;

		// Show a loading toast when the activation process starts
		const toastId = toast.loading("Activating your account...", {
			position: "top-center",
			autoClose: false,
		});

		activate({ uid, token })
			.unwrap()
			.then(() => {
				// Update the toast to show a success message
				toast.update(toastId, {
					render: "Account activated successfully! Redirecting to login...",
					type: "success",
					isLoading: false,
					autoClose: 5000,
					position: "top-center",
				});
				router.push("/login");
			})
			.catch(() => {
				// Update the toast to show an error message
				toast.update(toastId, {
					render: "Activation failed. Please try again or contact support.",
					type: "error",
					isLoading: false,
					autoClose: 5000,
					position: "top-center",
				});
			});
	}, [params, activate, router]);

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-100">
			<div className="text-center p-6 shadow-lg rounded-lg bg-white">
				<div className="flex justify-center">
					<LoaderCircleIcon
						height={40}
						className="animate-spin mb-4"
					/>
				</div>

				<h1 className="text-xl font-semibold text-gray-900">
					Activating your account...
				</h1>
				<p className="text-gray-600 mt-2">
					Please wait a moment. Do not close this page.
				</p>
			</div>
		</div>
	);
}
