import Link from "next/link";
import { PageShell } from "@/components/page-shell";

const links = [
  { href: "/vision", label: "Vision" },
  { href: "/architecture", label: "Architecture" },
  { href: "/research", label: "Research" },
  {
    href: "https://github.com/Public-Intelligence",
    label: "GitHub",
    external: true,
  },
];

export default function Home() {
  return (
    <PageShell>
      <section className="max-w-3xl space-y-8">
        <div className="space-y-5">
          <h1 className="text-5xl font-medium leading-tight text-foreground sm:text-6xl">
            Public Intelligence
          </h1>
          <p className="max-w-2xl text-2xl leading-9 text-muted-foreground">
            Building a globally distributed,
            <br />
            community-owned AI infrastructure.
          </p>
        </div>
        <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          Public Intelligence is an open engineering project researching and
          building decentralized AI infrastructure that enables communities to
          collectively host frontier open-source models.
        </p>
        <nav
          aria-label="Homepage links"
          className="flex flex-wrap gap-x-6 gap-y-3"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </section>
    </PageShell>
  );
}
