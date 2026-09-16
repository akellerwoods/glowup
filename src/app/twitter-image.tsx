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
        background: "#0b0b0c",
        color: "#ede8de",
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
            color: "#d4a537",
            fontSize: 20,
            letterSpacing: 6,
            fontFamily: "Helvetica, Arial, sans-serif",
            borderTop: "1px solid rgba(212,165,55,0.35)",
            paddingTop: 16,
          }}
        >
          DALLAS, TEXAS
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            lineHeight: 1.1,
            marginTop: 32,
            maxWidth: 660,
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 22,
            color: "rgba(237,232,222,0.7)",
            fontFamily: "Helvetica, Arial, sans-serif",
            lineHeight: 1.5,
            maxWidth: 620,
          }}
        >
          {siteConfig.oneLine}
        </div>
      </div>
      <img
        src={logoSrc}
        alt=""
        width={340}
        height={340}
        style={{ width: 340, height: 340 }}
      />
    </div>,
    { ...size },
  );
}
