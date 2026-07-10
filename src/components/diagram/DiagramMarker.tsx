import * as React from "react";

type DiagramMarkerProps = {
  cx: number;
  cy: number;
  r?: number;
  fill?: string;
};

export function DiagramMarker({ cx, cy, r = 2.5, fill = "#D9F99D" }: DiagramMarkerProps) {
  return <circle cx={cx} cy={cy} r={r} fill={fill} />;
}
