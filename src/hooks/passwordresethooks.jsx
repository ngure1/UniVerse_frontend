import {
	PasswordResetSchema,
	ResetPasswordConfirmSchema,
} from "@/schema/passwordreset";
import { useResetPasswordMutation } from "@/redux/features/auth/authApiSlice";
import { useResetPasswordConfirmMutation } from "@/redux/features/auth/authApiSlice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

export const usePasswordReset = () => {
	const form = useForm({
		resolver: zodResolver(PasswordResetSchema),
		defaultValues: {
			email: "",
		},
	});

	const [resetPassword, { isLoading, error }] = useResetPasswordMutation();
	const handleSubmit = async (data) => {
		const { email } = data;

		try {
			const response = await resetPassword(email).unwrap();
			// toast msg
		} catch (err) {
			// catch error from the backend and display it on form
			if (err?.data?.email) {
				form.setError("email", {
					type: "manual",
					message: err.data.email[0],
				});
			} else {
				// toast msg
			}
		}
	};

	return {
		form,
		handleSubmit,
		isLoading,
		error,
	};
};

export const usePasswordResetConfirm = ({ uid, token }) => {
	const form = useForm({
		resolver: zodResolver(ResetPasswordConfirmSchema),
		defaultValues: {
			new_password: "",
			re_new_password: "",
		},
	});

	const [resetPasswordConfirm, { isLoading }] =
		useResetPasswordConfirmMutation();
	const router = useRouter();

	const handleSubmit = async (data) => {
		const { new_password, re_new_password } = data;

		try {
			await resetPasswordConfirm({
				uid,
				token,
				new_password,
				re_new_password,
			}).unwrap();
			// toast msg
			router.push("/login");
		} catch (err) {
			if (err?.data) {
				Object.keys(err.data).forEach((key) => {
					form.setError(key, {
						type: "manual",
						message: err.data[key][0],
					});
				});
			} else {
				// toast msg
			}
		}
	};

	return {
		form,
		handleSubmit,
		isLoading,
	};
};
