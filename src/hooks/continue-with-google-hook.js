import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { setAuth } from "@/redux/features/auth/authSlice";
import { useGoogleAuthenticateMutation } from "@/redux/features/auth/authApiSlice";

export default function useGoogleAuth() {
	const dispatch = useDispatch();
	const router = useRouter();
	const searchParams = useSearchParams();
	const [googleAuthenticate] = useGoogleAuthenticateMutation();
	const effectRan = useRef(false);

	useEffect(() => {
		const state = searchParams.get("state");
		const code = searchParams.get("code");

		if (state && code && !effectRan.current) {
			googleAuthenticate({ state, code })
				.unwrap()
				.then(() => {
					dispatch(setAuth());
					// toast msg
					router.push("/home");
				})
				.catch(() => {
					// toast msg
					router.push("/login");
				});
		}

		return () => {
			effectRan.current = true;
		};
	}, [googleAuthenticate]);
}
