import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "ÉCLAT STUDIO – Kosmetik & Beauty Hamburg-Winterhude",
  description:
    "Premium Kosmetikstudio in Hamburg-Winterhude. Gesichtsbehandlungen, Anti-Aging, Wimpernlifting und mehr. Termin online buchen.",
  keywords: ["Kosmetikstudio Hamburg", "Gesichtsbehandlung Winterhude", "Anti-Aging Hamburg", "Wimpernlifting Hamburg", "ÉCLAT STUDIO"],
  openGraph: {
    title: "ÉCLAT STUDIO – Kosmetik & Beauty Hamburg-Winterhude",
    description: "Premium Kosmetikstudio in Hamburg-Winterhude. Buchen Sie jetzt Ihren Termin.",
    locale: "de_DE",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${dmSans.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
