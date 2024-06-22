"use client";

import React from "react";
import {
	Bold,
	Strikethrough,
	Italic,
	List,
	ListOrdered,
	Heading2,
	Underline,
	Quote,
	Undo,
	Redo,
	Code,
	ImageIcon,
} from "lucide-react";

const Toolbar = ({ editor }) => {
	if (!editor) {
		return null;
	}

	const insertImage = (event) => {
		const files = event.target.files;
		if (files.length === 0) {
			return; // No file selected
		}
		const reader = new FileReader();
		reader.onload = (e) => {
			editor.chain().focus().setImage({ src: e.target.result }).run();
		};
		reader.readAsDataURL(files[0]);
	};

	return (
		<div
			className="px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start
    gap-5 w-full flex-wrap border border-gray-700">
			<div className="flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap ">
				<button
					onClick={(e) => {
						e.preventDefault();
						editor.chain().focus().toggleBold().run();
					}}
					className={
						editor.isActive("bold")
							? "bg-sky-700 text-white p-2 rounded-lg"
							: "text-sky-400"
					}>
					<Bold className="w-5 h-5" />
				</button>
				<button
					onClick={(e) => {
						e.preventDefault();
						editor.chain().focus().toggleItalic().run();
					}}
					className={
						editor.isActive("italic")
							? "bg-sky-700 text-white p-2 rounded-lg"
							: "text-sky-400"
					}>
					<Italic className="w-5 h-5" />
				</button>
				<button
					onClick={(e) => {
						e.preventDefault();
						editor.chain().focus().toggleUnderline().run();
					}}
					className={
						editor.isActive("underline")
							? "bg-sky-700 text-white p-2 rounded-lg"
							: "text-sky-400"
					}>
					<Underline className="w-5 h-5" />
				</button>
				<button
					onClick={(e) => {
						e.preventDefault();
						editor.chain().focus().toggleStrike().run();
					}}
					className={
						editor.isActive("strike")
							? "bg-sky-700 text-white p-2 rounded-lg"
							: "text-sky-400"
					}>
					<Strikethrough className="w-5 h-5" />
				</button>
				<button
					onClick={(e) => {
						e.preventDefault();
						editor
							.chain()
							.focus()
							.toggleHeading({ level: 2 })
							.run();
					}}
					className={
						editor.isActive("heading", { level: 2 })
							? "bg-sky-700 text-white p-2 rounded-lg"
							: "text-sky-400"
					}>
					<Heading2 className="w-5 h-5" />
				</button>

				<button
					onClick={(e) => {
						e.preventDefault();
						editor.chain().focus().toggleBulletList().run();
					}}
					className={
						editor.isActive("bulletList")
							? "bg-sky-700 text-white p-2 rounded-lg"
							: "text-sky-400"
					}>
					<List className="w-5 h-5" />
				</button>
				<button
					onClick={(e) => {
						e.preventDefault();
						editor.chain().focus().toggleOrderedList().run();
					}}
					className={
						editor.isActive("orderedList")
							? "bg-sky-700 text-white p-2 rounded-lg"
							: "text-sky-400"
					}>
					<ListOrdered className="w-5 h-5" />
				</button>
				<button
					onClick={(e) => {
						e.preventDefault();
						editor.chain().focus().toggleBlockquote().run();
					}}
					className={
						editor.isActive("blockquote")
							? "bg-sky-700 text-white p-2 rounded-lg"
							: "text-sky-400"
					}>
					<Quote className="w-5 h-5" />
				</button>
				<button
					onClick={(e) => {
						e.preventDefault();
						editor.chain().focus().setCode().run();
					}}
					className={
						editor.isActive("code")
							? "bg-sky-700 text-white p-2 rounded-lg"
							: "text-sky-400"
					}>
					<Code className="w-5 h-5" />
				</button>
				<button
					onClick={(e) => {
						e.preventDefault();
						editor.chain().focus().undo().run();
					}}
					className={
						editor.isActive("undo")
							? "bg-sky-700 text-white p-2 rounded-lg"
							: "text-sky-400 hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"
					}>
					<Undo className="w-5 h-5" />
				</button>
				<button
					onClick={(e) => {
						e.preventDefault();
						editor.chain().focus().redo().run();
					}}
					className={
						editor.isActive("redo")
							? "bg-sky-700 text-white p-2 rounded-lg"
							: "text-sky-400 hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"
					}>
					<Redo className="w-5 h-5" />
				</button>
				<button
					type="button"
					onClick={() =>
						document.getElementById("imageUpload").click()
					}
					className="text-sky-400 hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg">
					<ImageIcon className="w-5 h-5" />
				</button>
				<input
					type="file"
					id="imageUpload"
					style={{ display: "none" }}
					accept="image/*"
					onChange={insertImage}
				/>
			</div>
		</div>
	);
};

export default Toolbar;
