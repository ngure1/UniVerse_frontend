"use client";
import React from "react";
import { Card } from "@/components/ui/shadcnComponents/card";
import PostForm from "@/components/forms/postForm";
import { ImageIcon, CalendarFold, NotepadText } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/shadcnComponents/dialog";
import EventForm from "@/components/forms/eventForm";
import { useProfile } from "@/hooks/profile";
import { Button } from "@/components/ui/shadcnComponents/button";
import AvatarProfile from "@/components/ui/MyComponents/profile/AvatarProfile";
import Link from "next/link";
import PostCard from "@/components/ui/MyComponents/cards/PostCard";
import PostSkeleton from "@/components/ui/MyComponents/cards/skeletons/Skeleton";
import { useNewsListQuery } from "@/redux/features/posts/postsApiSlice";
import { formatCreatedAt } from "@/lib/utils";

const News = () => {
	const { data: profileData } = useProfile();
	const { data: newsData, isLoading, error } = useNewsListQuery();

	console.log(newsData);
	// console.log(profileData);

	return (
		<div>
			{profileData?.isAdmin && (
				<Card className="flex xl:w-[58%] w-full xl:min-w-[33.25rem] py-[0.6rem] flex-col items-start rounded-[0.5rem] bg-white dark:bg-muted top-[7rem] mb-3">
					<div className="flex w-full m-2 ">
						<AvatarProfile
							className="w-[3rem] h-[3rem]"
							pfpImage={profileData?.profile_picture}
							first_name={profileData?.user.first_name}
							last_name={profileData?.user.last_name}
							email={profileData?.user.email}
						/>

						<Dialog className="">
							<DialogTrigger asChild>
								<Button
									variant="outline"
									className="w-full h-[5vh] rounded-[20px] mx-[1rem]">
									Create New Post
								</Button>
							</DialogTrigger>
							<DialogContent className="sm-max w-md">
								<DialogTitle>Create New Post</DialogTitle>
								<PostForm article />
							</DialogContent>
						</Dialog>
					</div>
					<div className="flex justify-evenly items-start self-stretch">
						<Dialog className="">
							<DialogTrigger asChild>
								<Button
									variant="ghost"
									className="gap-1">
									<ImageIcon color="#4392F1" />
									Media
								</Button>
							</DialogTrigger>
							<DialogContent className="sm-max w-md">
								<DialogTitle>Media</DialogTitle>
								<PostForm />
							</DialogContent>
						</Dialog>

						<Dialog className="">
							<DialogTrigger asChild>
								<Button
									variant="ghost"
									className="gap-1">
									<CalendarFold color="#90B494" />
									Events
								</Button>
							</DialogTrigger>
							<DialogContent className="sm-max w-md">
								<DialogTitle>Events</DialogTitle>
								<EventForm article />
							</DialogContent>
						</Dialog>

						<Link href="./new-post">
							<Button
								variant="ghost"
								className="gap-1">
								<NotepadText color="#855e1d" />
								Article
							</Button>
						</Link>
					</div>
				</Card>
			)}

			{isLoading ? (
				<PostSkeleton />
			) : (
				newsData?.results?.map((news, index) => (
					<PostCard
						key={news.id}
						postId={news.id}
						profileId={news.author.id}
						first_name={news.author.user.first_name}
						last_name={news.author.user.last_name}
						pfpImage={news.author.profile_picture}
						isVerified={news.author.is_verified}
						isAdmin={news.author.isAdmin}
						isLiked={news.is_liked}
						isFollowingCreator={news.is_following_creator}
						likeCount={news.likes_count}
						isSaved={news.is_bookmarked}
						bookmarkCount={news.bookmarks_count}
						type="Student"
						date={formatCreatedAt(news.created_at)}
						title={news.title}
						content={news.content}
						postImage={news.media}
						size="large"
					/>
				))
			)}
		</div>
	);
};

export default News;
