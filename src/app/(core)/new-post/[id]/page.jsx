import React from "react";
import PostForm from "@/components/forms/postForm";
import { Card } from "@/components/ui/shadcnComponents/card";

const page = ({ params }) => {
	const { id } = params;
	return (
		<Card className="min-h-screen p-5">
			<PostForm
				article
				id={id}
			/>
		</Card>
	);
};

export default page;
