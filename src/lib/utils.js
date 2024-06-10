import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export function get_fallback_name(first_name, last_name) {
	return first_name[0].toUpperCase() + last_name[0].toUpperCase();
}
