import {
	Header,
	Hero,
	About,
	Community,
	LatestPosts,
	Team,
	Partners,
} from "./landing/index";
import Footer from "@/components/ui/MyComponents/Footer";
export default function Home() {
	return (
		<main>
			<Header />
			<Hero />
			<About />
			<Community />
			<LatestPosts />
			<Team />
			<Partners />
			<Footer />
		</main>
	);
}
