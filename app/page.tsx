import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero section */}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            {/* hero heading  */}
            <p className="text-black mb-6 text-4xl font-bold">
              For every version of{" "}
              <b>
                <i>She</i>
              </b>
            </p>

            {/* <div>
              <Button size={"xs"} className={"h-12 px-8 text-lg font-medium"}>
                Join Today
              </Button>
            </div> */}
          </div>
          
          <div className="flex justify-center gap-6 overflow-hidden">
            <Badge variant={"custom"}>Free Shipping on Orders Over $75</Badge>
            <Badge variant={"custom"}>30-Day Hassle-Free Returns</Badge>
            <Badge variant={"custom"}>Dermatologist Tested Skin Products</Badge>
          </div>
        </section>
      </main>
    </div>
  );
}
