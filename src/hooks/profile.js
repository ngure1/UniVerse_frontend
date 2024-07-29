import { useEffect, useState } from "react";
import {
	useProfileMeQuery,
	useProfileFollowToggleMutation,
	usePostsMeQuery,
	usePostsBookmarksMeQuery,
	usePostsBookmarksUserQuery,
} from "@/redux/features/profiles/profileApiSlice";
import { toast } from "react-toastify";
import { usePostsUserListQuery } from "@/redux/features/posts/postsApiSlice";
import {
	useEventsMeQuery,
	useEventsUserListQuery,
} from "@/redux/features/events/eventsApiSlice";

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

// Custom hook to abstract the conditional fetching logic for bookmarked posts
export const useBookmarkedPosts = ({ id, page }) => {
	const myBookmarkedPosts = usePostsBookmarksMeQuery({ page });
	const userBookmarkedPosts = usePostsBookmarksUserQuery({
		user_id: id,
		page,
	});

	const [bookmarkedPostsState, setBookmarkedPostsState] = useState({
		data: null,
		isLoading: true,
		error: null,
		isFetching: false,
	});

	useEffect(() => {
		if (id) {
			setBookmarkedPostsState({
				data: userBookmarkedPosts.data,
				isLoading: userBookmarkedPosts.isLoading,
				error: userBookmarkedPosts.error,
				isFetching: userBookmarkedPosts.isFetching,
			});
		} else {
			setBookmarkedPostsState({
				data: myBookmarkedPosts.data,
				isLoading: myBookmarkedPosts.isLoading,
				error: myBookmarkedPosts.error,
				isFetching: myBookmarkedPosts.isFetching,
			});
		}
	}, [
		id,
		page,
		userBookmarkedPosts.data,
		userBookmarkedPosts.isLoading,
		userBookmarkedPosts.error,
		userBookmarkedPosts.isFetching,
		myBookmarkedPosts.data,
		myBookmarkedPosts.isLoading,
		myBookmarkedPosts.error,
		myBookmarkedPosts.isFetching,
	]);

	return bookmarkedPostsState;
};

// Custom hook to abstract the conditional fetching logic for events
export const useEvents = ({ id, page }) => {
	const myEvents = useEventsMeQuery({ page });
	const userEvents = useEventsUserListQuery({ user_id: id, page });

	const [events, setEvents] = useState({
		data: null,
		isLoading: true,
		error: null,
		isFetching: false,
	});

	useEffect(() => {
		if (id) {
			setEvents({
				data: userEvents.data,
				isLoading: userEvents.isLoading,
				error: userEvents.error,
				isFetching: userEvents.isFetching,
			});
		} else {
			setEvents({
				data: myEvents.data,
				isLoading: myEvents.isLoading,
				error: myEvents.error,
				isFetching: myEvents.isFetching,
			});
		}
	}, [
		id,
		page,
		myEvents.data,
		myEvents.isLoading,
		myEvents.error,
		myEvents.isFetching,
		userEvents.data,
		userEvents.isLoading,
		userEvents.error,
		userEvents.isFetching,
	]);

	return events;
};
