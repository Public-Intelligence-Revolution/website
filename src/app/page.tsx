import Link from "next/link";
import { PageShell } from "@/components/page-shell";

const links = [
  { href: "/vision", label: "Vision" },
  { href: "/architecture", label: "Architecture" },
  { href: "/research", label: "Research" },
  { href: "/roadmap", label: "Roadmap" },
  {
    href: "https://github.com/Public-Intelligence-Revolution",
    label: "GitHub",
    external: true,
  },
];

export default function Home() {
  return (
    <PageShell>
      <section className="max-w-3xl space-y-10">
        <div className="space-y-7">
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
            Public Intelligence is an open engineering initiative researching
            and building decentralized AI infrastructure that enables
            communities to collectively host frontier open-source AI models.
          </p>
        </div>

        <nav
          aria-label="Quick links"
          className="flex flex-wrap gap-x-6 gap-y-3 text-sm"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <section aria-labelledby="current-milestone" className="space-y-3">
          <p
            id="current-milestone"
            className="text-sm font-medium text-foreground"
          >
            Current Milestone
          </p>
          <p className="text-lg leading-8 text-foreground">
            Phase 1 — Research & Architecture
          </p>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            Researching distributed AI infrastructure and designing the first
            production architecture for Public Intelligence.
          </p>
        </section>
      </section>
    </PageShell>
  );
}
