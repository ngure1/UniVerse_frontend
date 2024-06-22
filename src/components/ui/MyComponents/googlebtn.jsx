import { Button } from "../shadcnComponents/button";
import GoogleLogo from "../../../../public/images/googleLogo.png";
import Image from "next/image";
import { ContinueWithGoogle } from "../../../../utils/continue-with-google";

const GoogleBtn = () => {
	return (
		<Button
			variant="outline"
			className="w-full gap-[1.625rem] uppercase"
			onClick={ContinueWithGoogle}>
			<Image
				src={GoogleLogo}
				alt="Google Logo"
				className="w-[1.875rem] h-[1.875rem]"
			/>
			Continue with Google
		</Button>
	);
};

export default GoogleBtn;
