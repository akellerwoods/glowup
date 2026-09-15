import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0a",
        borderRadius: 32,
        border: "3px solid #c9a227",
        color: "#c9a227",
        fontFamily: "Georgia, serif",
        fontSize: 34,
        fontStyle: "italic",
      }}
    >
      G
    </div>,
    { ...size },
  );
}
