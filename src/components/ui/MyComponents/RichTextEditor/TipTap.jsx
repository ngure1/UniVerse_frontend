"use client";
// Import necessary extensions
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";
import Blockquote from "@tiptap/extension-blockquote";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";

const Tiptap = ({ onChange, content }) => {
	const handleChange = (newContent) => {
		onChange(newContent);
	};
	const editor = useEditor({
		extensions: [StarterKit, Underline, Blockquote, BulletList, ListItem],
		editorProps: {
			attributes: {
				class: "flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 items-start w-full gap-3 text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none",
			},
		},
		onUpdate: ({ editor }) => {
			handleChange(editor.getHTML());
		},
	});

	return (
		<div className="w-full px-4">
			<Toolbar
				editor={editor}
				content={content}
			/>
			<EditorContent
				style={{ whiteSpace: "pre-line" }}
				editor={editor}
			/>
		</div>
	);
};

export default Tiptap;
