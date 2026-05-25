import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Fluency House — Clases de inglés personalizadas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #16A34A 0%, #065F46 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 100px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Badge */}
        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            borderRadius: "999px",
            padding: "8px 20px",
            fontSize: "18px",
            color: "rgba(255,255,255,0.9)",
            fontWeight: 600,
            marginBottom: "32px",
            display: "flex",
          }}
        >
          ✨ Primera clase gratis — siempre
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "24px",
            maxWidth: "800px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          The Fluency House
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            color: "rgba(255,255,255,0.8)",
            maxWidth: "680px",
            lineHeight: 1.5,
            display: "flex",
          }}
        >
          Clases de inglés personalizadas. Construidas para vos, no para un libro de texto.
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "100px",
            fontSize: "20px",
            color: "rgba(255,255,255,0.5)",
            display: "flex",
          }}
        >
          thefluencyhouse.com
        </div>
      </div>
    ),
    { ...size }
  );
}
