import BundlePage from "@/components/BundlePage";
import { site } from "@/lib/site";

export default function Page() {
  return (
    <BundlePage
      eyebrow="Digitales Bundle"
      title="Recruiting ohne HR-Abteilung"
      subtitle="Ein strukturiertes Recruiting-System für KMU – ohne Bauchgefühl."
      problemBullets={[
        "Zu wenige oder falsche Bewerbungen",
        "Unstrukturierte Interviews",
        "Entscheidungen aus dem Bauch heraus",
        "Lange Time-to-Hire",
      ]}
      solutionText="Dieses Bundle zeigt dir, wie Recruiting auch ohne HR-Abteilung professionell funktioniert – mit Prozess, Vorlagen und klarer Bewertungslogik."
      included={[
        "Recruiting-Prozess von A–Z",
        "Stellenanzeigen-Templates",
        "Interviewleitfäden",
        "Scorecards & Bewertungslogik",
        "ATS-Entscheidungshilfe",
      ]}
      forWho={[
        "KMU mit offenen Stellen",
        "Geschäftsführer:innen",
        "Führungskräfte, die einstellen",
      ]}
      notForWho={[
        "Unternehmen ohne Einstellungsbedarf",
        "Teams, die komplett ohne Struktur arbeiten wollen",
      ]}
      outcome={[
        "Bessere Bewerbungen",
        "Klarere Entscheidungen",
        "Schnelleres Recruiting",
      ]}
      ctaPrimary={{ label: "Jetzt kaufen", href: site.checkout.recruitingOhneHr }}
      ctaSecondary={{ label: "Beratung anfragen", href: site.consultingCtaUrl }}
    />
  );
}
