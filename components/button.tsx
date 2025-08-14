import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
};

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent transition-colors";
  const variants: Record<string, string> = {
    primary: "bg-accent text-accent-foreground hover:bg-accent/90",
    secondary:
      "border border-accent text-accent hover:bg-accent hover:text-accent-foreground",
  };
  const classes = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
