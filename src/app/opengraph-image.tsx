import { ImageResponse } from "next/og";

export const alt = "Jules Tranchier — AI-augmented Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#a5b4fc",
          }}
        >
          Freelance · Paris, France
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            marginTop: 16,
            lineHeight: 1.05,
          }}
        >
          Jules Tranchier
        </div>
        <div style={{ fontSize: 40, marginTop: 16, color: "#818cf8" }}>
          AI-augmented Full-Stack Engineer
        </div>
        <div
          style={{
            fontSize: 26,
            marginTop: 28,
            color: "#cbd5e1",
            maxWidth: 900,
          }}
        >
          +7 ans d&apos;expérience · React · Node.js · GraphQL · TypeScript
        </div>
      </div>
    ),
    { ...size },
  );
}
