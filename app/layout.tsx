import type { Metadata } from "next";
import { SitePreferencesProvider } from "@/components/site-preferences";
import "./globals.css";

export const metadata: Metadata = {
  title: "William Cely López | Data Analytics, Software & IT",
  description:
    "Portafolio de William Cely López: analítica de datos con Power BI, Python y SQL, desarrollo de software y soluciones IT. Portfolio: data analytics, software development, and IT solutions.",
  openGraph: {
    title: "William Cely López | Data, software & IT",
    description:
      "Analítica de datos, software y soluciones IT · Data analytics, software, and IT solutions.",
    locale: "es_CO",
    alternateLocale: ["en_US"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <SitePreferencesProvider>{children}</SitePreferencesProvider>
      </body>
    </html>
  );
}
