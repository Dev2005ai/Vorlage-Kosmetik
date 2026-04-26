export function EclatLogo({ size = 38 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ÉCLAT STUDIO Logo"
    >
      {/* Outer circle */}
      <circle cx="24" cy="24" r="21.5" stroke="#D4A8A0" strokeWidth="0.75" fill="none" />

      {/* 4-petal flower – each petal is a curved leaf shape */}
      {/* Top petal */}
      <path
        d="M24 24 C20 20 20 12 24 10 C28 12 28 20 24 24 Z"
        stroke="#D4A8A0" strokeWidth="1.2" fill="none" strokeLinejoin="round"
      />
      {/* Right petal */}
      <path
        d="M24 24 C28 20 36 20 38 24 C36 28 28 28 24 24 Z"
        stroke="#D4A8A0" strokeWidth="1.2" fill="none" strokeLinejoin="round"
      />
      {/* Bottom petal */}
      <path
        d="M24 24 C28 28 28 36 24 38 C20 36 20 28 24 24 Z"
        stroke="#D4A8A0" strokeWidth="1.2" fill="none" strokeLinejoin="round"
      />
      {/* Left petal */}
      <path
        d="M24 24 C20 28 12 28 10 24 C12 20 20 20 24 24 Z"
        stroke="#D4A8A0" strokeWidth="1.2" fill="none" strokeLinejoin="round"
      />

      {/* Center dot */}
      <circle cx="24" cy="24" r="2" fill="#D4A8A0" />

      {/* 4 small diagonal accent dots between petals */}
      <circle cx="24" cy="7.5" r="1" fill="#D4A8A0" opacity="0.5" />
      <circle cx="24" cy="40.5" r="1" fill="#D4A8A0" opacity="0.5" />
      <circle cx="7.5" cy="24" r="1" fill="#D4A8A0" opacity="0.5" />
      <circle cx="40.5" cy="24" r="1" fill="#D4A8A0" opacity="0.5" />
    </svg>
  )
}
