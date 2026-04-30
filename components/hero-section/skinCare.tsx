"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { IMAGE_BASE } from "@/data/data";
import Image from "next/image";
export default function SkinCareHero() {
  const { router } = useAppContext();

  const slides = [
    {
      tag: "Skin Care & Wellness",
      headline: "Glow from",
      highlight: "Within",
      subheadline: "Curated routines for your skin, your way.",
      image: `${IMAGE_BASE}skin_carousel1.jpg`,
    },
    {
      tag: "New Arrivals",
      headline: "Beauty is",
      highlight: "Self Care",
      subheadline: "Discover products made for the modern woman.",
      image: `${IMAGE_BASE}skin_carousel2.jpg`,
    },
  ];

  return (
    <div className="mx-auto px-4 lg:px-12 pt-2">
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        {/* <CarouselContent className="gap-4 pl-5"> causing issue to loop - shadcn ui code pattern */}
        <CarouselContent className="-ml-4">
          {slides.map((slide, index) => {
            return (
              <CarouselItem
                key={index}
                // style={{
                //   backgroundImage: `url(${slide.image})`,
                //   backgroundSize: "cover",
                //   backgroundPosition: "center",
                // }}
                className="h-[500px] sm:h-[600px] relative bg-no-repeat rounded-2xl overflow-hidden"
              >
                {/* background image */}
                <Image
                  src={slide.image}
                  alt={slide.headline}
                  fill
                  className="object-cover"
                  priority
                />
                {/* dark overlay for readability */}
                <div className="absolute inset-0 bg-black/30" />

                <div className="relative z-10 flex flex-col h-full justify-center sm:pl-16 pl-8">
                  <p className="uppercase tracking-widest text-white/80 text-sm mb-2">
                    {slide.tag}
                  </p>
                  <h1 className="text-white text-4xl sm:text-6xl font-bold leading-tight">
                    {slide.headline}{" "}
                    <span className="italic font-light">{slide.highlight}</span>
                  </h1>
                  <p className="text-white/90 mt-3 text-base sm:text-lg max-w-sm">
                    {slide.subheadline}
                  </p>
                  <Button
                    onClick={() => router.push("/routes/Collection")}
                    className="mt-8 w-44 sm:w-52 py-6 rounded-full bg-white text-black hover:bg-white/90 font-semibold"
                  >
                    Shop Now <MoveRight className="ml-2" />
                  </Button>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
