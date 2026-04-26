"use client"

import { AnimateOnScroll } from "./AnimateOnScroll"
import { Sparkles, Eye, Leaf, User } from "lucide-react"

const team = [
  {
    name: "Clara Maurer",
    role: "Inhaberin & Skincare-Expertin",
    spec: "Anti-Aging, Hautanalyse, Beratung",
    years: "10 Jahre Erfahrung",
    icon: Sparkles,
    gradient: "linear-gradient(160deg, #180c0a 0%, #321810 55%, #120806 100%)",
  },
  {
    name: "Julia Hoffmann",
    role: "Senior Kosmetikerin",
    spec: "Anti-Aging, Mikrodermabrasion, LED",
    years: "8 Jahre Erfahrung",
    icon: Leaf,
    gradient: "linear-gradient(160deg, #160e0a 0%, #2c1a10 55%, #100a06 100%)",
  },
  {
    name: "Anna Richter",
    role: "Kosmetikerin & Wimpern-Expertin",
    spec: "Wimpernlifting, Browlamination, Tinting",
    years: "5 Jahre Erfahrung",
    icon: Eye,
    gradient: "linear-gradient(160deg, #180a0c 0%, #301016 55%, #120608 100%)",
  },
  {
    name: "Max Berger",
    role: "Kosmetiker",
    spec: "Herrenbehandlungen, Körperpflege",
    years: "4 Jahre Erfahrung",
    icon: User,
    gradient: "linear-gradient(160deg, #0e0c14 0%, #1a1428 55%, #080a10 100%)",
  },
]

export function Team() {
  return (
    <section id="team" style={{ background: "#0c0908", padding: "9rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ color: "#D4A8A0", marginBottom: "1rem" }}
            >
              Unser Team
            </p>
            <h2
              className="font-light"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
              }}
            >
              Vier Experten. Eine Vision.
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Team grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: "1.5rem" }}
        >
          {team.map((member, i) => (
            <AnimateOnScroll key={member.name} delay={i * 80}>
              <div
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(212,168,160,0.3)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)" }}
              >
                {/* Photo placeholder */}
                <div className="relative w-full" style={{ height: "260px", background: member.gradient }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "50%",
                        background: "rgba(212,168,160,0.15)",
                        border: "1px solid rgba(212,168,160,0.3)",
                      }}
                    >
                      <member.icon size={22} style={{ color: "#D4A8A0" }} strokeWidth={1.2} />
                    </div>
                  </div>
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(12,9,8,0.7) 0%, transparent 55%)" }}
                  />
                </div>

                {/* Info */}
                <div style={{ padding: "1.5rem", background: "rgba(255,255,255,0.02)" }}>
                  <p className="font-semibold" style={{ fontSize: "0.9rem", marginBottom: "0.25rem" }}>{member.name}</p>
                  <p style={{ fontSize: "0.75rem", color: "#D4A8A0", marginBottom: "0.65rem" }}>{member.role}</p>
                  <p
                    className="leading-relaxed"
                    style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", marginBottom: "0.85rem" }}
                  >
                    {member.spec}
                  </p>
                  <p
                    className="font-medium tracking-[0.08em] uppercase"
                    style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.22)" }}
                  >
                    {member.years}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  )
}
