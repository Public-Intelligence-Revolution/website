import * as React from "react";

export function SystemDiagram() {
  return (
    <div className="w-full flex justify-center py-6">
      <svg
        viewBox="0 0 760 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-4xl font-mono"
      >
        <defs>
          <pattern id="grid-home" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.03" />
          </pattern>
        </defs>
        <rect width="760" height="180" fill="url(#grid-home)" rx="6" />

        {/* Technical Corner Ticks */}
        <rect x="0.5" y="0.5" width="759" height="179" rx="6" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
        <path d="M 10 0.5 L 0.5 0.5 L 0.5 10" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" fill="none" />
        <path d="M 750 0.5 L 759.5 0.5 L 759.5 10" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" fill="none" />
        <path d="M 0.5 170 L 0.5 179.5 L 10 179.5" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" fill="none" />
        <path d="M 750 179.5 L 759.5 179.5 L 759.5 170" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" fill="none" />

        {/* Node 1: Website */}
        <g transform="translate(80, 60)">
          <rect x="0" y="0" width="140" height="60" rx="3" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18" fill="var(--background, #0f0f11)" />
          <text x="15" y="24" fill="#f3f4f6" fontSize="11" fontWeight="600">[WEBSITE_PORTAL]</text>
          <text x="15" y="42" fill="#d1d5db" fontSize="10" fontWeight="500">Role: Onboarding</text>
        </g>

        {/* Node 2: Scheduler */}
        <g transform="translate(310, 60)">
          <rect x="0" y="0" width="140" height="60" rx="3" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18" fill="var(--background, #0f0f11)" />
          <text x="15" y="24" fill="#f3f4f6" fontSize="11" fontWeight="600">[SCHEDULER_CORE]</text>
          <text x="15" y="42" fill="#d1d5db" fontSize="10" fontWeight="500">Role: Coordinator</text>
          <circle cx="125" cy="15" r="2.5" fill="#D9F99D" />
        </g>

        {/* Node 3: Global Compute Network */}
        <g transform="translate(540, 60)">
          <rect x="0" y="0" width="140" height="60" rx="3" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18" fill="var(--background, #0f0f11)" />
          <text x="15" y="24" fill="#f3f4f6" fontSize="11" fontWeight="600">[COMPUTE_NETWORK]</text>
          <text x="15" y="42" fill="#d1d5db" fontSize="10" fontWeight="500">Role: Execution</text>
        </g>

        {/* CONNECTIONS (Aligned at Y=90) */}
        <line x1="220" y1="90" x2="310" y2="90" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
        <line x1="450" y1="90" x2="540" y2="90" stroke="#D9F99D" strokeWidth="1.2" />

        {/* Data indicator dot */}
        <circle cx="495" cy="90" r="2.5" fill="#D9F99D" />
      </svg>
    </div>
  );
}
