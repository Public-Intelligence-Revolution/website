import * as React from "react";

// Helper border styling to ensure consistency across all diagrams
const tickStyles = (
  <>
    <rect x="0.5" y="0.5" width="759" height="99.5%" rx="6" stroke="currentColor" strokeWidth="1" strokeOpacity="0.08" />
    <path d="M 10 0.5 L 0.5 0.5 L 0.5 10" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" fill="none" />
    <path d="M 750 0.5 L 759.5 0.5 L 759.5 10" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" fill="none" />
  </>
);

// 1. Overall System Topology
export function OverallSystemDiagram() {
  return (
    <div className="w-full flex justify-center py-4">
      <svg
        viewBox="0 0 760 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-4xl font-mono"
      >
        <defs>
          <pattern id="grid-system" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.03" />
          </pattern>
        </defs>
        <rect width="760" height="220" fill="url(#grid-system)" rx="6" />
        {tickStyles}

        {/* Node 1: Website */}
        <g transform="translate(80, 80)">
          <rect x="0" y="0" width="140" height="60" rx="3" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18" fill="var(--background, #0f0f11)" />
          <text x="15" y="24" fill="#f3f4f6" fontSize="11" fontWeight="600">[WEBSITE_PORTAL]</text>
          <text x="15" y="42" fill="#d1d5db" fontSize="10" fontWeight="500">Entry & Onboard</text>
        </g>

        {/* Node 2: Scheduler */}
        <g transform="translate(310, 80)">
          <rect x="0" y="0" width="140" height="60" rx="3" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18" fill="var(--background, #0f0f11)" />
          <text x="15" y="24" fill="#f3f4f6" fontSize="11" fontWeight="600">[SCHEDULER_CORE]</text>
          <text x="15" y="42" fill="#d1d5db" fontSize="10" fontWeight="500">Control Plane</text>
          <circle cx="125" cy="15" r="2.5" fill="#D9F99D" />
        </g>

        {/* Node 3: Contributed Nodes */}
        <g transform="translate(540, 80)">
          <rect x="0" y="0" width="140" height="60" rx="3" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18" fill="var(--background, #0f0f11)" />
          <text x="15" y="24" fill="#f3f4f6" fontSize="11" fontWeight="600">[NODE_NETWORK]</text>
          <text x="15" y="42" fill="#d1d5db" fontSize="10" fontWeight="500">Execution Plane</text>
        </g>

        {/* Aligned Connector Lines at Y=110 */}
        <line x1="220" y1="110" x2="310" y2="110" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
        <line x1="450" y1="110" x2="540" y2="110" stroke="#D9F99D" strokeWidth="1.2" />

        <circle cx="495" cy="110" r="2.5" fill="#D9F99D" />
      </svg>
    </div>
  );
}

// 2. Request Flow
export function RequestFlowDiagram() {
  return (
    <div className="w-full flex justify-center py-4">
      <svg
        viewBox="0 0 760 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-4xl font-mono"
      >
        <defs>
          <pattern id="grid-flow" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.03" />
          </pattern>
        </defs>
        <rect width="760" height="240" fill="url(#grid-flow)" rx="6" />
        {tickStyles}

        {/* Node 1: Client */}
        <g transform="translate(80, 90)">
          <rect x="0" y="0" width="140" height="60" rx="3" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18" fill="var(--background, #0f0f11)" />
          <text x="15" y="24" fill="#f3f4f6" fontSize="11" fontWeight="600">[CLIENT_INTERFACE]</text>
          <text x="15" y="42" fill="#d1d5db" fontSize="10" fontWeight="500">Status: SUBMITTING</text>
        </g>

        {/* Node 2: Scheduler */}
        <g transform="translate(310, 90)">
          <rect x="0" y="0" width="140" height="60" rx="3" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18" fill="var(--background, #0f0f11)" />
          <text x="15" y="24" fill="#f3f4f6" fontSize="11" fontWeight="600">[SCHEDULER_CORE]</text>
          <text x="15" y="42" fill="#d1d5db" fontSize="10" fontWeight="500">Status: ROUTING</text>
        </g>

        {/* Node 3: Selected Compute Node */}
        <g transform="translate(540, 90)">
          <rect x="0" y="0" width="140" height="60" rx="3" stroke="#D9F99D" strokeWidth="1" strokeOpacity="0.4" fill="var(--background, #0f0f11)" />
          <text x="15" y="24" fill="#D9F99D" fontSize="11" fontWeight="600">[NODE_EU_WEST]</text>
          <text x="15" y="42" fill="#d1d5db" fontSize="10" fontWeight="500">Status: EXECUTING</text>
        </g>

        {/* Aligned Active Connection Paths at Y=120 */}
        <line x1="220" y1="120" x2="310" y2="120" stroke="#D9F99D" strokeWidth="1.2" />
        <line x1="450" y1="120" x2="540" y2="120" stroke="#D9F99D" strokeWidth="1.2" />

        {/* Signal indicators on the active loop */}
        <circle cx="265" cy="120" r="2.5" fill="#D9F99D" />
        <circle cx="495" cy="120" r="2.5" fill="#D9F99D" />

        {/* Direct Output Return Path (Subtle feedback loop at bottom) */}
        <path
          d="M 610 150 V 190 H 150 V 150"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.1"
          strokeDasharray="2 2"
        />
        <text x="380" y="185" fill="#9ca3af" fontSize="9.5" fontWeight="400" textAnchor="middle">DIRECT_RESULT_PAYLOAD (verification_loop)</text>
      </svg>
    </div>
  );
}

// 3. Geographic Scheduling
export function GeographicSchedulingDiagram() {
  return (
    <div className="w-full flex justify-center py-4">
      <svg
        viewBox="0 0 760 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-4xl font-mono"
      >
        <defs>
          <pattern id="grid-geo" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.03" />
          </pattern>
        </defs>
        <rect width="760" height="280" fill="url(#grid-geo)" rx="6" />
        {tickStyles}

        {/* Scheduler Node (Left Column) */}
        <g transform="translate(80, 110)">
          <rect x="0" y="0" width="140" height="60" rx="3" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18" fill="var(--background, #0f0f11)" />
          <text x="15" y="24" fill="#f3f4f6" fontSize="11" fontWeight="600">[SCHEDULER_CORE]</text>
          <text x="15" y="42" fill="#d1d5db" fontSize="10" fontWeight="500">Latency Engine</text>
        </g>

        {/* Nodes (Right Column Stacked) */}
        {/* Node 1: US-East */}
        <g transform="translate(480, 40)">
          <rect x="0" y="0" width="140" height="50" rx="3" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18" fill="var(--background, #0f0f11)" />
          <text x="15" y="20" fill="#f3f4f6" fontSize="11" fontWeight="600">[NODE_US_EAST]</text>
          <text x="15" y="36" fill="#9ca3af" fontSize="9.5" fontWeight="400">Latency: 78ms</text>
        </g>

        {/* Node 2: EU-West (Selected) */}
        <g transform="translate(480, 115)">
          <rect x="0" y="0" width="140" height="50" rx="3" stroke="#D9F99D" strokeWidth="1" strokeOpacity="0.4" fill="var(--background, #0f0f11)" />
          <text x="15" y="20" fill="#D9F99D" fontSize="11" fontWeight="600">[NODE_EU_WEST]</text>
          <text x="15" y="36" fill="#d1d5db" fontSize="9.5" fontWeight="500">Latency: 12ms (MIN)</text>
        </g>

        {/* Node 3: AP-South */}
        <g transform="translate(480, 190)">
          <rect x="0" y="0" width="140" height="50" rx="3" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18" fill="var(--background, #0f0f11)" />
          <text x="15" y="20" fill="#f3f4f6" fontSize="11" fontWeight="600">[NODE_AP_SOUTH]</text>
          <text x="15" y="36" fill="#9ca3af" fontSize="9.5" fontWeight="400">Latency: 284ms</text>
        </g>

        {/* Routing branches */}
        <path d="M 220 140 L 480 65" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="3 3" />
        <path d="M 220 140 L 480 140" stroke="#D9F99D" strokeWidth="1.2" />
        <path d="M 220 140 L 480 215" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="3 3" />

        <circle cx="350" cy="140" r="2.5" fill="#D9F99D" />
      </svg>
    </div>
  );
}

// 4. Distributed Inference
export function DistributedInferenceDiagram() {
  return (
    <div className="w-full flex justify-center py-4">
      <svg
        viewBox="0 0 760 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-4xl font-mono"
      >
        <defs>
          <pattern id="grid-inf" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.03" />
          </pattern>
        </defs>
        <rect width="760" height="280" fill="url(#grid-inf)" rx="6" />
        {tickStyles}

        {/* Scheduler (Left) */}
        <g transform="translate(80, 110)">
          <rect x="0" y="0" width="140" height="60" rx="3" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18" fill="var(--background, #0f0f11)" />
          <text x="15" y="22" fill="#f3f4f6" fontSize="11" fontWeight="600">[SCHEDULER_CORE]</text>
          <text x="15" y="42" fill="#d1d5db" fontSize="10" fontWeight="500">Layer Partitioner</text>
        </g>

        {/* Pipeline Shards */}
        {/* Shard A */}
        <g transform="translate(320, 60)">
          <rect x="0" y="0" width="140" height="50" rx="3" stroke="#D9F99D" strokeWidth="1" strokeOpacity="0.4" fill="var(--background, #0f0f11)" />
          <text x="15" y="20" fill="#D9F99D" fontSize="11" fontWeight="600">[NODE_SHARD_A]</text>
          <text x="15" y="36" fill="#d1d5db" fontSize="9.5" fontWeight="500">Layers: 1 - 12</text>
        </g>

        {/* Shard B */}
        <g transform="translate(520, 60)">
          <rect x="0" y="0" width="140" height="50" rx="3" stroke="#D9F99D" strokeWidth="1" strokeOpacity="0.4" fill="var(--background, #0f0f11)" />
          <text x="15" y="20" fill="#D9F99D" fontSize="11" fontWeight="600">[NODE_SHARD_B]</text>
          <text x="15" y="36" fill="#d1d5db" fontSize="9.5" fontWeight="500">Layers: 13 - 24</text>
        </g>

        {/* Shard C */}
        <g transform="translate(420, 170)">
          <rect x="0" y="0" width="140" height="50" rx="3" stroke="#D9F99D" strokeWidth="1" strokeOpacity="0.4" fill="var(--background, #0f0f11)" />
          <text x="15" y="20" fill="#D9F99D" fontSize="11" fontWeight="600">[NODE_SHARD_C]</text>
          <text x="15" y="36" fill="#d1d5db" fontSize="9.5" fontWeight="500">Layers: 25 - 36</text>
        </g>

        {/* Pipeline connection paths */}
        {/* Scheduler -> Shard A */}
        <path d="M 220 140 L 320 85" stroke="#D9F99D" strokeWidth="1.2" />
        
        {/* Shard A -> Shard B */}
        <path d="M 460 85 H 520" stroke="#D9F99D" strokeWidth="1.2" />
        
        {/* Shard B -> Shard C */}
        <path d="M 590 110 L 490 170" stroke="#D9F99D" strokeWidth="1.2" />

        {/* Flow ticks along the pipeline */}
        <circle cx="270" cy="112.5" r="2.5" fill="#D9F99D" />
        <circle cx="490" cy="85" r="2.5" fill="#D9F99D" />
        <circle cx="540" cy="140" r="2.5" fill="#D9F99D" />
      </svg>
    </div>
  );
}

// 5. Future Architecture
export function PlatformStackDiagram() {
  return (
    <div className="w-full flex justify-center py-4">
      <svg
        viewBox="0 0 760 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-4xl font-mono"
      >
        <defs>
          <pattern id="grid-stack" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.03" />
          </pattern>
        </defs>
        <rect width="760" height="240" fill="url(#grid-stack)" rx="6" />
        {tickStyles}

        {/* Vertical Stack with equal horizontal dimensions and spacing */}
        {/* Layer 4: Application API */}
        <g transform="translate(120, 30)">
          <rect x="0" y="0" width="520" height="35" rx="3" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18" fill="var(--background, #0f0f11)" />
          <text x="20" y="21" fill="#f3f4f6" fontSize="10.5" fontWeight="600">APPLICATION / API LAYER</text>
          <text x="260" y="21" fill="#9ca3af" fontSize="9.5" fontWeight="400">Client SDKs, telemetry portals, developer API endpoints</text>
        </g>

        {/* Layer 3: Orchestration (Active coordinate) */}
        <g transform="translate(120, 75)">
          <rect x="0" y="0" width="520" height="35" rx="3" stroke="#D9F99D" strokeWidth="1" strokeOpacity="0.4" fill="var(--background, #0f0f11)" />
          <text x="20" y="21" fill="#D9F99D" fontSize="10.5" fontWeight="600">ORCHESTRATION & COORDINATION LAYER</text>
          <text x="260" y="21" fill="#d1d5db" fontSize="9.5" fontWeight="500">Geographic scheduling engine, node registries, queue models</text>
        </g>

        {/* Layer 2: Network / Transport */}
        <g transform="translate(120, 120)">
          <rect x="0" y="0" width="520" height="35" rx="3" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18" fill="var(--background, #0f0f11)" />
          <text x="20" y="21" fill="#f3f4f6" fontSize="10.5" fontWeight="600">DECENTRALIZED TRANSPORT LAYER</text>
          <text x="260" y="21" fill="#9ca3af" fontSize="9.5" fontWeight="400">P2P overlay routing, message heartbeats, secure gRPC tunnels</text>
        </g>

        {/* Layer 1: local compute */}
        <g transform="translate(120, 165)">
          <rect x="0" y="0" width="520" height="35" rx="3" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18" fill="var(--background, #0f0f11)" />
          <text x="20" y="21" fill="#f3f4f6" fontSize="10.5" fontWeight="600">LOCAL HARDWARE EXECUTION RUNTIME</text>
          <text x="260" y="21" fill="#9ca3af" fontSize="9.5" fontWeight="400">CUDA/ROCm device engines, local resource benchmarks, sandboxes</text>
        </g>
      </svg>
    </div>
  );
}
