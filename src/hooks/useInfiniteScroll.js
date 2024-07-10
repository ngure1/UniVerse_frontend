// useInfiniteScroll.js
import { useState, useEffect, useRef, useCallback } from "react";

const useInfiniteScroll = (query, queryArgs = {}) => {
	const [page, setPage] = useState(1);
	const { data, error, isLoading, isFetching } = query({
		page,
		...queryArgs,
	});
	const [items, setItems] = useState([]);
	const observer = useRef();

	useEffect(() => {
		if (data) {
			setItems((prevItems) => [...prevItems, ...data.results]);
		}
	}, [data]);

	const lastItemRef = useCallback(
		(node) => {
			if (isFetching) return;
			if (observer.current) observer.current.disconnect();

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					console.log("fetching next page");
					setPage((prevPage) => prevPage + 1);
				}
			});

			if (node) observer.current.observe(node);
		},
		[isFetching],
	);

	return {
		items,
		error,
		isLoading,
		lastItemRef,
		isFetchingNextPage: isFetching,
	};
};

export default useInfiniteScroll;
