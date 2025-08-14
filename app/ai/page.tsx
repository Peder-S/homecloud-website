import type { Metadata } from "next";
import Section from "@/components/section";

import EmailCapture from "@/components/email-capture";

export const metadata: Metadata = {
  title: "AI Consulting",
  description:
    "Future AI offerings: RAG, agents, automation, and internal tooling.",
};

export default function AIPage() {
  return (
    <Section className="max-w-3xl mx-auto space-y-8 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold">Coming soon…</h1>
      <p className="text-gray-600 dark:text-gray-300">
        We&apos;re building AI solutions for retrieval-augmented generation, agents,
        automation, and internal tooling.
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        Contact
        <a
          href="mailto:peder@spark.consulting.no"
          className="text-accent underline ml-1"
        >
          peder@spark.consulting.no
        </a>
        if you&apos;re interested.
      </p>

    </Section>
  );
}
