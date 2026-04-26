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
    reviewer: "Ava T.",
    category: "Mom & Baby",
    quote: "So soft, but size up if between sizes",
    body: "My 6-month-old lived in this during our beach trip. The linen is actually soft (not scratchy like most), and the bubble shape makes diaper changes a breeze. Only downside: shrank just a bit after washing on cold. I'd order a size up next time.",
    image: "/product/images/tall1.png",
  },
  {
    id: 2,
    reviewer: "Jess K.",
    category: "Skin Care",
    quote: "Finally, an eye patch that doesn't crush my lashes",
    body: "I bought this for migraines and overnight flights. The silk is legit — no tugging on my skin or eyelashes. Adjustable strap actually stays put without slipping. Lavender scent is very faint, which I like. My only wish? A travel pouch included. Still, 10/10 for sleep quality.",
    image: "/product/images/tall2.png",
  },
  {
    id: 3,
    reviewer: "Amira H.",
    category: "Accessories",
    quote: "A black shine that screams class",
    body: "Adjustable. Pretty. Fits my postpartum fingers. Included three sizes. Still wearing them daily. 10/10 for comfort and confidence.",
    image: "/product/images/tall3.png",
  },
  {
    id: 4,
    reviewer: "Priya M.",
    category: "Wellness",
    quote: "My nighttime ritual just got an upgrade",
    body: "I was skeptical at first, but after two weeks I genuinely look forward to winding down. The texture is luxurious, absorbs fast, and doesn't leave residue. My skin has never felt more balanced. Repurchased twice already.",
    image: "/product/images/tall4.png",
  },
  {
    id: 5,
    reviewer: "Sofia R.",
    category: "Lifestyle",
    quote: "Effortlessly elegant — wore it to brunch and got three compliments",
    body: "It drapes beautifully and the fabric feels premium for the price. I sized down per the guide and it was perfect. The colour IRL is even richer than the photos — a deep, warm tone that pairs with everything.",
    image: "/product/images/tall5.png",
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