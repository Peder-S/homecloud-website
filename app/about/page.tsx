import type { Metadata } from "next";
import Section from "@/components/section";

export const metadata: Metadata = {
  title: "About Spark Consulting",
  description: "Background and values of Spark Consulting.",
};

export default function AboutPage() {
  return (
    <Section className="max-w-3xl mx-auto space-y-8 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold">About Spark Consulting</h1>
      <p className="text-gray-600 dark:text-gray-300">
        Spark Consulting provides practical guidance for modern teams in the Oslo area, focusing on planned multi-server projects and system maintenance.
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        We specialise in datacenter and emerging AI solutions, delivering straightforward support without emergency services.
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        Contact
        <a href="mailto:peder@spark.consulting.no" className="text-accent underline ml-1">
          peder@spark.consulting.no
        </a>
        for more information.
      </p>
    </Section>
  );
}
