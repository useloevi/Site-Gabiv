import React from "react";

export default function PhoneIcon({ size = 28, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8.5 4.5c.7 1.6 1.7 3.1 3 4.4l-2 2.6c1.4 2.7 3.6 4.9 6.3 6.3l2.6-2c1.3 1.3 2.8 2.3 4.4 3v3.2c0 1-.9 1.8-1.9 1.6-4.4-.8-8.6-3-11.8-6.2C5.9 14.2 3.7 10 2.9 5.6 2.7 4.6 3.5 3.7 4.5 3.7h3.2z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M18 3c2.2 0 4 1.8 4 4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 6.5c.8 0 1.5.7 1.5 1.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
