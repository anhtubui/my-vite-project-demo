import clsx from "clsx";
import type { SVGProps } from "react";

export default function ChevronLeft({
  className,
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx("lucide lucide-chevron-left", className)}
    >
      <path d="m15 18-6-6 6-6"></path>
    </svg>
  );
}
