import * as React from "react";
import { diagramTokens } from "./diagram-tokens";

type DiagramCanvasProps = {
  children: React.ReactNode;
  width?: number;
  height?: number;
  className?: string;
  title: string;
  description: string;
};

export function DiagramCanvas({
  children,
  width = diagramTokens.canvas.width,
  height = diagramTokens.canvas.height,
  className = "",
  title,
  description,
}: DiagramCanvasProps) {
  const titleId = `diagram-title-${React.useId()}`;
  const descId = `diagram-desc-${React.useId()}`;

  return (
    <div className={`w-full flex justify-center py-4 ${className}`}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-4xl font-mono"
        role="img"
        aria-labelledby={titleId}
        aria-describedby={descId}
      >
        <title id={titleId}>{title}</title>
        <desc id={descId}>{description}</desc>
        <defs>
          <pattern
            id={`grid-${React.useId()}`}
            width={diagramTokens.grid.patternSize}
            height={diagramTokens.grid.patternSize}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${diagramTokens.grid.patternSize} 0 L 0 0 0 ${diagramTokens.grid.patternSize}`}
              fill={diagramTokens.color.none}
              stroke={diagramTokens.color.inherited}
              strokeWidth={diagramTokens.grid.patternStrokeWidth}
              strokeOpacity={diagramTokens.grid.patternStrokeOpacity}
            />
          </pattern>
        </defs>
        <rect
          width={width}
          height={height}
          fill={`url(#grid-${React.useId()})`}
          rx={diagramTokens.canvas.radius}
        />
        {children}
      </svg>
    </div>
  );
}
