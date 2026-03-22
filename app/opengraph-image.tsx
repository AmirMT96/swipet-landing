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
        }}
      >
        {/* Logo */}
        <img
          src="https://www.swipet.de/logo.png"
          width={180}
          height={180}
          style={{ borderRadius: 40, marginBottom: 32 }}
        />

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
