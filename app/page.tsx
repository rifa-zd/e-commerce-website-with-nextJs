import Carousol_Hero from "@/components/fixPage/hero_carousel";
import HeroSection from "@/components/homePage/hero_section";
import { TrustedBrands } from "@/components/fixPage/trustedBand";
import NewArrivals from "@/components/fixPage/newArrivals";
import PopularProducts from "@/components/fixPage/popularProducts";
import Banner from "@/components/fixPage/banner";
import Testimonials from "@/components/fixPage/testimonials";

export default function Home() {
  

  return (
    <>
    {/* <HeroSection /> */}
    <Carousol_Hero />
    <TrustedBrands />
    <NewArrivals />
    <PopularProducts />
    <Banner />
    <Testimonials />
    </>
  );
}
