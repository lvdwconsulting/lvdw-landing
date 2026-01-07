import "./globals.css";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Digitale HR-Bundles für KMU | lvdw consulting",
  description:
    "HR-Bundles, Vorlagen & Systeme für KMU: Recruiting, HR-Setup, Digital HR & HR für Nicht-HR. Klar. Umsetzbar. Praxisnah.",
  metadataBase: new URL(site.domain),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-zinc-950 text-zinc-50">
        {children}
      </body>
    </html>
  );
}
