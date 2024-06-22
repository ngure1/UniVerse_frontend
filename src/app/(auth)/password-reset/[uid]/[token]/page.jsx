import PasswordResetConfirmForm from "@/components/forms/password-reset-confirm-form";

function page({ params }) {
	const { uid, token } = params;
	return (
		<PasswordResetConfirmForm
			uid={uid}
			token={token}
		/>
	);
}

export default page;
