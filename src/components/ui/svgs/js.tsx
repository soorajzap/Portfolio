import type { SVGProps } from "react";

const Javascript = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="6" width="36" height="36" fill="#FFD600" />
    <path
      fill="#000"
      d="M22 22h3v10c0 3-1.8 5-4.7 5-2.4 0-3.9-1.2-4.6-3.1l2.6-1.6c.5.9 1 1.6 2 1.6.9 0 1.7-.4 1.7-2.1V22Z"
    />
    <path
      fill="#000"
      d="M30 33c.7 1.1 1.5 2.1 3 2.1 1.3 0 2-.6 2-1.5 0-1.1-.7-1.5-2.2-2.1l-.8-.3c-2.3-1-3.8-2.2-3.8-4.8 0-2.4 1.8-4.2 4.7-4.2 2 0 3.5.7 4.5 2.5l-2.5 1.6c-.5-1-1.1-1.4-2-1.4s-1.5.6-1.5 1.4c0 1 .6 1.3 2 1.9l.8.3c2.7 1.2 4.2 2.4 4.2 5.1 0 2.9-2.2 4.4-5.3 4.4-3 0-4.7-1.4-5.7-3.3L30 33Z"
    />
  </svg>
);

export { Javascript };