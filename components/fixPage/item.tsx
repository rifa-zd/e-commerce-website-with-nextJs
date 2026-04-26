import { useState } from "react";
import { dummyProductType, useAppContext } from "../Context/appContext";
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
    <div className="overflow-hidden relative">
      
        {/* image */}
        <div
          // h-50 sm:h-62.5 lg:h-75
          className="flex items-center justify-center p-2 overflow-hidden relative"
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
            height={555}
            width={555}
            className="transition-all duration-300"
            unoptimized={true}
          />
        </div>

        {/* info */}
        <div className="p-2">
          <h5 className="line-clamp-1 pt-1">{product.name}</h5>

          <div className="flex items-center justify-between pt-1">
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
          <p className="line-clamp-2 py-1 pr-3">{product.description}</p>
        </div>
      

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Button
          onClick={() => setIsDialogOpen(true)}
          className={
            "absolute bottom-4 right-0 px-1! py-1! ring-1  ring-slate-900/10 mr-1"
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
