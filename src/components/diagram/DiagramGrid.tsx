import * as React from "react";

type DiagramGridProps = {
  width: number;
  height: number;
  patternId: string;
};

export function DiagramGrid({ width, height, patternId }: DiagramGridProps) {
  return (
    <>
      <rect width={width} height={height} fill={`url(#${patternId})`} rx="6" />
      <rect
        x="0.5"
        y="0.5"
        width={width - 1}
        height={height - 1}
        rx="6"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.08"
        fill="none"
      />
      <path
        d="M 10 0.5 L 0.5 0.5 L 0.5 10"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.25"
        fill="none"
      />
      <path
        d={`M ${width - 10} 0.5 L ${width - 0.5} 0.5 L ${width - 0.5} 10`}
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.25"
        fill="none"
      />
      <path
        d={`M 0.5 ${height - 10} L 0.5 ${height - 0.5} L 10 ${height - 0.5}`}
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.25"
        fill="none"
      />
      <path
        d={`M ${width - 10} ${height - 0.5} L ${width - 0.5} ${height - 0.5} L ${width - 0.5} ${height - 10}`}
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.25"
        fill="none"
      />
    </>
  );
}
