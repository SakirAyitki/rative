"use client";

import { useEffect } from "react";
import { DemoHeroGeometric } from "@/components/ui/hero";
import { Services } from "@/components/ui/services";
import { Testimonials } from "@/components/ui/testimonials";
import { Pricing } from "@/components/ui/pricing";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  useEffect(() => {
    // Sayfa yüklendiğinde en üste scroll
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <DemoHeroGeometric />
      <Services />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
