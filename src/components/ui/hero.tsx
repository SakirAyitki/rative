import { HeroGeometric } from "@/components/ui/shape-landing-hero"

const logos = [
  "/clients/logo1.png",
  "/clients/logo2.png",
  "/clients/logo3.png",
  "/clients/logo4.png",
  "/clients/logo5.png",
  "/clients/logo6.png",

];

export function DemoHeroGeometric() {
  return (
    <HeroGeometric
      title2="Sosyal Medya Analizinizi Yapın ve Stratejinizi Belirleyin"
      description="Rative; sosyal medya verilerinin takibi, rakip analizi, pazarlama stratejileri ve anlaşılabilir raporlar ile partnerlerinin pazarlama stratejilerini geliştirmelerine yardımcı olan kapsamlı bir hizmet sunar."
      logos={logos}
    />
  );
}