"use client";
// Import necessary extensions
import { useEffect, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ImageResize from "tiptap-extension-resize-image";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";

const Tiptap = ({ onChange, content }) => {
	const editor = useEditor({
		extensions: [StarterKit, Underline, Image, ImageResize],
		editorProps: {
			attributes: {
				class: "flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 items-start w-full gap-3 text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none",
			},
		},
		onUpdate: ({ editor }) => {
			onChange(editor.getHTML());
		},
	});

	const isContentSet = useRef(false); // Use a ref to track if the content has been set

	useEffect(() => {
		if (editor && content && !isContentSet.current) {
			editor.commands.setContent(content);
			isContentSet.current = true; // Mark content as set
		}
	}, [editor, content]);

	return (
		<div className="w-full px-4">
			<Toolbar editor={editor} />
			<EditorContent
				style={{ whiteSpace: "pre-line" }}
				editor={editor}
			/>
		</div>
	);
};

export default Tiptap;
