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
      <article className="max-w-4xl space-y-12">
        <header className="max-w-3xl space-y-5">
          <h1 className="text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Roadmap
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            The roadmap tracks what Public Intelligence is building now and what
            comes next. It is expected to evolve as the project progresses.
          </p>
        </header>

        <section className="max-w-3xl space-y-3">
          <h2 className="text-2xl font-medium text-foreground">
            Current Milestone
          </h2>
          <p className="text-lg leading-8 text-foreground">
            Phase 1 — Foundations
          </p>
          <p className="leading-8 text-muted-foreground">
            The current focus is establishing the long-term vision, researching
            distributed systems and AI infrastructure, designing the
            architecture, building core repositories, creating engineering
            standards, and establishing an AI-assisted development workflow.
          </p>
        </section>

        <section className="grid gap-10 md:grid-cols-2">
          <RoadmapGroup title="Completed" items={completed} />
          <RoadmapGroup title="In Progress" items={inProgress} />
          <RoadmapGroup title="Next" items={next} />
          <RoadmapGroup title="Future" items={future} />
        </section>
      </article>
    </PageShell>
  );
}

function RoadmapGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="space-y-4 border-t border-border pt-6">
      <h2 className="text-xl font-medium text-foreground">{title}</h2>
      <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
