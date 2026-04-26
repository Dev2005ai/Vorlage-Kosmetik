"use client"

import { EclatLogo } from "./EclatLogo"

export function Footer() {
  return (
    <footer
      style={{
        background: "#080605",
        borderTop: "1px solid rgba(212,168,160,0.1)",
        padding: "3rem 1.5rem",
      }}
    >
      <div
        className="flex flex-col md:flex-row items-center justify-between"
        style={{ maxWidth: "72rem", margin: "0 auto", gap: "1.5rem" }}
      >

        {/* Logo */}
        <div className="flex items-center" style={{ gap: "0.65rem" }}>
          <EclatLogo size={28} />
          <span
            className="font-bold tracking-[0.18em] uppercase"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            ÉCLAT STUDIO
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center" style={{ gap: "2rem" }}>
          {["Impressum", "Datenschutz", "AGB"].map(link => (
            <a
              key={link}
              href="#"
              style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = "#D4A8A0" }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.3)" }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>
          © 2025 ÉCLAT STUDIO Hamburg
        </p>

      </div>
    </footer>
  )
}
