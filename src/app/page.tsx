import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Logo } from "@/components/logo";
import { SystemDiagram } from "@/components/system-diagram";

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
      <div className="max-w-4xl mx-auto space-y-24">
        {/* HERO SECTION */}
        <section className="space-y-6">
          <Logo className="w-8 h-8 text-foreground/80" />
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl sm:leading-[1.1] max-w-3xl">
              Public Intelligence
            </h1>
            <p className="max-w-2xl text-xl leading-normal text-muted-foreground sm:text-2xl font-light">
              Building a globally distributed,
              <br />
              community-owned AI infrastructure.
            </p>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground/80">
            Public Intelligence is an open engineering initiative researching
            and building decentralized AI infrastructure that enables
            communities to collectively host frontier open-source AI models.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/architecture"
              className="inline-flex h-9 items-center justify-center rounded-md bg-foreground px-4 text-xs font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Explore the Architecture
            </Link>
            <Link
              href="https://github.com/Public-Intelligence-Revolution"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md border border-border/60 bg-transparent px-4 text-xs font-medium text-foreground transition-colors hover:bg-muted/30"
            >
              GitHub
            </Link>
          </div>
        </section>

        {/* MEMORABLE VISUAL MOMENT: SYSTEM DIAGRAM */}
        <section aria-labelledby="topology-heading" className="space-y-6 pt-6 border-t border-border/40">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#D9F99D]">01 // ARCHITECTURAL TOPOLOGY</span>
            <h2 id="topology-heading" className="text-2xl font-semibold tracking-tight text-foreground">
              Distributed Inference Coordination
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              A conceptual schematic showing how workloads are routed from client interfaces to geographic nodes. The active path highlights the coordinated execution of an inference query.
            </p>
          </div>
          <SystemDiagram />
        </section>

        {/* CORE PRINCIPLES */}
        <section aria-labelledby="principles-heading" className="space-y-8 pt-6 border-t border-border/40">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#D9F99D]">02 // FOUNDATIONAL PRINCIPLES</span>
            <h2 id="principles-heading" className="text-2xl font-semibold tracking-tight text-foreground">
              System Values
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Architectural decisions are guided by long-term durability and decentralized accessibility.
            </p>
          </div>
          
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 pt-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-foreground">
                <svg className="w-5 h-5 text-[#D9F99D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                  <circle cx="6" cy="6" r="1.5" fill="currentColor" fillOpacity="0.4" />
                  <circle cx="18" cy="6" r="1.5" fill="currentColor" fillOpacity="0.4" />
                  <circle cx="6" cy="18" r="1.5" fill="currentColor" fillOpacity="0.4" />
                  <circle cx="18" cy="18" r="1.5" fill="currentColor" fillOpacity="0.4" />
                  <path d="M6 6L12 12M18 6L12 12M6 18L12 12M18 18L12 12" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
                </svg>
                <h3 className="text-base font-semibold">Community Owned</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Infrastructure owned and operated by the community. Participants collectively contribute compute resources—GPUs, CPUs, storage, and bandwidth—to host frontier models without centralized control.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-foreground">
                <svg className="w-5 h-5 text-[#D9F99D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="currentColor" />
                  <path d="M4 16L12 20L20 16" stroke="currentColor" strokeOpacity="0.5" />
                  <path d="M4 8V16" stroke="currentColor" strokeOpacity="0.5" />
                  <path d="M20 8V16" stroke="currentColor" strokeOpacity="0.5" />
                  <path d="M12 12V20" stroke="currentColor" strokeOpacity="0.5" />
                </svg>
                <h3 className="text-base font-semibold">Open Source & Transparent</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The entire platform is openly developed, inspectable, and modular. We prioritize architectural transparency so that individual modules can be audited, modified, or replaced by anyone.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-foreground">
                <svg className="w-5 h-5 text-[#D9F99D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" />
                  <line x1="8" y1="8" x2="16" y2="8" stroke="currentColor" strokeOpacity="0.5" />
                  <line x1="8" y1="12" x2="14" y2="12" stroke="currentColor" strokeOpacity="0.5" />
                  <line x1="8" y1="16" x2="12" y2="16" stroke="currentColor" strokeOpacity="0.5" />
                </svg>
                <h3 className="text-base font-semibold">Documentation First</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We document our designs and reasoning before implementation. High-quality engineering specs serve as our primary source of truth, aligning contributors across repositories.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-foreground">
                <svg className="w-5 h-5 text-[#D9F99D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.3" />
                  <line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" strokeOpacity="0.3" />
                  <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeOpacity="0.3" />
                  <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                </svg>
                <h3 className="text-base font-semibold">Durable Simplicity</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Preferring simple, modular components over monolithic and complex systems. We construct systems that remain maintainable and operational over years, resisting engineering bloat.
              </p>
            </div>
          </div>
        </section>

        {/* CURRENT MILESTONE */}
        <section aria-labelledby="milestone-heading" className="space-y-6 pt-6 border-t border-border/40">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D9F99D]" />
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">03 // ACTIVE ROADMAP</span>
          </div>
          <div className="grid gap-6 md:grid-cols-3 pt-2">
            <div className="md:col-span-1">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground/60 mb-1">Current Milestone</p>
              <h2 id="milestone-heading" className="text-lg font-semibold text-foreground">
                Phase 1 — Research & Architecture
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Researching distributed AI infrastructure and designing the first
                production architecture for Public Intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* DOCUMENTATION FOOTER */}
        <footer className="space-y-8 pt-16 border-t border-border/20 text-xs text-muted-foreground/60">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="inline-flex items-center gap-2">
              <Logo className="w-4 h-4 text-muted-foreground/50" />
              <span>Public Intelligence — Open Infrastructure Initiative</span>
            </div>
            <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#D9F99D] transition-colors duration-150"
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center justify-between text-[10px] border-t border-border/10 pt-6 font-mono opacity-80">
            <p>© {new Date().getFullYear()} Public Intelligence. Released under the MIT License.</p>
            <p>VER_0.1.0 // FOUNDATIONAL_RELEASE</p>
          </div>
        </footer>
      </div>
    </PageShell>
  );
}


