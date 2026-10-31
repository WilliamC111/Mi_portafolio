import type { HTMLAttributes, ReactNode } from "react";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
};

export function Reveal({
  children,
  delay = 0,
  ...props
}: RevealProps) {
  return (
    <div data-reveal data-delay={delay * 1000} {...props}>
      {children}
    </div>
  );
}
