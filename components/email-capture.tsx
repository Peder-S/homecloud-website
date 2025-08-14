"use client";

import { useState } from "react";
import Input from "./input";
import Button from "./button";

export default function EmailCapture() {
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
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
      <Input
        id="notify-email"
        label="Email"
        type="email"
        required
        className="flex-1"
      />
      <Button type="submit" className="sm:self-end">
        Notify me
      </Button>
    </form>
  );
}
