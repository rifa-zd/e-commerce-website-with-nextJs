'use client'

import { dummyProducts } from "@/data/data";
import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type dummyProductType = {
  id: string;
  name: string;
  description: string;
  price: number;
  offerPrice?: number; // optional as not all products may have it
  images: string[];
  categories: string[];
  color: string;
  date: number;
  popular: boolean;
};

type AppContextType = {
  products: dummyProductType[];
  currency: string;
  subtotal: number;
  setSubTotal: React.Dispatch<React.SetStateAction<number>>;
  totalAmount: number;
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
  router: ReturnType<typeof useRouter>;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  
  const router = useRouter();

  const currency = "$";

  const [products, setProducts] = useState<dummyProductType[]>([]);
  const [subtotal, setSubTotal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // const fetchProductData = async () => {
  //   setProducts(products);
  // };

  useEffect(() => {
    // fetchProductData();
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setProducts(dummyProducts);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const value = {
    currency, router,
    products,
    subtotal, setSubTotal,
    totalAmount, setTotalAmount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};