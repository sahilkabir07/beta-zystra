import React from "react";

export function Users(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function Rocket(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.5.5 2.5 1 3.5.5-1.5 1.5-2.5 3-3 1.5-.5 2.5-.5 3-1.5.5-1 1-2 1-3" />
      <path d="M12 2c5.5 0 10 4.5 10 10 0 1.5-.5 2.5-1 3.5-.5-1.5-1.5-2.5-3-3-1.5-.5-2.5-.5-3-1.5-.5-1-1-2-1-3" />
      <path d="M9 15c-1.5 1.5-2.5 3.5-2.5 3.5s2-1 3.5-2.5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}
