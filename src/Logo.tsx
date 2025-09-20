import React from "react";

export default function Logo() {
  return (
    <div style={{ position: "relative", width: "96px", height: "96px" }}>
      {/* Main icon container with animated gradient */}
      <div
        style={{
          width: "96px",
          height: "96px",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6)",
          boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
          transform: "rotate(3deg)",
          transition: "transform 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "rotate(0deg)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "rotate(3deg)")}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(4px)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* SVG central */}
          <svg
            style={{ width: "48px", height: "48px", color: "white" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
      </div>

      {/* Floating tech elements */}
      <div
        style={{
          position: "absolute",
          top: "-8px",
          right: "-8px",
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #22c55e, #10b981)",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          animation: "bounce 2s infinite",
        }}
      >
        <svg style={{ width: "16px", height: "16px", color: "white" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "-4px",
          left: "-8px",
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #facc15, #f97316)",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <svg style={{ width: "12px", height: "12px", color: "white" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>

      {/* Decorative dots */}
      <div style={{ position: "absolute", top: "-16px", left: "16px", width: "8px", height: "8px", backgroundColor: "#ec4899", borderRadius: "50%", opacity: 0.6 }} />
      <div style={{ position: "absolute", bottom: "-12px", right: "24px", width: "6px", height: "6px", backgroundColor: "#3b82f6", borderRadius: "50%", opacity: 0.6 }} />
      <div style={{ position: "absolute", top: "8px", left: "-16px", width: "4px", height: "4px", backgroundColor: "#8b5cf6", borderRadius: "50%", opacity: 0.6 }} />

      <style>{`@keyframes bounce {0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}`}</style>
    </div>
  );
}
