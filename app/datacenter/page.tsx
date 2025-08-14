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
    <Section className="max-w-3xl mx-auto space-y-12">
      <header className="space-y-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">Datacenter Consulting</h1>
        <p className="text-gray-600 dark:text-gray-300">
          We deliver hands-on datacenter services for businesses in the Oslo area.
        </p>
      </header>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Services</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Rack and stack</li>
          <li>Structured cabling</li>
          <li>Hardware installation</li>
          <li>Component swaps</li>
          <li>On-site support</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="font-semibold">Which areas do you cover?</h3>
            <p>We currently serve datacenters in the greater Oslo region.</p>
          </Card>
          <Card>
            <h3 className="font-semibold">Do you handle emergency requests?</h3>
            <p>Yes, we offer rapid on-site assistance for critical incidents.</p>
          </Card>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Contact us</h2>
        <ContactForm />
      </div>
    </Section>
  );
}
