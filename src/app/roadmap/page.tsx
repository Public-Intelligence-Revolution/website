import { PageShell } from "@/components/page-shell";

const completed = [
  "Long-term vision, mission, and engineering philosophy",
  "Research into Petals, Ray, Kubernetes Scheduler, distributed scheduling, node communication, and AI infrastructure fundamentals",
  "Initial system architecture and website information architecture",
  "GitHub organization, Scheduler repository, and Website repository",
  "Website foundation, layout, navigation, and repository documentation",
  "AI-assisted development workflow using Codex",
];

const inProgress = [
  "Expanding the Website",
  "Refining system architecture",
  "Improving documentation",
  "Preparing the Scheduler implementation",
];

const next = [
  "Complete the Vision page",
  "Complete the Architecture page",
  "Complete the Research section",
  "Publish technical documentation",
  "Deploy the website",
  "Begin Scheduler core, node registration, heartbeat handling, health monitoring, geographic scheduling, and resource tracking",
  "Define the Node communication protocol and runtime responsibilities",
];

const future = [
  "Distributed inference",
  "Multi-node execution",
  "Networking protocols",
  "Authentication",
  "Monitoring",
  "SDKs",
  "Developer tooling",
  "Community node deployment",
  "Public alpha network",
];

export default function RoadmapPage() {
  return (
    <PageShell>
      <article className="max-w-4xl mx-auto space-y-20">
        {/* HEADER */}
        <header className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground/60">Development Timeline</span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-[1.15]">
              Roadmap
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground sm:text-2xl font-light">
              Tracking what Public Intelligence is building now and what
              comes next. The roadmap evolves as the project progresses.
            </p>
          </div>
        </header>

        {/* TIMELINE */}
        <div className="relative border-l border-border/40 pl-8 ml-4 space-y-16 py-4">
          
          {/* 1. CURRENT / IN PROGRESS (Highlighted Active) */}
          <div className="relative">
            {/* Active Indicator Dot */}
            <span className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background border border-[#D9F99D]">
              <span className="h-2 w-2 rounded-full bg-[#D9F99D]" />
            </span>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#D9F99D]">Active Milestone</span>
                <h2 className="text-xl font-semibold text-foreground">Phase 1 — Foundations & Core Design</h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl">
                Establishing the long-term vision, researching distributed systems and AI infrastructure, designing the first system architecture, and preparing the Scheduler core implementation.
              </p>
              
              <div className="pt-2">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground/50 mb-3">Tasks in Progress</p>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  {inProgress.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D9F99D] mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 2. COMPLETED */}
          <div className="relative opacity-85">
            {/* Completed Indicator Dot */}
            <span className="absolute -left-[40px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-border border border-muted/30" />

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground/50">Completed Milestones</span>
                <h2 className="text-lg font-semibold text-foreground">Phase 0 — Project Initiation</h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl">
                Configured the core repositories, structured the organization, completed foundational literature research, and deployed basic codebase structures.
              </p>
              
              <div className="pt-2">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground/50 mb-3 font-semibold">Completed Tasks</p>
                <ul className="space-y-2.5 text-sm text-muted-foreground/80 list-disc pl-4">
                  {completed.map((item) => (
                    <li key={item} className="pl-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 3. NEXT */}
          <div className="relative">
            {/* Next Indicator Dot */}
            <span className="absolute -left-[40px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-background border border-muted-foreground/30" />

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground/50">Next Up</span>
                <h2 className="text-lg font-semibold text-foreground">Phase 2 — Core Scheduling & Protocols</h2>
              </div>
              
              <div className="pt-2">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground/50 mb-3">Planned Tasks</p>
                <ul className="space-y-2.5 text-sm text-muted-foreground/95 list-disc pl-4">
                  {next.map((item) => (
                    <li key={item} className="pl-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 4. FUTURE */}
          <div className="relative">
            {/* Future Indicator Dot */}
            <span className="absolute -left-[40px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-background border border-muted-foreground/20" />

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground/50">Future Milestones</span>
                <h2 className="text-lg font-semibold text-foreground">Phase 3 — Scale & Decentralization</h2>
              </div>
              
              <div className="pt-2">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground/50 mb-3">Long-Term Objectives</p>
                <ul className="space-y-2.5 text-sm text-muted-foreground/75 list-disc pl-4">
                  {future.map((item) => (
                    <li key={item} className="pl-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </article>
    </PageShell>
  );
}

