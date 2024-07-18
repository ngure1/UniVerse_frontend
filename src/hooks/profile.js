import { useEffect, useState } from "react";
import {
	useProfileMeQuery,
	useProfileFollowToggleMutation,
	usePostsMeQuery,
	usePostsBookmarksMeQuery,
} from "@/redux/features/profiles/profileApiSlice";
import { toast } from "react-toastify";
import { usePostsUserListQuery } from "@/redux/features/posts/postsApiSlice";

export const useProfile = (userId) => {
	const { data, isLoading, error } = useProfileMeQuery(userId || null);
	return { data, isLoading, error };
};

export const useFollowToggle = (id, following) => {
	const [followToggle, { isLoading, isError }] =
		useProfileFollowToggleMutation();
	const handleFollow = () => {
		followToggle({ followed_id: id })
			.unwrap()
			.then(() => {
				toast.success(!following ? "Followed" : "Unfollowed user", {
					theme: "colored",
				});
			})
			.catch(() => {
				toast.error("Failed to follow user", {
					theme: "colored",
				});
			});
	};
	return handleFollow;
};

export const usePostsMe = () => {
	const { data, isLoading, error } = usePostsMeQuery(null);
	return { data, isLoading, error };
};

export const useBookmarksMe = () => {
	const { data, isLoading, error } = usePostsBookmarksMeQuery(null);
	return { data, isLoading, error };
};

// Custom hook to abstract the conditional fetching logic
export const useProfilePosts = ({ id, page }) => {
	const myPosts = usePostsMeQuery({ page });
	const userPosts = usePostsUserListQuery({ user_id: id, page });

	const [userPostsState, setUserPostsState] = useState({
		data: null,
		isLoading: true,
		error: null,
		isFetching: false,
	});

	useEffect(() => {
		if (id) {
			setUserPostsState({
				data: userPosts.data,
				isLoading: userPosts.isLoading,
				error: userPosts.error,
				isFetching: userPosts.isFetching,
			});
		} else {
			setUserPostsState({
				data: myPosts.data,
				isLoading: myPosts.isLoading,
				error: myPosts.error,
				isFetching: myPosts.isFetching,
			});
		}
	}, [
		id,
		page,
		userPosts.data,
		userPosts.isLoading,
		userPosts.error,
		userPosts.isFetching,
		myPosts.data,
		myPosts.isLoading,
		myPosts.error,
		myPosts.isFetching,
	]);

	return userPostsState;
};
