import {
	useProfileMeQuery,
	useProfileFollowToggleMutation,
} from "@/redux/features/profiles/profileApiSlice";
import { toast } from "react-toastify";

export const useProfile = (userId) => {
	if (userId) {
		const { data, isLoading, error } = useProfileMeQuery(userId);
		return { data, isLoading, error };
	} else {
		const { data, isLoading, error } = useProfileMeQuery(null);
		return { data, isLoading, error };
	}
};

export const useFollowToggle = (id) => {
	const [followToggle, { isLoading, isError }] =
		useProfileFollowToggleMutation();
	const handleFollow = () => {
		followToggle({ followed_id: id })
			.unwrap()
			.then(() => {
				toast.success("Followed", {
					theme: "colored",
				});
			})
			.catch((err) => {
				toast.error("Failed to follow user", {
					theme: "colored",
				});
			});
	};
	return handleFollow;
};
