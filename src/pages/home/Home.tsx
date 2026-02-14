import { useEffect } from "react"
import "./Home.css"
import {
  HeroSection,
  CompanyIntro,
  WhyUsSection,
  ProductsSection,
  CaseStudiesSection,
  TeamSection,
  ContactCTA,
  SectionTitle,
  SectionDivider,
  SlphHero,
  GeoOptixShowcaseB,
  GeoOptixBoxes,
} from "../../components/home"

export const Home = () => {
  useEffect(() => {
    document.title = "Solpire 溯湃科技 - AI赋能千行百业";
  }, []);

  useEffect(() => {
    document.body.classList.add("home-body")
    return () => document.body.classList.remove("home-body")
  }, [])

  return (
    <>
      {/* 1. Hero - Company Branding */}
      <HeroSection />

      {/* 2. Company Introduction */}
      <CompanyIntro />

      {/* 2b. Why Us - Pain Points → Solutions */}
      <WhyUsSection />

      {/* 7. SLPH Hero with Solpire Device */}
      <SlphHero />

      {/* 7b. GeoOptix Showcase — 3 variants (pick one, delete the other two) */}
      <GeoOptixShowcaseB />

      {/* 8. GeoOptix glass-morphism info boxes */}
      <GeoOptixBoxes />

      {/* 10. Products - 3 core products with demo links */}
      <ProductsSection />

      {/* 11. Case Studies */}
      <CaseStudiesSection />

      {/* 12. Team Section */}
      <SectionTitle title="关于我们" variant="about" />
      <SectionDivider variant="image" imageSrc="/assets/images/line-2.svg" imageClassName="divider divider-6" />
      <TeamSection />

      {/* 13. Contact CTA */}
      <ContactCTA />
    </>
  )
}
