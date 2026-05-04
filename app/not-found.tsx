import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-32">
      <Container>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-light/80">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight">
          We couldn&apos;t find that page.
        </h1>
        <p className="mt-3 max-w-md text-slate-300">
          The page you&apos;re looking for may have moved, or never existed.
        </p>
        <div className="mt-8 flex gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/solutions" variant="ghost">
            Explore solutions
          </Button>
        </div>
      </Container>
    </section>
  );
}
