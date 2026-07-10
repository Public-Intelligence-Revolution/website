import { PageShell } from "@/components/page-shell";
import { PageHeader } from "@/components/page-header";
import { OverallSystemDiagram } from "@/components/architecture-diagrams";

export default function ArchitecturePage() {
  return (
    <PageShell>
      <article className="max-w-4xl mx-auto space-y-24">
        <PageHeader
          kicker="System Architecture"
          title="Architecture"
          description="The technical model and system boundaries for distributed AI infrastructure."
        />

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
          <OverallSystemDiagram />
        </section>
      </article>
    </PageShell>
  );
}
