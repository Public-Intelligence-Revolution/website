import * as React from "react";

type DiagramNodeProps = {
  x: number;
  y: number;
  width?: number;
  height?: number;
  label: string;
  detail: string;
  active?: boolean;
  detailActive?: boolean;
  children?: React.ReactNode;
};

const NODE_WIDTH = 140;
const NODE_HEIGHT = 60;
const NODE_HEIGHT_COMPACT = 50;
const BORDER_RADIUS = 3;
const STROKE_WIDTH = 1;

export function DiagramNode({
  x,
  y,
  width = NODE_WIDTH,
  height = NODE_HEIGHT,
  label,
  detail,
  active = false,
  detailActive = false,
  children,
}: DiagramNodeProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        rx={BORDER_RADIUS}
        stroke={active ? "#D9F99D" : "currentColor"}
        strokeWidth={STROKE_WIDTH}
        strokeOpacity={active ? 0.4 : 0.18}
        fill="var(--background, #0f0f11)"
      />
      <text
        x="15"
        y={height === NODE_HEIGHT_COMPACT ? 20 : 24}
        fill={active ? "#D9F99D" : "#f3f4f6"}
        fontSize="11"
        fontWeight="600"
      >
        {label}
      </text>
      <text
        x="15"
        y={height === NODE_HEIGHT_COMPACT ? 36 : 42}
        fill={detailActive ? "#d1d5db" : active ? "#d1d5db" : "#9ca3af"}
        fontSize="9.5"
        fontWeight={detailActive ? "500" : "400"}
      >
        {detail}
      </text>
      {children}
    </g>
  );
}
