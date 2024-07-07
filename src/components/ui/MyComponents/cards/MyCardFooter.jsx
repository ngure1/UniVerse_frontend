import React, { useState } from "react";
import { CardFooter } from "@/components/ui/shadcnComponents/card";
import { Button } from "../../shadcnComponents/button";
import {
	Send,
	MessageSquareMore,
	Bookmark,
	SendHorizonalIcon,
	VerifiedIcon,
} from "lucide-react";
import { Input } from "@/components/ui/shadcnComponents/input";
import { LikeSVG, UnLikeSVG } from "@/app/landing/SVGIcon";
import { usePostsCommentListQuery } from "@/redux/features/posts/postsApiSlice";
import {
	useLike,
	useBookmark,
	useUnlike,
	useUnbookmark,
	useComment,
} from "@/hooks/postHooks";
import AvatarProfile from "../profile/AvatarProfile";

const MyCardFooter = ({
	postId,
	isSaved,
	likeCount,
	bookmarkCount,
	isLiked,
	isPostDetails = false,
}) => {
	const [liked, setLiked] = useState(isLiked);

	const handleLike = useLike(postId);
	const handleUnlike = useUnlike(postId);

	const handleBookmark = useBookmark(postId);
	const handleUnbookmark = useUnbookmark(postId);

	const handleThumbsUp = () => {
		if (!liked) {
			handleLike();
		} else {
			handleUnlike();
		}
		setLiked(!liked);
	};
	// * comment
	//* show comment state
	const [showComment, setShowComment] = useState(false);
	function toggleComments() {
		setShowComment(!showComment);
	}
	//* comment text
	const [comment, setComment] = useState("");
	function handleCommentChange(e) {
		setComment(e.target.value);
	}
	// * comment submission
	const handleComment = useComment(postId, comment);
	function commentSubmit() {
		handleComment();
		setComment("");
	}

	return (
		<CardFooter className="flex flex-col w-full gap-1 relative">
			<div className="flex items-start self-stretch border-y-2">
				<Button
					className="flex items-center cursor-pointer"
					variant="ghost"
					onClick={handleThumbsUp}>
					{liked ? <LikeSVG /> : <UnLikeSVG />}
				</Button>
				<Button
					variant="ghost"
					onClick={toggleComments}>
					<MessageSquareMore />
				</Button>
				<Button variant="ghost">
					<Send />
				</Button>
				<Button
					onClick={!isSaved ? handleBookmark : handleUnbookmark}
					variant="ghost"
					className="absolute right-3">
					{isSaved ? (
						<Bookmark
							fill="#00B595"
							color="#00B595"
						/>
					) : (
						<Bookmark />
					)}
				</Button>
			</div>

			<div className="flex justify-between w-full">
				<p className="">
					{" "}
					{likeCount} {likeCount === 1 ? "Like" : "Likes"}
				</p>
				<p className="">
					{bookmarkCount}{" "}
					{bookmarkCount === 1 ? "Bookmark" : "Bookmarks"}
				</p>
			</div>
			{isPostDetails ? (
				<div className="w-full pt-3 flex flex-col gap-4">
					<Input
						type="text"
						value={comment}
						onChange={handleCommentChange}
						placeholder="Write your comment here "
						suffix={
							<SendHorizonalIcon
								className="hover:text-blue-700"
								onClick={commentSubmit}
							/>
						}
						className="rounded-[6.25rem] border border-[#11294D]"
					/>
					<CommentsComponent postId={postId} />
				</div>
			) : (
				showComment && (
					<div className="w-full pt-3 flex flex-col gap-4">
						<Input
							type="text"
							value={comment}
							onChange={handleCommentChange}
							placeholder="Write your comment here "
							suffix={
								<SendHorizonalIcon
									className="hover:text-blue-700"
									onClick={commentSubmit}
								/>
							}
							className="rounded-[6.25rem] border border-[#11294D]"
						/>
						<CommentsComponent postId={postId} />
					</div>
				)
			)}
		</CardFooter>
	);
};

export default MyCardFooter;

function CommentsComponent({ postId }) {
	const { data: commentsList, isLoading } = usePostsCommentListQuery({
		post: postId,
	});
	if (commentsList) {
		console.log(commentsList);
	}
	return (
		<div className="max-h-[20rem] flex flex-col gap-6 overflow-y-scroll">
			{commentsList?.results?.map((comment, index) => (
				<div
					className="flex gap-6 items-start"
					key={index}>
					<AvatarProfile
						pfpImage={comment.author.profile_picture}
						first_name={comment.author.user.first_name}
						last_name={comment.author.user.last_name}
						email={comment.author.user.email}
						className="w-[3.2rem] h-[3.2rem]"
					/>
					<div className="flex gap-1 flex-col w-full">
						<p className="muted text-sm flex gap-2">
							<span>
								{comment.author.user.first_name}{" "}
								{comment.author.user.last_name}{" "}
							</span>
							<VerifiedIcon
								fill="#00B595"
								color="#ffff"
								className="dark:filter dark:invert"
								size={20}
							/>
						</p>
						<p className="text-wrap ">{comment.text}</p>
					</div>
				</div>
			))}
		</div>
	);
}
