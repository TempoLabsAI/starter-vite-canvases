import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  children: ReactNode;
}

export function Button({
  variant = "solid",
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-[13px] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 disabled:opacity-50 disabled:pointer-events-none";
  const styles =
    variant === "outline"
      ? "border border-white/15 bg-transparent text-white hover:bg-white/5"
      : "bg-white text-black hover:bg-white/90";

  return (
    <button className={`${base} ${styles} ${className}`.trim()} {...rest}>
      {children}
    </button>
  );
}
