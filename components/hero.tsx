"use client";

import { useEffect, useState } from "react";
import Button from "./button";

export default function Hero() {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(true), []);
  return (
    <div
      className={`flex flex-col items-center text-center gap-6 transition-all duration-700 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <h1 className="text-4xl sm:text-6xl font-bold">Spark Consulting</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Practical consulting for modern teams.
      </p>
      <div className="mt-4 flex flex-col sm:flex-row gap-4">
        <Button href="/datacenter" className="text-lg">
          Datacenter Consulting
        </Button>
        <Button href="/ai" variant="secondary" className="text-lg">
          AI Consulting
        </Button>
      </div>
    </div>
  );
}
