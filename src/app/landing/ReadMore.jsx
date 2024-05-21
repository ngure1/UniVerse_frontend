import React from "react";

const ReadMore = ({className}) => {
	return (
		<div className={`flex gap-[0.0625rem] justify-center items-center ${className}`}>
			<p className="body-underline">Read more</p>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 40 40"
				fill="none"
				className="w-[2.5rem] h-[2.5rem]"
			>
				<path
					d="M16.6667 11.6667L25 20L16.6667 28.3333"
					stroke="#474747"
					stroke-width="3.84"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
	);
};

export default ReadMore;
