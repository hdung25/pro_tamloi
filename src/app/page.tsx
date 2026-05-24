import { HeroHome } from "@/components/home/hero-home";
import { UspStrip } from "@/components/usp-strip";
import { BrandStory } from "@/components/home/brand-story";
import { FeaturedProducts } from "@/components/home/featured-products";

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <UspStrip />
      <BrandStory />
      <FeaturedProducts />
    </>
  );
}
