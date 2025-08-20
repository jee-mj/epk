// src/components/Compass.tsx
"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import Links from "./Links";

type CompassProps = {
  children?: React.ReactNode;
  onItemClick?: () => void; // optional callback (if you want to control from parent)
};

export default function Compass({ children, onItemClick }: CompassProps) {
  const [open, setOpen] = useState(false);

  const compassBtnStyle: React.CSSProperties = {
    position: "absolute",
    left: 16,
    top: 16,
    background: "transparent",
    border: "none",
    padding: 8,
    cursor: "pointer",
    zIndex: 30,
  };

  const overlayStyle: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    display: open ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0,0,0,0.6)",
    zIndex: 40,
    padding: 24,
  };

  const panelStyle: React.CSSProperties = {
    background: "white",
    padding: 24,
    borderRadius: 8,
    minWidth: 220,
    maxWidth: "90%",
  };

  const handleItemClick = () => {
    setOpen(false);
    if (onItemClick) onItemClick();
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <button
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((v) => !v)}
        style={compassBtnStyle}
        title="Open menu"
      >
        <FontAwesomeIcon icon={faCompass} />
        <span className="sr-only">Toggle menu</span>
      </button>

      <div
        id="site-menu"
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
        style={overlayStyle}
        onClick={() => setOpen(false)} // click outside closes
      >
        <div
          role="document"
          onClick={(e) => e.stopPropagation()}
          style={panelStyle}
        >
          {/* Links should accept onItemClick (see sample below) */}
          <Links onItemClick={handleItemClick} />

          <div style={{ marginTop: 16, display: "flex", justifyContent: "flex-end", gap: 8 }}>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              Close
            </button>
          </div>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
