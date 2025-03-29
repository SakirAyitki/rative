import { DemoHeroGeometric } from "@/components/ui/hero";
import { Services } from "@/components/ui/services";
import { Testimonials } from "@/components/ui/testimonials";

export default function Home() {
  return (
    <main>
      <DemoHeroGeometric />
      <Services />
      <Testimonials />
    </main>
  );
}
