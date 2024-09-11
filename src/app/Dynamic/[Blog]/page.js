"use client";
// app/Dynamic/[Blog]/page.js
import { useParams } from "next/navigation";

export default function DynamicPage() {
  const { Blog } = useParams(); // Get the dynamic parameter

  return (
    <div style={{ textAlign: "center", marginTop: "150px" }}>
      <h1 style={{ fontSize: "5rem", fontWeight: "900" }}>
        Dynamic Page with Blog ID:{" "}
        <span style={{ color: "red" }}>{`"${Blog}"`}</span>
      </h1>
    </div>
  );
}
