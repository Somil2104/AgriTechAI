import SubscribeEmailInput from "@/components/SubscribeEmailInput";
import HeroSection from "@/components/hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <SubscribeEmailInput className="bg-accent" />
    </div>
  );
}
