import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/MyComponents/ModeToggle";

export default function Home() {
	return (
  <main className="flex justify-center items-center h-full">
    <div className="flex items-center mt-[3rem]">
      
      <Button size="lg" className="mx-5" >Click</Button>
      <ModeToggle/>
      <p className="text-primary">Test colors</p>
    </div>
  </main>
  );
}
