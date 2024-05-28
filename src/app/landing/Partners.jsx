"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Jhub from "@/../public/images/JHUB Africa 1.png";
import Jkuat from "@/../public/images/image 1.png";

const Partners = () => {
	return (
		<div className="flex flex-col px-2.25rem items-center justify-center">
			<p className="sub-heading-1 muted">In partnership with</p>
			<div className="flex items-center justify-center gap-[4.75rem] px-[2.5rem]">
				<Link href={"https://jhubafrica.com/"}>
					<Image alt="Jhub logo" src={Jhub} />
				</Link>
				<Link href={"https://www.jkuat.ac.ke/"}>
					<Image alt="Jkuat logo" src={Jkuat} />
				</Link>
			</div>
		</div>
	);
};

export default Partners;
