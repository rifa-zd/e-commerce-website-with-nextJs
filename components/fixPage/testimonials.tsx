"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { IMAGE_BASE } from "@/data/data";

interface Testimonial {
  id: number;
  reviewer: string;
  category: string;
  quote: string;
  body: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    reviewer: "Layla M.",
    category: "Clothing",
    quote: "The coat that makes every outfit look intentional",
    body: "I've been searching for a trench that actually fits well without looking boxy, and this is it. The structure is perfect — I threw it over a simple tee and felt put-together instantly. The fabric holds its shape beautifully and the buttons feel solid. Already planning to buy it in a second color.",
    image: `${IMAGE_BASE}tall1.png`,
  },
  {
    id: 2,
    reviewer: "Nora J.",
    category: "Skin Care",
    quote: "These eye patches are genuinely doing something",
    body: "I was using drugstore patches before and the difference after switching to these is noticeable. After three mornings my under-eyes look less puffy and the dark circles are visibly lighter. They stay put without sliding and don't irritate my sensitive skin. A permanent part of my morning routine now.",
    image: `${IMAGE_BASE}tall4.png`,
  },
  {
    id: 3,
    reviewer: "Sofia R.",
    category: "Clothing",
    quote: "Casual done right — I wear this on repeat",
    body: "The fit on this crop top is surprisingly flattering — not too tight, not boxy. The ribbed fabric has a nice weight to it and hasn't lost its shape after multiple washes. I styled it with jeans for a day out and got compliments. Simple but exactly what a wardrobe staple should be.",
    image: `${IMAGE_BASE}tall5.png`,
  },
  {
    id: 4,
    reviewer: "Amira H.",
    category: "Accessories",
    quote: "Edgy, minimal, and actually stays on",
    body: "I bought the full set and wear two or three rings stacked daily. The black finish is holding up really well — no fading or peeling after weeks of wear. Fits true to size and the weight feels substantial without being uncomfortable. Exactly the aesthetic I was going for.",
    image: `${IMAGE_BASE}size1.png`,
  },
  {
    id: 5,
    reviewer: "Hana B.",
    category: "Mom Care",
    quote: "Softest thing my baby has ever worn",
    body: "I ordered this for my newborn and the knit quality exceeded my expectations. It's warm but breathable, and the button front makes dressing a wriggly baby so much easier. After four washes it still looks brand new. Every mom in my group has asked where I got it.",
    image: `${IMAGE_BASE}random6.png`,
  },
  {
    id: 6,
    reviewer: "Elena V.",
    category: "Accessories",
    quote: "Delicate jewelry that looks way more expensive than it is",
    body: "The pearl drop earrings paired with the layered necklace is such a beautiful combination. Everything feels lightweight and comfortable for all-day wear. I've received so many compliments and nobody believes the price. The ring is dainty and adjustable which is a huge plus. Will be gifting this set.",
    image: `${IMAGE_BASE}random7.png`,
  },
];

export default function TestimonialCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    api.on("init", () => setCurrent(api.selectedScrollSnap()));
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="w-full py-16 md:py-24 bg-background flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-5xl md:text-6xl font-light tracking-widest text-primary font-serif">
          Loved By You
        </h2>
        <div className="mx-auto mt-3 h-px w-14 bg-secondary" />
      </div>

      {/* Carousel — constrained to center, not full width */}
      <div className="relative w-full max-w-5xl px-10">
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t) => (
              <CarouselItem
                key={t.id}
                className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                {/* Card */}
                <div className="relative flex flex-col rounded-2xl border h-100 border-foreground bg-background text-center px-4 pt-5 pb-0 overflow-hidden"
                //   style={{ height: "420px" }}
                >
                  {/* Reviewer */}
                  <p className="font-serif italic text-xs text-primary whitespace-nowrap overflow-hidden text-ellipsis mb-3">
                    {t.reviewer}{" "}
                    <span className="not-italic text-primary">–</span>{" "}
                    byer from{" "}
                    <span className="font-bold not-italic text-foreground">{t.category}</span>
                  </p>

                  {/* Quote */}
                  <blockquote className="font-serif text-lg font-semibold text-foreground leading-snug mb-3">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Body — */}
                  <p className="font-serif italic text-xs leading-relaxed text-foreground/70 mb-0 z-20">
                    {t.body}
                  </p>

                  {/* Image overlapping body text from below */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-40 -rotate-20 rounded-xl overflow-hidden shadow-md z-10">
                    <Image
                      src={t.image}
                      alt={`Reviewed by ${t.reviewer}`}
                      fill
                      className="object-cover"
                      sizes="130px"
                      draggable={false}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="-left-5 border bg-background border-secondary text-foreground hover:bg-muted" />
          <CarouselNext className="-right-5 border bg-background border-secondary text-foreground hover:bg-muted" />
        </Carousel>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-2.5 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 h-2 ${
              current === i ? "w-6 bg-foreground" : "w-2 bg-secondary"
            }`}
          />
        ))}
      </div>
    </section>
  );
}