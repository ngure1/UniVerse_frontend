import { Skeleton } from "../shadcnComponents/skeleton";

import React from "react";

const PostSkeleton = () => {
	return (
		<div className="flex w-[37.5rem] min-w-[21.25rem] py-[1.5rem] px-[2rem] flex-col justify-center items-start gap-[0.75rem] rounded-[0.5rem] bg-white">
			<div className="flex items-center self-stretch gap-[0.75rem] mb-[1rem] ">
				<Skeleton className="w-[70px] h-[70px] rounded-full" />
				<div className="flex flex-col justify-center items-start gap-[0.5rem]">
					<Skeleton className="h-4 w-[150px]" />
					<Skeleton className="h-4 w-[100px]" />
					<Skeleton className="h-4 w-[150px]" />
				</div>
			</div>
			<div className="flex flex-col items-start gap-[1rem] self-stretch mb-[1.25rem] ">
				<Skeleton className="h-[2rem] self-stretch" />
				<Skeleton className="h-[20rem]  self-stretch rounded-[0.25rem]" />
			</div>

			<div className="space-y-2">
				<div className="flex justify-evenly items-center self-stretch p-6 pl-2 pt-0 gap-[4rem]">
					<Skeleton className="h-[2.5rem] w-[5rem] rounded-[0.75rem]" />
					<Skeleton className="h-[2.5rem] w-[5rem] rounded-[0.75rem]" />
					<Skeleton className="h-[2.5rem] w-[5rem] rounded-[0.75rem]" />
					<Skeleton className="h-[2.5rem] w-[5rem] rounded-[0.75rem]" />
				</div>
			</div>
		</div>
	);
};

export default PostSkeleton;
