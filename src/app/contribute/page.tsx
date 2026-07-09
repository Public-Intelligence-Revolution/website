import Link from "next/link";
import { PageShell } from "@/components/page-shell";

const contributors = [
  "Engineers interested in distributed systems, scheduling, node runtimes, AI infrastructure, observability, and developer tooling",
  "Researchers studying distributed inference, geographic scheduling, peer-to-peer networks, volunteer computing, and related systems",
  "Writers and reviewers who can improve technical documentation, architecture explanations, and onboarding material",
  "Community members who want to help make the project easier to understand and participate in",
];

const contributionPaths = [
  "Read the project documentation and understand the current stage before proposing changes.",
  "Improve website documentation, research summaries, architecture explanations, or contributor onboarding.",
  "Review architecture and engineering documents for clarity, consistency, and missing assumptions.",
  "Contribute to core repositories as they become ready for implementation work.",
  "Open focused issues or pull requests that align with the documented roadmap.",
];

export default function ContributePage() {
  return (
    <PageShell>
      <article className="max-w-3xl space-y-12">
        <header className="space-y-5">
          <h1 className="text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Contribute
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Public Intelligence is built as an open engineering project.
            Contributions should strengthen the architecture, documentation,
            implementation quality, and long-term maintainability of the
            platform.
          </p>
        </header>

        <section className="space-y-5">
          <h2 className="text-2xl font-medium text-foreground">
            Who Should Contribute
          </h2>
          <ul className="space-y-3 leading-8 text-muted-foreground">
            {contributors.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-medium text-foreground">
            How To Contribute
          </h2>
          <ul className="space-y-3 leading-8 text-muted-foreground">
            {contributionPaths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-medium text-foreground">
            Engineering Expectations
          </h2>
          <p className="leading-8 text-muted-foreground">
            Contributors should research before designing, design before
            implementing, keep changes focused, prefer simple systems, document
            reasoning, avoid unnecessary dependencies, and verify work before it
            is considered complete.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium text-foreground">GitHub</h2>
          <p className="leading-8 text-muted-foreground">
            Development happens in the official Public Intelligence GitHub
            organization.
          </p>
          <Link
            href="https://github.com/Public-Intelligence-Revolution"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            github.com/Public-Intelligence-Revolution
          </Link>
        </section>
      </article>
    </PageShell>
  );
}
