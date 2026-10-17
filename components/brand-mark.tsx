type BrandMarkProps = {
  className?: string
}

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 52 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="brand-symbol-main"
        d="M7 42V6h15.2C31.5 6 37 10.6 37 18.1s-5.5 12.1-14.8 12.1H7M23 30.2 38 42"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path
        className="brand-symbol-accent-stroke"
        d="M45 19v23"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="square"
      />
      <rect className="brand-symbol-accent-dot" x="42.5" y="6" width="5" height="5" fill="currentColor" />
    </svg>
  )
}
