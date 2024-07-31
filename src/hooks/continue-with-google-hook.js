import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { setAuth } from "@/redux/features/auth/authSlice";
import { useGoogleAuthenticateMutation } from "@/redux/features/auth/authApiSlice";

export default function useGoogleAuth() {
	const dispatch = useDispatch();
	const router = useRouter();
	const searchParams = useSearchParams();
	const [googleAuthenticate] = useGoogleAuthenticateMutation();
	const [loading, setLoading] = useState(true);
	const effectRan = useRef(false);

	useEffect(() => {
		if (effectRan.current) return;

		const state = searchParams.get("state");
		const code = searchParams.get("code");

		if (state && code) {
			googleAuthenticate({ state, code })
				.unwrap()
				.then(() => {
					dispatch(setAuth());
					router.push("/home");
				})
				.catch((error) => {
					console.error("Authentication error:", error);
					router.push("/login");
				})
				.finally(() => {
					setLoading(false);
				});

			effectRan.current = true;
		} else {
			setLoading(false);
		}
	}, [googleAuthenticate, searchParams, dispatch, router]);

	return loading;
}
