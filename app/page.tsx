import Hero_Cosmetics from "@/components/hero-section/cosmetics";
import Hero_Skincare from "@/components/hero-section/skinCare";
import HeroSection from "@/components/hero-section/homePage";
import { TrustedBrands } from "@/components/fixPage/trustedBand";
import NewArrivals from "@/components/fixPage/newArrivals";
import PopularProducts from "@/components/fixPage/popularProducts";
import Banner from "@/components/fixPage/banner";
import Testimonials from "@/components/fixPage/testimonials";

export default function Home() {
  

  return (
    <>
    <HeroSection />
    <TrustedBrands />
    
    <NewArrivals />
    <PopularProducts />
    <Banner />
    <Testimonials />
    </>
  );
}
