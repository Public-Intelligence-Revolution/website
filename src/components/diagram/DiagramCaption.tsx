import * as React from "react";

type DiagramCaptionProps = {
  x: number;
  y: number;
  text: string;
  fill?: string;
  fontSize?: number;
  textAnchor?: "start" | "middle" | "end";
};

export function DiagramCaption({
  x,
  y,
  text,
  fill = "#9ca3af",
  fontSize = 9.5,
  textAnchor = "middle",
}: DiagramCaptionProps) {
  return (
    <text
      x={x}
      y={y}
      fill={fill}
      fontSize={fontSize}
      fontWeight="400"
      textAnchor={textAnchor}
    >
      {text}
    </text>
  );
}
