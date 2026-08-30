import React from "react";

export default function HamburgerIcon({ size = 28, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="4" y1="8" x2="24" y2="8" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="4" y1="14" x2="24" y2="14" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="4" y1="20" x2="24" y2="20" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
