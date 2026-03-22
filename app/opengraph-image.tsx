import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Swipet – Love at first sniff";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #F0956A 0%, #E27289 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          gap: 0,
        }}
      >
        {/* Logo placeholder circle */}
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: 32,
            background: "rgba(255,255,255,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
            fontSize: 72,
          }}
        >
          🐾
        </div>

        <div
          style={{
            color: "white",
            fontSize: 88,
            fontWeight: 800,
            letterSpacing: "-2px",
            lineHeight: 1,
            marginBottom: 20,
          }}
        >
          Swipet
        </div>

        <div
          style={{
            color: "rgba(255,255,255,0.88)",
            fontSize: 36,
            fontWeight: 400,
            letterSpacing: "0.5px",
          }}
        >
          Love at first sniff
        </div>
      </div>
    ),
    { ...size }
  );
}
