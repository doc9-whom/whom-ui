import type { SVGProps } from 'react';

export default function Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.3334 8.68056C13.3334 11.197 10.2368 13.0664 8.76016 13.817C8.28371 14.0606 7.71939 14.061 7.24251 13.8183C5.76683 13.0684 2.66675 11.1945 2.66675 8.68056V5.04621C2.67165 4.70565 2.92957 4.42212 3.26815 4.38509C4.68276 4.2776 6.03898 3.77604 7.18315 2.93725C7.66799 2.57642 8.33214 2.57642 8.81699 2.93725C9.96115 3.77604 11.3174 4.2776 12.732 4.38509C13.0706 4.42211 13.3285 4.70564 13.3334 5.04621V8.68056Z"
        stroke="#0A3DB0"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.06668 7.66663L7.73406 8.99996L6.93335 8.19996"
        stroke="#0A3DB0"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
