import React from "react";
import {
	About,
	Header,
	Hero,
	Insights,
} from "@/app/landing/index";
import Footer from "@/components/ui/MyComponents/Footer";


const LandingPage = () => {
	return (

			<div>
				<Header />
				<Hero />
				<About />
				<Insights />
				<Footer />
			</div>
	);
};

export default LandingPage;
