import * as React from "react";
import { diagramTokens } from "./diagram-tokens";

type DiagramGridProps = {
  width: number;
  height: number;
  patternId: string;
};

export function DiagramGrid({ width, height, patternId }: DiagramGridProps) {
  return (
    <>
      <rect width={width} height={height} fill={`url(#${patternId})`} rx={diagramTokens.canvas.radius} />
      <rect
        x={diagramTokens.grid.borderInset}
        y={diagramTokens.grid.borderInset}
        width={width - diagramTokens.grid.borderOffset}
        height={height - diagramTokens.grid.borderOffset}
        rx={diagramTokens.canvas.radius}
        stroke={diagramTokens.color.inherited}
        strokeWidth={diagramTokens.grid.borderStrokeWidth}
        strokeOpacity={diagramTokens.grid.borderStrokeOpacity}
        fill={diagramTokens.color.none}
      />
      <path
        d={`M ${diagramTokens.grid.cornerSize} ${diagramTokens.grid.borderInset} L ${diagramTokens.grid.borderInset} ${diagramTokens.grid.borderInset} L ${diagramTokens.grid.borderInset} ${diagramTokens.grid.cornerSize}`}
        stroke={diagramTokens.color.inherited}
        strokeWidth={diagramTokens.grid.cornerStrokeWidth}
        strokeOpacity={diagramTokens.grid.cornerStrokeOpacity}
        fill={diagramTokens.color.none}
      />
      <path
        d={`M ${width - diagramTokens.grid.cornerSize} ${diagramTokens.grid.borderInset} L ${width - diagramTokens.grid.borderInset} ${diagramTokens.grid.borderInset} L ${width - diagramTokens.grid.borderInset} ${diagramTokens.grid.cornerSize}`}
        stroke={diagramTokens.color.inherited}
        strokeWidth={diagramTokens.grid.cornerStrokeWidth}
        strokeOpacity={diagramTokens.grid.cornerStrokeOpacity}
        fill={diagramTokens.color.none}
      />
      <path
        d={`M ${diagramTokens.grid.borderInset} ${height - diagramTokens.grid.cornerSize} L ${diagramTokens.grid.borderInset} ${height - diagramTokens.grid.borderInset} L ${diagramTokens.grid.cornerSize} ${height - diagramTokens.grid.borderInset}`}
        stroke={diagramTokens.color.inherited}
        strokeWidth={diagramTokens.grid.cornerStrokeWidth}
        strokeOpacity={diagramTokens.grid.cornerStrokeOpacity}
        fill={diagramTokens.color.none}
      />
      <path
        d={`M ${width - diagramTokens.grid.cornerSize} ${height - diagramTokens.grid.borderInset} L ${width - diagramTokens.grid.borderInset} ${height - diagramTokens.grid.borderInset} L ${width - diagramTokens.grid.borderInset} ${height - diagramTokens.grid.cornerSize}`}
        stroke={diagramTokens.color.inherited}
        strokeWidth={diagramTokens.grid.cornerStrokeWidth}
        strokeOpacity={diagramTokens.grid.cornerStrokeOpacity}
        fill={diagramTokens.color.none}
      />
    </>
  );
}
