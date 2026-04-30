import { useState } from "react";
import { dummyProductType, useAppContext } from "@/context/AppContext";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  // DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ProductDetails from "./productDetails";

export default function Item({ product }: { product: dummyProductType }) {
  const { currency } = useAppContext();
  const [hovered, setHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="overflow-hidden relative h-full flex flex-col border rounded-lg bg-background p-1">
      {/* image */}
      <div
        className="relative w-full aspect-4/3 sm:aspect-square  overflow-hidden "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={
            product.images.length > 1 && hovered
              ? product.images[1]
              : product.images[0]
          }
          alt={product.name}
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="transition-transform duration-500 ease-in-out object-contain group-hover:scale-105"
          unoptimized={true}
        />
      </div>

      {/* info */}
      <div className="p-2 flex flex-col flex-1 pr-10">
        <h5 className="line-clamp-1 pt-1">{product.name}</h5>

        <div className="flex items-center justify-between pt-1  mt-auto">
          <p className="font-bold">{product.categories[0]}</p>
          <h5 className="pr-2">
            <span
              className={`${product.offerPrice && "line-through"} text-foreground  pr-1`}
            >
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
        <p className="line-clamp-2 py-1 pr-3 text-sm">{product.description}</p>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Button
          onClick={() => setIsDialogOpen(true)}
          className={
            "absolute bottom-3 right-2 px-1! py-1! h-8 w-8 p-0 shadow-md"
          }
        >
          <Plus />
        </Button>
        {/* <DialogTrigger>
        </DialogTrigger>
        no need as causing hydration error */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle className={"sr-only"}>
              Are you absolutely sure?
            </DialogTitle>
            <DialogDescription></DialogDescription>
            <ProductDetails product={product} />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
