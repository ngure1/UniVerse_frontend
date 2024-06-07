"use client";
import React from "react";
import { useState, useEffect } from "react";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/shadcnComponents/drawer";
import { Button } from "../shadcnComponents/button";

const MainMenu = () => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		// Return the same content that was server-rendered here
		return null; // Or return a loading spinner, placeholder, etc.
	}

	return (
		// Your original MainMenu component code here
		<Drawer>
			<DrawerTrigger>Open</DrawerTrigger>
			<DrawerContent>
				<DrawerTitle>Are you absolutely sure?</DrawerTitle>
				<DrawerDescription>
					This action cannot be undone.
				</DrawerDescription>
				<Button>Action</Button>
			</DrawerContent>
		</Drawer>
	);
};

export default MainMenu;
