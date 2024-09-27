interface CIconsProps {
  size?: number;
  className?: string;
  CIconType: keyof typeof CIcons;
}

const CIcons = {
  confetti: (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-party-popper">
        <path d="M5.8 11.3 2 22l10.7-3.79" stroke="#FF69B4" fill="#FF69B4" />

        <path d="M4 3h.01" stroke="#1E90FF" />
        <path d="M22 8h.01" stroke="#FFD700" />
        <path d="M15 2h.01" stroke="#7B68EE" />
        <path d="M22 20h.01" stroke="#00BFFF" />

        <path
          d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"
          stroke="#FF4500"
        />
        <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" stroke="#32CD32" />

        <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" stroke="#FF69B4" />
        <path
          d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"
          stroke="#FFD700"
          fill="#FF69B4"
        />
      </svg>
    </>
  ),
  cake: (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-cake">
        <path d="M21 17v5H3v-5a6 6 0 0 1 18 0Z" stroke="#FF69B4" fill="#FF69B4" />
        <path d="M7 17V6.3a1.3 1.3 0 0 1 2.6 0v7.4" stroke="#FFD700" />
        <path d="M12 17V4a1.3 1.3 0 0 1 2.6 0v9" stroke="#32CD32" />
        <path d="M17 17v-6.7a1.3 1.3 0 0 1 2.6 0v4.4" stroke="#1E90FF" />
        <path d="M2 22h20M3 17h18M21 17a6 6 0 0 0-18 0" stroke="#FF4500" />
      </svg>
    </>
  ),
  trophy: (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-medal">
        <path
          d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"
          stroke="#FF69B4"
          fill="none"
        />
        <path d="M11 12 5.12 2.2" stroke="#FF69B4" />
        <path d="m13 12 5.88-9.8" stroke="#FF69B4" />
        <path d="M8 7h8" stroke="#FF69B4" />
        <circle cx="12" cy="17" r="5" stroke="#1E90FF" fill="#FFD700" />
        <path d="M12 18v-2h-.5" stroke="#1E90FF" />
      </svg>
    </>
  ),
};

function CIcon({ size = 24, className, CIconType }: CIconsProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      {CIcons[CIconType]}
    </svg>
  );
}

export default CIcon;
