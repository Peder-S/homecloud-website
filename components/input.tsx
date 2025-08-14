import type { InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
};

export default function Input({ label, id, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        className={`w-full rounded-md border border-gray-300 dark:border-gray-700 bg-background px-3 py-2 focus:border-accent focus:ring-2 focus:ring-accent ${className}`}
        {...props}
      />
    </div>
  );
}
