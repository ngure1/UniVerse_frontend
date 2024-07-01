import {
	useEventsLikesCreateMutation,
	useEventsUnlikeCreateMutation,
	useEventBookmarkCreateMutation,
	useEventUnbookmarkCreateMutation,
	useEventsCommentCreateMutation,
} from "@/redux/features/events/eventsApiSlice";
import { toast } from "react-toastify";

export const useLike = (event) => {
	const [like, { isLoading, error }] = useEventsLikesCreateMutation();
	const eventId = event;
	const handleLike = () => {
		like({ event: eventId })
			.unwrap()
			.then(() => {
				console.log("success");
				toast.success("Event liked successfully!");
			})
			.catch((err) => {
				console.error(err);
				toast.error("Failed to like the event.");
			});
	};
	return handleLike;
};

export const useUnlike = (event) => {
	const [unlike, { isLoading, error }] = useEventsUnlikeCreateMutation();
	const eventId = event;
	const handleUnlike = () => {
		unlike({ event: eventId })
			.unwrap()
			.then(() => {
				console.log("success");
				toast.success("Event unliked successfully!");
			})
			.catch((err) => {
				console.error(err);
				toast.error("Failed to unlike the event.");
			});
	};
	return handleUnlike;
};
export const useBookmark = (event) => {
	const [bookmark, { isLoading, error }] = useEventBookmarkCreateMutation();
	const eventId = event;
	const handleBookmark = () => {
		bookmark({ event: eventId })
			.unwrap()
			.then(() => {
				toast.success("Event bookmarked successfully!");
			})
			.catch((err) => {
				toast.error("Failed to bookmark the event.");
			});
	};
	return handleBookmark;
};

export const useUnbookmark = (event) => {
	const [unbookmark, { isLoading, error }] =
		useEventUnbookmarkCreateMutation();
	const eventId = event;
	const handleUnbookmark = () => {
		unbookmark({ event: eventId })
			.unwrap()
			.then(() => {
				toast.success("Event unbookmarked successfully!");
			})
			.catch((err) => {
				toast.error("Failed to unbookmark the event.");
			});
	};
	return handleUnbookmark;
};

export const useComment = (eventId, text) => {
	const [comment] = useEventsCommentCreateMutation();
	const handleComment = () => {
		comment({ event: eventId, text: text })
			.unwrap()
			.then(() => {
				toast.success("Comment added successfully!");
			})
			.catch((err) => {
				toast.error("Failed to add your comment.");
			});
	};
	return handleComment;
};
