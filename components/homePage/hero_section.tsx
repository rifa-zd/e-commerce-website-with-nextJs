import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex min-h-screen flex-col ">
      <main className="flex-1">
        {/* Hero section */}
        <section className="container mx-auto px-4 py-32 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* hero heading  */}
            <p className="text-foreground mb-6 text-4xl font-bold">
              For every version of{" "}
              <b>
                <i>She</i>
              </b>
            </p>
          </div>

          <div className="flex justify-center">
            <Link href={"/sign-up"}>
              <Button size={"lg"} className={"h-12 px-4 text-lg font-medium"}>
                Join Today <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
        </section>

        <div className="mt-6 flex flex-wrap justify-center gap-6 overflow-hidden">
          <Badge variant={"custom"}>Free Shipping on Orders Over $75</Badge>
          <Badge variant={"custom"}>30-Day Hassle-Free Returns</Badge>
          <Badge variant={"custom"}>Dermatologist Tested Skin Products</Badge>
        </div>
      </main>
    </div>
  );
}
