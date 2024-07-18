import { useState, useEffect, useRef, useCallback } from "react";

const useInfiniteScroll = (query, queryArgs = {}) => {
	const [page, setPage] = useState(1);
	const { data, error, isLoading, isFetching } = query({
		...queryArgs,
		page,
	}); // Pass id and page
	const [items, setItems] = useState([]);
	const observer = useRef();
	const [hasNextPage, setHasNextPage] = useState(true);

	useEffect(() => {
		if (data) {
			setItems((prevItems) => [...prevItems, ...data.results]);
			setHasNextPage(data.hasNextPage);
		}
	}, [data]);

	const lastItemRef = useCallback(
		(node) => {
			if (isFetching || !hasNextPage) return;
			if (observer.current) observer.current.disconnect();

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					setPage((prevPage) => prevPage + 1);
				}
			});

			if (node) observer.current.observe(node);
		},
		[isFetching, hasNextPage],
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
