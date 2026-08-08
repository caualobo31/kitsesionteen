import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { InsideGallery } from "@/components/sections/InsideGallery";
import { WeekFlow } from "@/components/sections/WeekFlow";
import { NotBigKid } from "@/components/sections/NotBigKid";
import { Includes } from "@/components/sections/Includes";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Guarantee } from "@/components/sections/Guarantee";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA, Footer } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <InsideGallery />
      <WeekFlow />
      <NotBigKid />
      <Includes />
      <Testimonials />
      <Pricing />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
