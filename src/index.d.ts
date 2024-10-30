import * as React from "react";

interface LoaderProps {
  size?: "small" | "medium" | "large";
  color?: string;
}

export const Dots: React.FC<LoaderProps>;
export const Bounce: React.FC<LoaderProps>;
export const Wave: React.FC<LoaderProps>;
export const Ring: React.FC<LoaderProps>;
export const Square: React.FC<LoaderProps>;
export const Pulse: React.FC<LoaderProps>;
export const Spinner: React.FC<LoaderProps>;
export const Progress: React.FC<LoaderProps>;
export const Bars: React.FC<LoaderProps>;
