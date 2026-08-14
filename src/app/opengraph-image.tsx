import { ImageResponse } from "next/og";

export const alt = "Alejandro Dávila — Desarrollador Backend / Full-Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 12% 8%, rgba(45,212,191,0.35), transparent 55%), radial-gradient(circle at 92% 92%, rgba(245,158,11,0.18), transparent 45%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              backgroundColor: "#2dd4bf",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 14,
                height: 14,
                borderRight: "4px solid #052e2b",
                borderBottom: "4px solid #052e2b",
                transform: "rotate(-45deg)",
                marginLeft: -2,
              }}
            />
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#9ca3af" }}>
            portafolio.starteducation.page
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: -3,
            lineHeight: 1.05,
          }}
        >
          Alejandro Dávila
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 42,
            fontWeight: 600,
            color: "#2dd4bf",
            marginTop: 18,
          }}
        >
          Desarrollador Backend / Full-Stack
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 27,
            color: "#9ca3af",
            marginTop: 32,
            maxWidth: 860,
          }}
        >
          APIs sólidas, bases de datos bien diseñadas y arquitecturas
          offline-first.
        </div>

        <div style={{ display: "flex", gap: 12, marginTop: 56 }}>
          {["Node.js", "Next.js", "PostgreSQL", "Electron"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                fontSize: 22,
                color: "#d1d5db",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 999,
                padding: "8px 20px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
