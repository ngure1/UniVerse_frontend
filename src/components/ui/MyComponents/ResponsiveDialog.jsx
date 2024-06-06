"use client";
import * as React from "react";

import { Button } from "@/components/ui/shadcnComponents/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/shadcnComponents/dialog";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/shadcnComponents/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";

export function ResponsiveDialog({
	children,
	isOpen,
	setIsOpen,
	title,
	description,
}) {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	if (isDesktop) {
		return (
			<Dialog
				open={isOpen}
				onOpenChange={setIsOpen}>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>{title}</DialogTitle>
						{description && (
							<DialogDescription>{description}</DialogDescription>
						)}
					</DialogHeader>
					{children}
				</DialogContent>
			</Dialog>
		);
	}

	return (
		<Drawer
			open={isOpen}
			onOpenChange={setIsOpen}>
			<DrawerContent>
				<DrawerHeader className="text-left">
					<DrawerTitle>{title}</DrawerTitle>
					{description && (
						<DialogDescription>{description}</DialogDescription>
					)}
				</DrawerHeader>
				{children}
				<DrawerFooter className="pt-2">
					<DrawerClose asChild>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
