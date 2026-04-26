"use client"

import { AnimateOnScroll } from "./AnimateOnScroll"
import { Award, Heart, Leaf } from "lucide-react"

const usps = [
  {
    icon: Award,
    title: "Premium Wirkstoffe",
    desc: "Wir arbeiten ausschließlich mit hochwertigen Produkten wie Dermalogica, Dr. Hauschka und La Mer – für sichtbare Ergebnisse.",
  },
  {
    icon: Heart,
    title: "Individuelle Hautanalyse",
    desc: "Jede Haut ist einzigartig. Wir analysieren Ihren Hauttyp und entwickeln ein maßgeschneidertes Pflegekonzept für Sie.",
  },
  {
    icon: Leaf,
    title: "Ganzheitlicher Ansatz",
    desc: "Seit 2017 vereinen wir moderne Kosmetik mit natürlichen Methoden – für nachhaltige Schönheit von innen und außen.",
  },
]

export function UeberUns() {
  return (
    <section
      id="ueber-uns"
      style={{ background: "#110d0b", padding: "9rem 1.5rem" }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "5rem", alignItems: "center" }}>

          {/* Text */}
          <AnimateOnScroll>
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ color: "#D4A8A0", marginBottom: "1.25rem" }}
            >
              Über uns
            </p>
            <h2
              className="font-light"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
                marginBottom: "1.75rem",
              }}
            >
              Mehr als Kosmetik –<br />
              <span className="italic" style={{ color: "#D4A8A0" }}>ein Ritual für Ihre Haut.</span>
            </h2>

            {/* Divider */}
            <div style={{ width: "32px", height: "1px", background: "rgba(212,168,160,0.35)", marginBottom: "1.75rem" }} />

            <p
              className="leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem", marginBottom: "1.25rem" }}
            >
              ÉCLAT STUDIO wurde 2017 von Clara Maurer in Hamburg-Winterhude gegründet –
              einem der elegantesten Viertel der Stadt. Was als kleines, feines Kosmetikstudio
              begann, ist heute eine etablierte Adresse für anspruchsvolle Hautpflege
              und Wellnessbehandlungen.
            </p>
            <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem" }}>
              Unser Anspruch: Jede Kundin verlässt uns mit strahlender Haut und einem
              tiefen Gefühl der Entspannung. Nicht nur schöner – sondern wohler in der eigenen Haut.
            </p>
          </AnimateOnScroll>

          {/* USP Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {usps.map((u, i) => (
              <AnimateOnScroll key={u.title} delay={i * 100}>
                <div
                  className="flex transition-all duration-300"
                  style={{
                    gap: "1.25rem",
                    padding: "1.5rem",
                    borderRadius: "1rem",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "rgba(212,168,160,0.25)"
                    e.currentTarget.style.background = "rgba(212,168,160,0.05)"
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)"
                  }}
                >
                  <div
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "0.75rem",
                      background: "rgba(212,168,160,0.12)",
                      border: "1px solid rgba(212,168,160,0.25)",
                    }}
                  >
                    <u.icon size={16} style={{ color: "#D4A8A0" }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ marginBottom: "0.35rem" }}>{u.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{u.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
