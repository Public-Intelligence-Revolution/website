import * as React from "react";

export function ArrowheadDef() {
  return (
    <defs>
      <marker
        id="arrowhead"
        markerWidth="10"
        markerHeight="7"
        refX="0"
        refY="3.5"
        orient="auto"
      >
        <polygon points="0 0, 10 3.5, 0 7" fill="#D9F99D" />
      </marker>
    </defs>
  );
}
