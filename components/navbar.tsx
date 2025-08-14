import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import SparkIcon from "./spark-icon";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
        <SparkIcon className="h-6 w-6 text-accent" />
        Spark Consulting 835 906 272
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/datacenter" className="hover:text-accent">
          Datacenter
        </Link>
        <Link href="/ai" className="hover:text-accent">
          AI
        </Link>
        <Link href="/about" className="hover:text-accent">
          About
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
