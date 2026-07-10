import Link from "next/link";
import { PageShell } from "@/components/page-shell";

const contributors = [
  {
    role: "Engineers",
    description: "Interested in distributed systems, load scheduling, node runtimes, security layers, telemetry, and client tooling.",
    icon: (
      <svg className="w-5 h-5 text-[#D9F99D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="currentColor" />
      </svg>
    ),
  },
  {
    role: "Researchers",
    description: "Studying distributed inference, latency optimization, P2P network topologies, and coordinate scheduler bounds.",
    icon: (
      <svg className="w-5 h-5 text-[#D9F99D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" stroke="currentColor" />
      </svg>
    ),
  },
  {
    role: "Writers & Reviewers",
    description: "Refining specifications, architecture diagrams, API schemas, design docs, and onboarding flows.",
    icon: (
      <svg className="w-5 h-5 text-[#D9F99D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" stroke="currentColor" />
      </svg>
    ),
  },
  {
    role: "Community Members",
    description: "Supporting node operators, reviewing interface clarity, hosting discussions, and organizing work streams.",
    icon: (
      <svg className="w-5 h-5 text-[#D9F99D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" />
      </svg>
    ),
  },
];

const contributionPaths = [
  "Study the project specifications and architecture before opening PRs.",
  "Identify documentation typos, expand setup guides, or add research reviews.",
  "Submit issues with clear reproduction steps for node or scheduler runtimes.",
  "Participate in design discussions to align on protocol structures.",
  "Develop code implementations for active milestone tasks.",
];

export default function ContributePage() {
  return (
    <PageShell>
      <article className="max-w-4xl mx-auto space-y-24">
        {/* HEADER */}
        <header className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground/60">Join the Initiative</span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-[1.15]">
              Contribute
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground sm:text-2xl font-light">
              Public Intelligence is built as an open engineering project. Contributions should strengthen the architecture, documentation, and long-term sustainability of the platform.
            </p>
          </div>
        </header>

        {/* WHO SHOULD CONTRIBUTE */}
        <section aria-labelledby="who-heading" className="space-y-8 pt-6 border-t border-border/40">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#D9F99D]">01 // ROLES</span>
            <h2 id="who-heading" className="text-2xl font-semibold tracking-tight text-foreground">
              Who Can Contribute
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              We welcome contributions across several key roles to support a decentralized AI ecosystem.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 pt-4">
            {contributors.map((c) => (
              <div key={c.role} className="space-y-3">
                <div className="flex items-center gap-3 text-foreground">
                  {c.icon}
                  <h3 className="text-base font-semibold">{c.role}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW TO CONTRIBUTE */}
        <section aria-labelledby="how-heading" className="space-y-6 pt-6 border-t border-border/40">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#D9F99D]">02 // CHANNELS</span>
              <h2 id="how-heading" className="text-lg font-semibold text-foreground mt-2">
                Contribution Pathways
              </h2>
            </div>
            <div className="md:col-span-2 space-y-4">
              <ul className="space-y-3.5 text-sm leading-relaxed text-muted-foreground list-decimal pl-4">
                {contributionPaths.map((path) => (
                  <li key={path} className="pl-1">
                    {path}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ENGINEERING EXPECTATIONS */}
        <section aria-labelledby="standards-heading" className="space-y-6 pt-6 border-t border-border/40">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#D9F99D]">03 // STANDARDS</span>
              <h2 id="standards-heading" className="text-lg font-semibold text-foreground mt-2">
                Engineering Expectations
              </h2>
            </div>
            <div className="md:col-span-2 space-y-4">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Contributors should research before designing, design before
                implementing, keep changes focused, prefer simple systems, document
                reasoning, avoid unnecessary dependencies, and verify work before it
                is considered complete.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                We favor clear specifications and clean documentation over rushed implementation. Every repository should maintain detailed design documents in its `docs/` folder.
              </p>
            </div>
          </div>
        </section>

        {/* GITHUB & CHANNELS */}
        <section aria-labelledby="github-heading" className="space-y-6 pt-6 border-t border-border/40">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#D9F99D]">04 // REPOS</span>
              <h2 id="github-heading" className="text-lg font-semibold text-foreground mt-2">
                GitHub Organization
              </h2>
            </div>
            <div className="md:col-span-2 space-y-4">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Development, issues, and discussions happen in the official Public Intelligence GitHub organization. 
              </p>
              <div className="pt-2">
                <Link
                  href="https://github.com/Public-Intelligence-Revolution"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-foreground px-4 text-xs font-medium text-background transition-colors hover:bg-foreground/90"
                >
                  Visit GitHub Organization
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </PageShell>
  );
}

