import { cn } from "@/lib/utils";
import { Container } from "./Container";

type Props = React.HTMLAttributes<HTMLElement> & {
  containerClassName?: string;
  variant?: "default" | "muted" | "gradient" | "accent";
  size?: "sm" | "md" | "lg" | "xl";
  noContainer?: boolean;
};

const sizeMap = {
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-20 lg:py-24",
  lg: "py-20 sm:py-28 lg:py-32",
  xl: "py-24 sm:py-32 lg:py-40",
};

export function Section({
  className,
  containerClassName,
  variant = "default",
  size = "md",
  noContainer,
  children,
  ...props
}: Props) {
  return (
    <section
      className={cn(
        sizeMap[size],
        variant === "muted" && "bg-muted/30",
        variant === "gradient" && "bg-gradient-to-b from-muted/30 to-background",
        variant === "accent" && "bg-gradient-to-b from-primary/10 to-background",
        className
      )}
      {...props}
    >
      {noContainer ? (
        children
      ) : (
        <Container className={containerClassName}>{children}</Container>
      )}
    </section>
  );
}
