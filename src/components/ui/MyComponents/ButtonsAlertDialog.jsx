import React from "react";
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/shadcnComponents/alert-dialog";
import { buttonVariants } from "@/components/ui/shadcnComponents/button";
import { cn } from "@/lib/utils";

export const ButtonsAlertDialog = ({ children, className, variant, size }) => {
	return (
		<div className={`${className}`}>
			<AlertDialog>
				<AlertDialogTrigger>
					<span
						className={cn(
							buttonVariants({ variant: variant, size: size }),
							"btn-text",
							className,
						)}>
						{children}
					</span>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Coming Soon</AlertDialogTitle>
						<AlertDialogDescription>
							The site is not yet ready.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
};
