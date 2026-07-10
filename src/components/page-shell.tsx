import * as React from "react";
import { SiteFooter } from "@/components/site-footer";

type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
      {children}
      <SiteFooter />
    </main>
  );
}
