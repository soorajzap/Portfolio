import type { SVGProps } from "react";

const Figma = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 48 48" fill="none">
    <path
      fill="#E64A19"
      d="M26 17h-8c-3.866 0-7-3.134-7-7s3.134-7 7-7h8v14Z"
    />
    <path
      fill="#7C4DFF"
      d="M25 31h-7c-3.866 0-7-3.134-7-7s3.134-7 7-7h7v14Z"
    />
    <path
      fill="#66BB6A"
      d="M18 45c-3.866 0-7-3.134-7-7s3.134-7 7-7h7v7c0 3.866-3.134 7-7 7Z"
    />
    <path
      fill="#FF7043"
      d="M32 17h-7V3h7c3.866 0 7 3.134 7 7s-3.134 7-7 7Z"
    />
    <circle
      cx="32"
      cy="24"
      r="7"
      fill="#29B6F6"
    />
  </svg>
);

export { Figma };