import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/config/site.config";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/images/brand/logo-circle.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        background: "#0a0a0a",
        color: "#ffffff",
        padding: "72px",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "column", flex: 1, paddingRight: 48 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#c9a227",
            fontSize: 22,
            letterSpacing: 6,
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          <div style={{ width: 40, height: 2, background: "#c9a227" }} />
          DALLAS, TEXAS
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 88,
            lineHeight: 0.95,
            marginTop: 28,
            letterSpacing: -3,
          }}
        >
          <span>Every dog deserves a&nbsp;</span>
          <span style={{ color: "#c9a227", fontStyle: "italic" }}>glow-up.</span>
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 24,
            color: "rgba(255,255,255,0.72)",
            fontFamily: "Helvetica, Arial, sans-serif",
            lineHeight: 1.4,
            maxWidth: 640,
          }}
        >
          Professional grooming for dogs entering Dallas Animal Services in urgent need of
          care.
        </div>
      </div>
      <img
        src={logoSrc}
        alt=""
        width={360}
        height={360}
        style={{ width: 360, height: 360 }}
      />
    </div>,
    { ...size },
  );
}
