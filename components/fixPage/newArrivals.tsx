"use client";

import { useEffect, useState } from "react";
import Title from "./title";
import Item from "./item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


import { dummyProductType, useAppContext } from "../Context/appContext";

export default function NewArrivals() {
  const { products } = useAppContext();
  const [newArrivals, setnewArrivals] = useState<dummyProductType[]>([]);

  useEffect(() => {
    const data = products.slice(0, 7);
    // console.log(data);
    setTimeout(() => setnewArrivals(data), 0);
    // setnewArrivals(data)
  }, [products]); // whenever products change this function will run again

  return (
    <section className="mx-auto max-w-475 px-4 lg:px-12 pt-16">
      <Title
        title1={"New"}
        title2={"Arrivals"}
        title1Styles={"pb-14"}
        paraStyles={"!block"}
      />

      {/* Container */}
      <Carousel className="w-full">
        <CarouselContent className="m-6">
          {newArrivals.map((product) => {
            return(
                <CarouselItem key={product.id} className="pl-5 basis-[50%]sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <Item product={product}/>
                </CarouselItem>
            )
          })}

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
