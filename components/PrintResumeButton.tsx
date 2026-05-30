"use client";

export default function PrintResumeButton() {
  return (
    <button type="button" className="btn" onClick={() => window.print()}>
      Download / Print PDF
    </button>
  );
}
