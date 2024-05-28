import { Team,Partners,LatestPosts } from "./landing/index";
import Footer from "@/components/ui/MyComponents/Footer";
export default function Home() {
	return (
  <main className="flex flex-col gap-[8.75rem] h-full">
    {/* <div className="flex items-center mt-[3rem]">
      
      <Button size="lg" className="mx-5" >Click</Button>
      <ModeToggle/>
      <p className="text-primary">Test colors</p>
    </div> */}
    <LatestPosts/>
    <Team/>
    <Partners/>
    <Footer/>

  </main>
  );
}
