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
  <main className="flex flex-col gap-[8.75rem] h-full">
    <Header/>
    <Hero/>
    <About/>
    <Community/>
    <LatestPosts/>
    <Team/>
    <Partners/>
    <Footer/>

  </main>
  );
}
