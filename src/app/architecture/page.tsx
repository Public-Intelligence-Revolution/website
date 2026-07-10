import { PageShell } from "@/components/page-shell";
import {
  OverallSystemDiagram,
  RequestFlowDiagram,
  GeographicSchedulingDiagram,
  DistributedInferenceDiagram,
  PlatformStackDiagram,
} from "@/components/architecture-diagrams";

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
      <article className="max-w-4xl mx-auto space-y-24">
        {/* HEADER */}
        <header className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-wider text-[#D9F99D]">System Blueprint</span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-[1.15]">
              Architecture
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground sm:text-2xl font-light">
              Public Intelligence is designed as independent but interconnected
              systems that together form globally distributed AI infrastructure.
            </p>
          </div>
        </header>

        {/* OVERALL SYSTEM */}
        <section aria-labelledby="system-heading" className="space-y-6 pt-6 border-t border-border/40">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#D9F99D]">01 // OVERVIEW</span>
              <h2 id="system-heading" className="text-lg font-semibold text-foreground mt-2">
                Overall System
              </h2>
            </div>
            <div className="md:col-span-2 space-y-4">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                The current architecture centers on three core responsibilities:
                public documentation, global scheduling, and contributed compute.
                The system is intentionally modular so each repository can evolve
                independently while preserving a shared architectural direction.
              </p>
            </div>
          </div>
          <OverallSystemDiagram />
        </section>

        {/* CORE COMPONENTS */}
        <section aria-labelledby="components-heading" className="space-y-8 pt-6 border-t border-border/40">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#D9F99D]">02 // COMPONENT STACKS</span>
            <h2 id="components-heading" className="text-2xl font-semibold tracking-tight text-foreground">
              Core Components
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Detailed breakdown of the active system actors running in the Public Intelligence mesh.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 pt-4">
            {components.map((component) => (
              <div key={component.name} className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D9F99D]" />
                  <h3 className="text-base font-semibold text-foreground">{component.name}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {component.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* REQUEST FLOW */}
        <section aria-labelledby="flow-heading" className="space-y-6 pt-6 border-t border-border/40">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#D9F99D]">03 // WORKFLOW</span>
              <h2 id="flow-heading" className="text-lg font-semibold text-foreground mt-2">
                Inference Request Flow
              </h2>
            </div>
            <div className="md:col-span-2 space-y-4">
              <ol className="space-y-3 text-sm leading-relaxed text-muted-foreground list-decimal pl-4">
                {requestFlow.map((step) => (
                  <li key={step} className="pl-1">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <RequestFlowDiagram />
        </section>

        {/* DISTRIBUTED INFERENCE */}
        <section aria-labelledby="inference-heading" className="space-y-6 pt-6 border-t border-border/40">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#D9F99D]">04 // SHARDING</span>
              <h2 id="inference-heading" className="text-lg font-semibold text-foreground mt-2">
                Distributed Inference
              </h2>
            </div>
            <div className="md:col-span-2 space-y-4">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                To serve frontier models that exceed the capacity of individual local nodes, the scheduling engine can shard layer workloads across multiple network participants.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Workload execution routes intermediate tensors sequentially through model shards, returning verified outputs back to the client interface.
              </p>
            </div>
          </div>
          <DistributedInferenceDiagram />
        </section>

        {/* GEOGRAPHIC SCHEDULING */}
        <section aria-labelledby="geo-heading" className="space-y-6 pt-6 border-t border-border/40">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#D9F99D]">05 // METRICS</span>
              <h2 id="geo-heading" className="text-lg font-semibold text-foreground mt-2">
                Geographic Scheduling
              </h2>
            </div>
            <div className="md:col-span-2 space-y-4">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Geographic awareness is a defining characteristic of the Scheduler.
                Scheduling decisions account for network latencies and regional compute capacities to route requests efficiently.
              </p>
              
              <div className="pt-2">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground/60 mb-3">Evaluated Metrics</p>
                <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                  {schedulingFactors.map((factor) => (
                    <li key={factor} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-[#D9F99D]" />
                      {factor}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <GeographicSchedulingDiagram />
        </section>

        {/* FUTURE ARCHITECTURE */}
        <section aria-labelledby="future-heading" className="space-y-6 pt-6 border-t border-border/40">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#D9F99D]">06 // PROTOCOLS</span>
              <h2 id="future-heading" className="text-lg font-semibold text-foreground mt-2">
                Future Architecture
              </h2>
            </div>
            <div className="md:col-span-2 space-y-4">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                The platform may expand into protocols, SDKs, monitoring,
                authentication, developer tools, benchmarking, and deployment tooling.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Each future component keeps a single responsibility and remains
                replaceable without redesigning the full platform stack.
              </p>
            </div>
          </div>
          <PlatformStackDiagram />
        </section>
      </article>
    </PageShell>
  );
}


