import { Hero } from "@/components/home/Hero";
import { Brief } from "@/components/home/Brief";
import { ThisWeek } from "@/components/home/ThisWeek";
import { TheFiftyTwo } from "@/components/home/TheFiftyTwo";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Sponsor } from "@/components/home/Sponsor";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Brief />
      <ThisWeek />
      <TheFiftyTwo />
      <HowItWorks />
      <Sponsor />
    </>
  );
}
