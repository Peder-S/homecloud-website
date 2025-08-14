"use client";

import { useState } from "react";
import Input from "./input";
import Button from "./button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return <p className="text-center">Thanks! We&apos;ll be in touch.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Input id="name" label="Name" required />
      <Input id="email" label="Email" type="email" required />
      <Input id="company" label="Company" required />
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          required
          className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-background px-3 py-2 focus:border-accent focus:ring-2 focus:ring-accent"
        ></textarea>
      </div>
      <Button type="submit" className="mt-2">
        Send
      </Button>
    </form>
  );
}
