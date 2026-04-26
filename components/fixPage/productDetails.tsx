import { useState } from "react";
import { dummyProductType, useAppContext } from "../Context/appContext";
import Image from "next/image";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";

export default function ProductDetails({
  product,
}: {
  product: dummyProductType;
}) {
  const { currency } = useAppContext();

  const [price, setPrice] = useState(
    product.offerPrice ? product.offerPrice : product.price,
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col items-center gap-7 md:flex-row">
      <Image
        src={product.images[0]}
        alt="can't find"
        height={255}
        width={255}
        className="object-cover rounded-lg"
        unoptimized={true}
      />

      {/* INFO */}
      <div className="text-foreground p-3 max-w-sm md:my-auto">
        <h4 className="text-xl">{product.name}</h4>
        <p className="font-bold pt-1">{product.categories[0]}</p>
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-x-2">
            <h5>Color:</h5>
            <p className="font-bold">{product.color}</p>
          </div>
          <div className="flex items-center gap-x-2">
            <h5>Price:</h5>
            <p className="font-bold">
              {currency}
              {product.price}
            </p>
          </div>
          {product.offerPrice && (
            <div className="flex items-center gap-x-2">
              <h5>Offer Price:</h5>
              <p className="font-bold">
                {currency}
                {product.offerPrice}
              </p>
            </div>
          )}
        </div>
        <p className="line-clamp-2 py-1 pr-3 mt-2">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          
		  <div className="flex items-center ring-1 ring-slate-900/15 rounded-full overflow-hidden ">
            <Button className="p-1.5 m-0.5 bg-muted text-foreground rounded-full shadow-md cursor-pointer">
              <Minus size={17} />
            </Button>
            <p className="px-2 text-2lg">{quantity}</p>
            <Button className="p-1.5 m-0.5 bg-muted text-foreground rounded-full shadow-md cursor-pointer">
              <Plus size={17} />
            </Button>
          </div>

          <div className="flex items-center gap-x-2">
            <h5>SubTotal:</h5>
            <p className="font-bold">
              {currency}
              {price * quantity}
            </p>
          </div>
        </div>

        <Button variant={"secondary"} className={"mt-4"}>
          <ShoppingBag />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
