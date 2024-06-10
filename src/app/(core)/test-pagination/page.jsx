import React from "react";
import { useGetUserQuery } from "@/redux/features/test/testApiSlice";
import useInfiniteScroll from "./useInfiniteScroll";

const Page = () => {
	const { data, isFetching, error, lastItemRef } = useInfiniteScroll(
		useGetUserQuery,
		1,
	);

	if (isFetching) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div>
			{data?.map((user, index) => {
				if (data.length === index + 1) {
					return (
						<div
							key={user.id}
							ref={lastItemRef}>
							{user.first_name}
						</div>
					);
				} else {
					return <div key={user.id}>{user.first_name}</div>;
				}
			})}
		</div>
	);
};

export default Page;
