import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
          background: "#f2efe6",
        }}
      >
        <svg width="140" height="140" viewBox="0 0 64 64" fill="none">
          <path
            d="M9 53V11h17.7c10.8 0 17.3 5.4 17.3 14.1S37.5 39.2 26.7 39.2H9m18.6 0L45 53"
            stroke="#173127"
            strokeWidth="6.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
          <path d="M54 27v26" stroke="#d15c3b" strokeWidth="6" strokeLinecap="square" />
          <rect x="51" y="11" width="6" height="6" fill="#d15c3b" />
        </svg>
      </div>
    ),
    size,
  )
}
