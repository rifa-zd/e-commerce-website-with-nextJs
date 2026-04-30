import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { IMAGE_BASE } from "@/data/data";

const heroImages = [
  { src: `${IMAGE_BASE}hero1.png`, alt: "Skin care collection" },
  { src: `${IMAGE_BASE}hero2.png`, alt: "Fashion clothing" },
  { src: `${IMAGE_BASE}hero3.png`, alt: "Cosmetics" },
  { src: `${IMAGE_BASE}hero4.png`, alt: "Accessories and shoes" },
];

export default function HeroSection() {
  return (
    <>
      <div className="relative w-full h-[420px] sm:h-[500px] overflow-hidden">
        {/* Background images grid */}
        <div className="absolute inset-0 flex">
          {heroImages.map((img, index) => (
            <div key={index} className="relative flex-1 h-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="25vw"
                className="object-cover"
                priority
              />
            </div>
          ))}
        </div>

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* hero heading */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
          <p style={{ color: "white" }} className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            For every version of{" "}
            <b>
              <i className="font-bold font-serif text-4xl">She</i>
            </b>
          </p>
        </div>
      </div>

      {/* Badges */}
      <div className="mt-10 flex flex-wrap justify-center gap-5">
        <Badge variant="custom">Free Shipping on Orders Over $75</Badge>
        <Badge variant="custom">30-Day Hassle-Free Returns</Badge>
        <Badge variant="custom">Dermatologist Tested Skin Products</Badge>
      </div>
    </>
  );
}
