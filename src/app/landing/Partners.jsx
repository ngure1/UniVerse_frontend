"use client";
import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import Jhub from "@/../public/images/JHUB Africa 1.png";
import Jkuat from "@/../public/images/image 1.png";
import { Element } from "react-scroll";

const Partners = () => {
	return (
		<Element
			name="partners"
			className="py-[8.75rem]">
			<div className="flex flex-col px-2.25rem items-center justify-center">
				<p className="sub-heading-1 muted">In partnership with</p>
				<div className="flex items-center justify-center gap-[4.75rem] px-[2.5rem]">
					<Link href={"https://www.jkuat.ac.ke/"}>
						<Image
							alt="Jkuat logo"
							src={Jkuat}
						/>
					</Link>
					<Link href={"https://jhubafrica.com/"}>
						<Image
							alt="Jhub logo"
							src={Jhub}
						/>
					</Link>
				</div>
			</div>
		</Element>
	);
};

export default Partners;
