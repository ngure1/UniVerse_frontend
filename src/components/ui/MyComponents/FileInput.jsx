"use client";
import React from "react";

// Define the FileInput component
const FileInput = (props) => {
	// Destructure props to exclude 'value', as it's not applicable for file inputs
	const { value, ...inputProps } = props;

	return (
		<input
			type="file"
			{...inputProps}
		/>
	);
};

export default FileInput;
