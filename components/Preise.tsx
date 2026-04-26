import { AnimateOnScroll } from "./AnimateOnScroll"

const preise = [
  {
    kategorie: "Gesicht",
    items: [
      { name: "Klassische Gesichtsreinigung", preis: "ab 65 €" },
      { name: "Intensivpflege-Behandlung",    preis: "ab 95 €" },
      { name: "Anti-Aging Komplex",           preis: "ab 120 €" },
      { name: "Mikrodermabrasion",            preis: "ab 110 €" },
      { name: "LED-Lichttherapie",            preis: "ab 55 €" },
      { name: "Hyaluron-Infusion",            preis: "ab 85 €" },
      { name: "Hautanalyse",                  preis: "kostenlos" },
    ],
  },
  {
    kategorie: "Wimpern & Brauen",
    items: [
      { name: "Wimpernlifting",               preis: "ab 80 €" },
      { name: "Wimpern-Tinting",              preis: "ab 30 €" },
      { name: "Browlamination",               preis: "ab 65 €" },
      { name: "Brauen-Tinting",               preis: "ab 25 €" },
      { name: "Lash & Brow Combo",            preis: "ab 95 €" },
    ],
  },
  {
    kategorie: "Körper & Specials",
    items: [
      { name: "Körperpeeling",                preis: "ab 75 €" },
      { name: "Entspannungsmassage",          preis: "ab 85 €" },
      { name: "Fango-Wickel",                 preis: "ab 70 €" },
      { name: "Rücken-Behandlung",            preis: "ab 80 €" },
      { name: "Braut-Beauty Paket",           preis: "auf Anfrage" },
    ],
  },
]

export function Preise() {
  return (
    <section id="preise" style={{ background: "#110d0b", padding: "9rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ color: "#D4A8A0", marginBottom: "1rem" }}
            >
              Preisliste
            </p>
            <h2
              className="font-light"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
                marginBottom: "0.75rem",
              }}
            >
              Transparente Preise
            </h2>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.38)" }}>
              Alle Preise inkl. MwSt. · Endpreis je nach Behandlungsaufwand
            </p>
          </div>
        </AnimateOnScroll>

        {/* Price tables */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "1.5rem", alignItems: "start" }}
        >
          {preise.map((cat, i) => (
            <AnimateOnScroll key={cat.kategorie} delay={i * 100}>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}
              >
                {/* Category header */}
                <div
                  style={{
                    padding: "1.1rem 1.5rem",
                    borderBottom: "1px solid rgba(212,168,160,0.18)",
                    background: "rgba(212,168,160,0.05)",
                  }}
                >
                  <h3
                    className="font-light"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.25rem",
                      color: "#D4A8A0",
                    }}
                  >
                    {cat.kategorie}
                  </h3>
                </div>

                {/* Items */}
                <div style={{ padding: "0.5rem 1.5rem 1rem" }}>
                  {cat.items.map((item, j) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between"
                      style={{
                        padding: "0.75rem 0",
                        borderBottom: j < cat.items.length - 1
                          ? "1px solid rgba(255,255,255,0.05)"
                          : "none",
                        fontSize: "0.875rem",
                      }}
                    >
                      <span style={{ color: "rgba(255,255,255,0.65)" }}>{item.name}</span>
                      <span className="font-medium" style={{ color: "#D4A8A0" }}>{item.preis}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Hinweis */}
        <AnimateOnScroll delay={200}>
          <p className="text-center" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.28)", marginTop: "2.5rem" }}>
            Alle Preise sind Richtwerte. Ihr genaues Angebot erhalten Sie beim Beratungsgespräch im Studio.
          </p>
        </AnimateOnScroll>

      </div>
    </section>
  )
}
