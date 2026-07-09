import { PageShell } from "@/components/page-shell";

const components = [
  {
    name: "Website",
    description:
      "The public face of the project. It explains the project, publishes documentation and research, presents the architecture, and supports community onboarding. It does not perform distributed inference.",
  },
  {
    name: "Scheduler",
    description:
      "The coordination system responsible for node registration, resource tracking, geographic scheduling, load balancing, health monitoring, and work assignment.",
  },
  {
    name: "Node",
    description:
      "Software operated by contributors that advertises hardware capabilities, reports health, sends heartbeats, executes workloads, and returns results.",
  },
];

const requestFlow = [
  "A user submits an inference request.",
  "The Scheduler receives the request.",
  "The Scheduler evaluates available nodes.",
  "A suitable node, or set of nodes, is selected.",
  "The selected node executes the workload.",
  "Results are returned to the user.",
];

const schedulingFactors = [
  "Network latency",
  "Geographic proximity",
  "Resource availability",
  "Current node load",
  "Reliability",
  "Health status",
];

export default function ArchitecturePage() {
  return (
    <PageShell>
      <article className="max-w-4xl space-y-12">
        <header className="max-w-3xl space-y-5">
          <h1 className="text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Architecture
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Public Intelligence is designed as independent but interconnected
            systems that together form globally distributed AI infrastructure.
          </p>
        </header>

        <section className="max-w-3xl space-y-4">
          <h2 className="text-2xl font-medium text-foreground">
            Overall System
          </h2>
          <p className="leading-8 text-muted-foreground">
            The current architecture centers on three core responsibilities:
            public documentation, global scheduling, and contributed compute.
            The system is intentionally modular so each repository can evolve
            independently while preserving a shared architectural direction.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-medium text-foreground">
            Core Components
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {components.map((component) => (
              <section key={component.name} className="space-y-3">
                <h3 className="text-lg font-medium text-foreground">
                  {component.name}
                </h3>
                <p className="text-sm leading-7 text-muted-foreground">
                  {component.description}
                </p>
              </section>
            ))}
          </div>
        </section>

        <section className="max-w-3xl space-y-5">
          <h2 className="text-2xl font-medium text-foreground">
            Request Flow
          </h2>
          <ol className="space-y-3 text-muted-foreground">
            {requestFlow.map((step) => (
              <li key={step} className="leading-7">
                {step}
              </li>
            ))}
          </ol>
          <p className="leading-8 text-muted-foreground">
            Future versions may involve multiple nodes collaborating on a single
            inference request, but those implementation details remain open.
          </p>
        </section>

        <section className="max-w-3xl space-y-5">
          <h2 className="text-2xl font-medium text-foreground">
            Geographic Scheduling
          </h2>
          <p className="leading-8 text-muted-foreground">
            Geographic awareness is a defining characteristic of the Scheduler.
            Scheduling decisions should account for where capacity exists and
            how well that capacity can serve a given request.
          </p>
          <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            {schedulingFactors.map((factor) => (
              <li key={factor}>{factor}</li>
            ))}
          </ul>
        </section>

        <section className="max-w-3xl space-y-4">
          <h2 className="text-2xl font-medium text-foreground">
            Future Architecture
          </h2>
          <p className="leading-8 text-muted-foreground">
            The platform may expand into protocols, SDKs, monitoring,
            authentication, developer tools, benchmarking, deployment tooling,
            and other focused repositories. Each future component should keep a
            single responsibility and remain replaceable without redesigning the
            full platform.
          </p>
        </section>
      </article>
    </PageShell>
  );
}
