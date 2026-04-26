"use client";

import React, { useEffect, useState } from "react";
import Title from "./title";
import Item from "./item";
import { dummyProductType, useAppContext } from "../Context/appContext";

export default function PopularProducts() {
  const {products} = useAppContext();
  const [popularProducts, setPopularProducts] = useState<dummyProductType[]>([]);

  useEffect(() => {
    const data = products.filter((item) => item.popular === true).slice(0, 5);

    setTimeout(() => setPopularProducts(data), 0);

    // setPopularProducts(data); //trigger cascading renders
  }, [products])


  return (
    <section className="mx-auto max-w-475 px-4 lg:px-12 py-16">
      <Title
        title1={"Popular"}
        title2={"Products"}
        title1Styles={"pb-14"}
        paraStyles={"!block"}
      />

      {/* Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {popularProducts.map((product) => {
          return (
           
              <Item key={product.id} product={product} />
            
          );
        })}
      </div>
    </section>
  );
}
