import React from "react";

export default function ArrowDownIcon({ size = 40, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="20" y1="6" x2="20" y2="30" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M11 22l9 9 9-9"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
