import React from "react";
import { Button } from "../shadcnComponents/button";
import { useDialog } from "@/hooks/responsiveDialog";
import { usePostDeleteMutation } from "@/redux/features/posts/postsApiSlice";
import { toast } from "react-toastify";

const ConfirmDelete = (post_id) => {
	const { handleCloseDialog } = useDialog();
	const [deletePost] = usePostDeleteMutation();
	const handleDelete = () => {
		deletePost(post_id)
			.then(() => {
				toast.success("Post deleted successfully", {
					theme: "colored",
				});
			})
			.catch((err) => {
				toast.error("Failed to delete post");
			});
		handleCloseDialog();
	};

	return (
		<div className="gap-3 flex flex-col">
			<p>
				This action cannot be undone. This will permanently delete your
				post.
			</p>
			<div className="gap-4 flex">
				<Button
					variant="outline"
					onClick={handleCloseDialog}>
					Cancel
				</Button>
				<Button
					variant="destructive"
					onClick={handleDelete}>
					Continue
				</Button>
			</div>
		</div>
	);
};

export default ConfirmDelete;
