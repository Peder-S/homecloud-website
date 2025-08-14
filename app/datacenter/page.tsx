import type { Metadata } from "next";
import Section from "@/components/section";
import Card from "@/components/card";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Datacenter Consulting",
  description:
    "Hands-on datacenter services for businesses in the Oslo area.",
};

export default function DatacenterPage() {
  return (
    <Section className="max-w-3xl mx-auto space-y-12 text-center">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold">Datacenter Consulting</h1>
        <p className="text-gray-600 dark:text-gray-300">
          We deliver hands-on datacenter services for businesses in the Oslo area.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          I do not handle critical cases; work is planned for multi-server installs or
          maintenance.
        </p>
      </header>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Services</h2>
        <ul className="mx-auto inline-block list-disc list-inside space-y-2 text-left text-gray-700 dark:text-gray-300">
          <li>Rack and stack</li>
          <li>Structured cabling</li>
          <li>Hardware installation</li>
          <li>Component swaps</li>
          <li>Planned maintenance</li>
          <li>Multi-server deployments</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
        <div className="space-y-4">
          <Card className="text-center">
            <h3 className="font-semibold">Which areas do you cover?</h3>
            <p>We currently serve datacenters in the greater Oslo region.</p>
          </Card>
          <Card className="text-center">
            <h3 className="font-semibold">Do you handle emergency requests?</h3>
            <p>
              No. Engagements are scheduled in advance for installing multiple
              servers or performing maintenance.
            </p>
          </Card>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Contact us</h2>
        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
