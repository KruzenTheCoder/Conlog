import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const button = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-white hover:bg-brand-light shadow-md hover:shadow-glow",
        secondary:
          "bg-slate-900 text-slate-50 border border-slate-700 hover:bg-slate-800",
        ghost:
          "bg-transparent text-slate-50 hover:bg-slate-900/60 border border-transparent hover:border-slate-800",
        outline:
          "bg-transparent text-brand-light border border-brand/40 hover:bg-brand/10",
      },
      size: {
        sm: "text-xs px-3.5 py-2",
        md: "text-sm px-5 py-2.5",
        lg: "text-base px-6 py-3",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type ButtonBaseProps = VariantProps<typeof button> & {
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { className, variant, size } = props;
  const classes = cn(button({ variant, size }), className);

  if ("href" in props && props.href) {
    const { href, variant: _v, size: _s, className: _c, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest} />
    );
  }
  const { variant: _v2, size: _s2, className: _c2, href: _h, ...rest } =
    props as ButtonAsButton;
  return <button className={classes} {...rest} />;
}
