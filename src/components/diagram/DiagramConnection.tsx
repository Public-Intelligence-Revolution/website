import * as React from "react";

type DiagramConnectionProps = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  active?: boolean;
  curved?: boolean;
  controlPoint?: { x: number; y: number };
  marker?: boolean;
};

export function DiagramConnection({
  x1,
  y1,
  x2,
  y2,
  active = false,
  curved = false,
  controlPoint,
  marker = false,
}: DiagramConnectionProps) {
  const stroke = active ? "#D9F99D" : "currentColor";
  const strokeWidth = active ? 1.2 : 1;
  const strokeOpacity = active ? 1 : 0.1;
  const strokeDasharray = active ? "none" : "3 3";

  if (curved && controlPoint) {
    return (
      <path
        d={`M ${x1} ${y1} Q ${controlPoint.x} ${controlPoint.y} ${x2} ${y2}`}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeOpacity={strokeOpacity}
        strokeDasharray={strokeDasharray}
        fill="none"
        markerEnd={marker ? "url(#arrowhead)" : undefined}
      />
    );
  }

  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeOpacity={strokeOpacity}
      strokeDasharray={strokeDasharray}
      markerEnd={marker ? "url(#arrowhead)" : undefined}
    />
  );
}
