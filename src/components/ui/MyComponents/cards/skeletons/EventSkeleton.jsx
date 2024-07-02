import { Skeleton } from "../../../shadcnComponents/skeleton";

import React from "react";

const EventSkeleton = () => {
	return (
		<div className="flex flex-col gap-[0.75rem] items-start w-[58%] py-[0.3rem]">
			<div className="w-full flex flex-row justify-between items-start ">
				<Skeleton className="w-[4rem] h-[4rem] rounded-full ml-[1.5rem]" />
				<div className="flex flex-col justify-center items-start gap-[0.5rem]">
					<Skeleton className="h-5 w-[200px]" />
					<Skeleton className="h-4 w-[100px]" />
					<Skeleton className="h-4 w-[150px]" />
				</div>
				<Skeleton className="h-8 w-[150px] ml-[20rem] mt-0" />
			</div>
			<div className="flex flex-col items-start gap-[0.75rem] self-stretch h-[70%]">
				<Skeleton className="rounded-[0.25rem] h-[20rem] w-full relative" />
				<Skeleton className="h-[2rem] w-[70%] self-stretch" />
				<Skeleton className="h-5 w-[150px]" />
				<Skeleton className="h-5 w-[20rem]" />
				<Skeleton className="h-6 w-[150px] mt-[0.5rem]" />
				<Skeleton className="h-[8rem] w-full self-stretch" />
				<Skeleton className="h-[2rem] w-full self-stretch" />
			</div>
			<div className="flex flex-col w-full gap-1 relative">
				<div className="flex items-start self-stretch gap-[1rem]">
					<Skeleton className="h-[2.5rem] w-[3rem] rounded-[0.75rem]" />
					<Skeleton className="h-[2.5rem] w-[3rem] rounded-[0.75rem]" />
					<Skeleton className="h-[2.5rem] w-[3rem] rounded-[0.75rem]" />
					<Skeleton className="h-[2.5rem] w-[3rem] rounded-[0.75rem] absolute right-3" />
				</div>
			</div>
		</div>
	);
};

export default EventSkeleton;
