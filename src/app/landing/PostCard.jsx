import React from "react";
import Image from "next/image";

const PostCard = ({ postImage, postTitle, postDescription }) => {
	return (
		<div className="flex gap-[1.25rem] items-center px-[1.25rem] py-[2rem] border border-cyan-400 w-full rounded-md max-sm:flex-col">
			<div className="w-[8.25rem] h-[8.25rem] rounded-full flex items-center justify-center">
				<Image alt="post card image" src={postImage}/>
			</div>
			<div className="flex max-w-[25rem] flex-col gap-[0.75rem] items-start">
				<p className="sub-heading-4">{postTitle}</p>
				<p className="body-text muted">{postDescription}</p>
			</div>
		</div>
	);
};

export default PostCard;
