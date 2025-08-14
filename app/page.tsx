import type { Metadata } from "next";
import Section from "@/components/section";
import Hero from "@/components/hero";

export const metadata: Metadata = {
  title: "Home",
  description: "Practical consulting for modern teams.",
};

export default function Home() {
  return (
    <Section className="flex items-center justify-center min-h-[calc(100vh-160px)]">
      <Hero />
    </Section>
  );
}
