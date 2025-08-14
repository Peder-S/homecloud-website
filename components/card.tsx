import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-gray-200 dark:border-gray-800 p-6 ${className}`}
    >
      {children}
    </div>
  );
}
