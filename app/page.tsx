import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Glassy } from "@/components/ui/glassy";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center p-24 space-y-4">
        <div className="text-5xl"><Glassy className="text-5xl"/></div>
        <div className="text-base">Product Data Management software that respects your filesystem and gets out of your way.</div>
        <div className="flex flex-row space-x-16">
          <Badge variant={"outline"}>Open Source</Badge>
          <Badge variant={"outline"}>Self Hosted</Badge>
        </div>
        <Button variant={"default"}>
          <a target="_blank" href='https://github.com/glassypdm/glassypdm-client/releases/latest'>
          Download on GitHub
          </a>
        </Button>
      </div>
      <div className="flex flex-col items-center p-24 space-y-4">
        <div>Trusted by</div>
        <div className="flex flex-row space-x-4">
          <Link href={"https://fsae.engineering.asu.edu/"} target="_blank">
          <Image src={'/SDMLogo.png'} width={250} height={200} alt="Sun Devil Motorsports"/>
          </Link>
        </div>
      </div>
    </main>
  );
}
