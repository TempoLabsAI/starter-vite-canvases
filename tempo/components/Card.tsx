import type { ReactNode } from "react";

interface CardProps {
  label: string;
  title: string;
  children: ReactNode;
}

export function Card({ label, title, children }: CardProps) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5 backdrop-blur-sm transition-colors hover:border-white/10 hover:bg-white/[0.04]">
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-white/40">
        {label}
      </p>
      <h3 className="mb-2 text-[15px] font-semibold text-white">{title}</h3>
      <p className="text-[13px] leading-relaxed text-white/50">{children}</p>
    </div>
  );
}
