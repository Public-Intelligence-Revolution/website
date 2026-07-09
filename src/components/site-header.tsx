import Link from "next/link";

const navigation = [
  { href: "/vision", label: "Vision" },
  { href: "/architecture", label: "Architecture" },
  { href: "/research", label: "Research" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/contribute", label: "Contribute" },
  {
    href: "https://github.com/Public-Intelligence-Revolution",
    label: "GitHub",
    external: true,
  },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex min-h-16 w-full max-w-6xl flex-col gap-4 px-6 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="text-sm font-medium text-foreground">
          Public Intelligence
        </Link>
        <nav
          aria-label="Primary navigation"
          className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-foreground"
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
