import { cn } from "@/lib/utils";
import * as React from "react";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const alignMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const sizeMap = {
  sm: { h: "text-2xl sm:text-3xl", p: "text-base" },
  md: { h: "text-3xl sm:text-4xl", p: "text-lg" },
  lg: { h: "text-4xl sm:text-5xl", p: "text-lg" },
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  size = "md",
  className,
}: Props) {
  const s = sizeMap[size];
  return (
    <div className={cn("mx-auto max-w-2xl", alignMap[align], className)}>
      {eyebrow ? (
        <p className="text-sm font-medium text-muted-foreground">{eyebrow}</p>
      ) : null}
      <h2 className={cn("mt-3 font-semibold tracking-tight", s.h)}>{title}</h2>
      {description ? (
        <p className={cn("mt-4 leading-relaxed text-muted-foreground", s.p)}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
