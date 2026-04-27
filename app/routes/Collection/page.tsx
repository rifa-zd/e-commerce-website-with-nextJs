"use client";
import { useAppContext } from "@/components/Context/appContext";
import Item from "@/components/fixPage/item";
import { categories } from "@/data/data";

export default function Collection() {
  const { products } = useAppContext();

  return (
    <div className="px-0! mt-4"> 
    {/* className="mx-auto max-w-475 lg:px-12 px-0! mt-4"> */}
      <div className="flex flex-col sm:flex-row gap-6 mb-16 ">

        {/* LEft Filters */}
        <div className="min-w-64 bg-muted/60 p-4 pl-6 rounded-r-xl sm:h-screen rounded-xl sm:sticky sm:top-6 sm:h-fit">
          <div className="px-4 py-3 mt-2 bg-background rounded-xl">
            <h5> Sort By Price</h5>
            <select
              name=""
              id=""
              className="border border-foreground/60 outline-none text-sm text-foreground font-medium h-8 w-full px-2 rounded-md"
            >
              <option value={"relevant"}>Relevant</option>
              <option value={"low"}>Low to High</option>
              <option value={"high"}>High to Low</option>
            </select>
          </div>
          <div className="pl-5 py-3 mt-4 bg-background rounded-xl">
            <h5 className="mb-4">Categories</h5>
            <div className="flex flex-col gap-2 text-sm font-light">
              {categories?.map((cat, index) => {
                return (
                  <label
                    key={index}
                    className="flex gap-2 font-semibold text-foreground"
                  >
                    <input type="checkbox" />
                    {cat.name}
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Filter Profducts */}
         <div className="max-sm:px-10 pr-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
             {products.length > 0 ? (
               products.map((product) => (
                 <Item key={product.id} product={product} />
               ))
             ) : (
               <p className="capitalize">No products Found</p>
             )}
           </div>
         </div>

      </div>
    </div>
  );
}
