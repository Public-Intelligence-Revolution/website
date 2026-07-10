import * as React from "react";

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
  width = 760,
  height = 240,
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
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeOpacity="0.03"
            />
          </pattern>
        </defs>
        <rect
          width={width}
          height={height}
          fill={`url(#grid-${React.useId()})`}
          rx="6"
        />
        {children}
      </svg>
    </div>
  );
}
