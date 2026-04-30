// 'use client'
// problem is page.tsx is a server component but SkinCareHero and CosmeticsHero use useAppContext (a client hook) — 
// need to tell Next.js the page is a client component. But not using it; 
// keeping page.tsx as sever component


import SkinCareHero from "@/components/hero-section/skinCare";
import CosmeticsHero from "@/components/hero-section/cosmetics";


const heroMap: Record<string, React.ComponentType> = {
  "skin-care": SkinCareHero,
  "cosmetics": CosmeticsHero,
  //  others
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const HeroComponent = heroMap[slug];

//   console.log("slug:", slug)
// console.log("HeroComponent:", HeroComponent)

  return (
    <div>
        {/* came here */}
      {HeroComponent ? <HeroComponent /> : <div>Category &quot;{slug}&quot; not found</div>}
    </div>
  );
}
