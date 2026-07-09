import { PageShell } from "@/components/page-shell";

export default function VisionPage() {
  return (
    <PageShell>
      <article className="max-w-3xl space-y-12">
        <header className="space-y-5">
          <h1 className="text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Vision
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Public Intelligence is an open engineering initiative building
            globally distributed, community-owned AI infrastructure.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium text-foreground">
            What Public Intelligence Is
          </h2>
          <p className="leading-8 text-muted-foreground">
            Public Intelligence exists to help individuals and organizations
            contribute compute resources to a shared network for hosting,
            serving, and improving frontier open-source AI models. The project
            is open source, modular, and designed for long-term sustainability.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium text-foreground">
            Why It Exists
          </h2>
          <p className="leading-8 text-muted-foreground">
            Frontier AI currently depends on large amounts of infrastructure
            controlled by a small number of organizations. Open-source models
            are becoming more capable, but serving them at scale remains
            expensive and operationally complex. Public Intelligence is
            researching and building a distributed alternative.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium text-foreground">
            Long-Term Direction
          </h2>
          <p className="leading-8 text-muted-foreground">
            The long-term goal is public infrastructure for AI: a network of
            independently operated systems that can collectively function as one
            global AI platform. No single repository represents the full
            project. Website, Scheduler, Node, protocols, SDKs, monitoring, and
            developer tools are expected to evolve as focused parts of a larger
            ecosystem.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium text-foreground">
            Engineering Philosophy
          </h2>
          <p className="leading-8 text-muted-foreground">
            Public Intelligence prioritizes long-term thinking, simplicity,
            documentation-first development, modularity, readability, minimal
            dependencies, and open engineering. The project favors strong
            foundations over visible speed and treats future contributors as
            first-class stakeholders.
          </p>
        </section>
      </article>
    </PageShell>
  );
}
