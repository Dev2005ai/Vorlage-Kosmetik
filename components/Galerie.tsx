"use client"

import { AnimateOnScroll } from "./AnimateOnScroll"
import { useState } from "react"

const galerie = [
  { label: "Anti-Aging Intensivpflege",  gradient: "linear-gradient(135deg, #1e100a 0%, #3c1e12 50%, #140a06 100%)", tall: true },
  { label: "Wimpernlifting & Tinting",    gradient: "linear-gradient(135deg, #180c10 0%, #301420 50%, #100810 100%)", tall: true },
  { label: "Hautanalyse & Beratung",     gradient: "linear-gradient(135deg, #1a0e0a 0%, #341a10 50%, #120806 100%)", tall: false },
  { label: "Browlamination",             gradient: "linear-gradient(135deg, #160a10 0%, #2c1020 50%, #0e0808 100%)", tall: false },
  { label: "Körperpeeling Ritual",       gradient: "linear-gradient(135deg, #1c0e08 0%, #381a0e 50%, #140a04 100%)", tall: false },
  { label: "Braut-Beauty Paket",         gradient: "linear-gradient(135deg, #1a0c12 0%, #321420 50%, #100808 100%)", tall: false },
]

function GalerieItem({ item }: { item: typeof galerie[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="relative rounded-xl overflow-hidden cursor-pointer"
      style={{
        background: item.gradient,
        gridRow: item.tall ? "span 2" : "span 1",
        transition: "transform 0.3s ease",
        transform: hovered ? "scale(1.01)" : "scale(1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex items-end"
        style={{
          padding: "1.25rem",
          background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <p className="font-medium text-sm" style={{ color: "#D4A8A0" }}>{item.label}</p>
      </div>

      {/* Mobile label always visible */}
      <div
        className="absolute inset-0 flex items-end md:hidden"
        style={{
          padding: "1rem",
          background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)",
        }}
      >
        <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.7)" }}>{item.label}</p>
      </div>

      {/* Blush dot */}
      <div
        className="absolute top-3 right-3 rounded-full"
        style={{ width: "6px", height: "6px", background: "#D4A8A0", opacity: 0.55 }}
      />
    </div>
  )
}

export function Galerie() {
  return (
    <section id="galerie" style={{ background: "#110d0b", padding: "9rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ color: "#D4A8A0", marginBottom: "1rem" }}
            >
              Galerie
            </p>
            <h2
              className="font-light"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
              }}
            >
              Schönheit, die man sieht
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Mosaic grid */}
        <AnimateOnScroll>
          <div
            className="grid grid-cols-2 md:grid-cols-3"
            style={{ gap: "0.75rem", gridAutoRows: "200px" }}
          >
            {galerie.map(item => (
              <GalerieItem key={item.label} item={item} />
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150}>
          <p className="text-center text-sm" style={{ color: "rgba(255,255,255,0.28)", marginTop: "2rem" }}>
            Echte Fotos folgen · Alle Behandlungen von unserem Team
          </p>
        </AnimateOnScroll>

      </div>
    </section>
  )
}
