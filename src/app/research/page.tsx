import { PageShell } from "@/components/page-shell";

const categories = [
  {
    name: "Distributed Systems",
    description:
      "Research on coordination, reliability, scaling, and the behavior of systems made from independently operated machines.",
    areas: ["Distributed scheduling", "Peer-to-peer networks", "Volunteer computing"],
  },
  {
    name: "AI Infrastructure",
    description:
      "Research on the systems required to host, serve, and operate frontier open-source AI models across shared infrastructure.",
    areas: ["AI infrastructure fundamentals", "Distributed inference", "Resource utilization"],
  },
  {
    name: "Scheduling",
    description:
      "Research on assigning workloads to suitable nodes based on capability, health, latency, load, and network conditions.",
    areas: ["Kubernetes Scheduler", "Ray", "Load balancing"],
  },
  {
    name: "Node Communication",
    description:
      "Research on how nodes advertise resources, report health, send heartbeats, receive assignments, and return results.",
    areas: ["Resource advertisement", "Heartbeat design", "Health checks"],
  },
  {
    name: "Geographic Scheduling",
    description:
      "Research on location-aware scheduling decisions that account for latency, proximity, regional capacity, and reliability.",
    areas: ["Latency", "Geographic proximity", "Regional availability"],
  },
  {
    name: "System Inspirations",
    description:
      "Research into existing projects and patterns that inform the architecture without defining it.",
    areas: ["Petals", "Kubernetes", "Linux"],
  },
];

export default function ResearchPage() {
  return (
    <PageShell>
      <article className="max-w-4xl space-y-12">
        <header className="max-w-3xl space-y-5">
          <h1 className="text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Research
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Public Intelligence is in the foundation stage. Research focuses on
            the distributed systems and AI infrastructure needed before
            production implementation.
          </p>
        </header>

        <section className="space-y-8">
          {categories.map((category) => (
            <section
              key={category.name}
              className="border-t border-border pt-6"
            >
              <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
                <div>
                  <h2 className="text-xl font-medium text-foreground">
                    {category.name}
                  </h2>
                </div>
                <div className="space-y-4">
                  <p className="leading-8 text-muted-foreground">
                    {category.description}
                  </p>
                  <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                    {category.areas.map((area) => (
                      <li key={area}>{area}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </section>
      </article>
    </PageShell>
  );
}
