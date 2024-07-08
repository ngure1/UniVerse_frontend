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
export const useProfilePosts = (id) => {
	const myPosts = usePostsMe();
	const userPost = usePostsUserListQuery({ user_id: id });

	const [userPosts, setUserPosts] = useState({
		data: null,
		isLoading: true,
		error: null,
	});

	useEffect(() => {
		if (id) {
			setUserPosts({
				data: userPost.data,
				isLoading: userPost.isLoading,
				error: userPost.error,
			});
		} else {
			setUserPosts({
				data: myPosts.data,
				isLoading: myPosts.isLoading,
				error: myPosts.error,
			});
		}
	}, [
		id,
		userPost.data,
		userPost.isLoading,
		userPost.error,
		myPosts.data,
		myPosts.isLoading,
		myPosts.error,
	]);

	return userPosts;
};
