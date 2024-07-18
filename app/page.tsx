import { cn } from "@/lib/utils";
import { sunflower } from "./fonts";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <div className={cn("flex flex-row text-6xl", sunflower.className)}>glassy<div className="text-glassy font-bold">PDM</div></div>
      <div className="text-2xl">coming soon</div>
    </main>
  );
}
