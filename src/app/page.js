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
import LoginForm from "@/components/forms/login";
import SignUpForm from "@/components/forms/signUp";
import NavBar from "./(core)/home/NavBar";
export default function Home() {
	return (
		<main>
			{/* <Header />
			<Hero />
			<About />
			<Community />
			<LatestPosts />
			<Team />
			<Partners />
		*/}
			{/* <LoginForm /> */}
			{/* <SignUpForm /> */}
			{/* <Footer /> */}
			<NavBar />
		</main>
	);
}
