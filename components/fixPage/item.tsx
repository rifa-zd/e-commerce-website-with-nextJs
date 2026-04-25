import { useState } from "react";
import { useAppContext } from "../Context/appContext";
import Image from "next/image";

export default function Item({ product }) {
  const { currency } = useAppContext();
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <div className="h-50 sm:h-62.5 lg:h-75 flex items-center justify-center p-2 rounded-4xl bg-muted overflow-hidden relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={
            product.images.length > 1 && hovered
              ? product.images[1]
              : product.images[0]
          }
          alt={"can't find"}
          fill
          className="'transition-all duration-300 object-cover"
          unoptimized={true}
        />
      </div>
      <div className="p-2">
        <h5 className="line-clamp-1 pt-1">{product.name}</h5>

        <div className="flex items-center justify-between pt-1">
          <p className="font-bold">{product.categories[0]}</p>
          <h5 className="pr-2">
            <span className={`${product.offerPrice && "line-through"} text-foreground  pr-1`}>
              {currency}
              {product.price}
            </span>
            {product.offerPrice && (
              <>
                {currency}
                {product.offerPrice}
              </>
            )}
          </h5>
        </div>
        <p className="line-clamp-2 py-1 pr-3">{product.description}</p>
      </div>
    </div>
  );
}
