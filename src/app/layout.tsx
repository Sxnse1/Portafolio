import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/CommandPalette";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://portafolio.starteducation.page";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alejandro Dávila — Desarrollador Backend / Full-Stack",
    template: "%s — Alejandro Dávila",
  },
  description:
    "Portafolio de Alejandro Dávila, egresado de Ingeniería en Sistemas Computacionales y Electrónicos, desarrollador backend/full-stack especializado en Node.js, bases de datos y arquitecturas offline-first.",
  keywords: [
    "Alejandro Dávila",
    "desarrollador backend",
    "desarrollador full-stack",
    "Node.js",
    "Next.js",
    "portafolio desarrollador",
  ],
  authors: [{ name: "Alejandro Dávila" }],
  creator: "Alejandro Dávila",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    title: "Alejandro Dávila — Desarrollador Backend / Full-Stack",
    description:
      "Portafolio de Alejandro Dávila, desarrollador backend/full-stack especializado en Node.js, bases de datos y arquitecturas offline-first.",
    siteName: "Alejandro Dávila",
    // La imagen (1200x630) se genera automáticamente desde opengraph-image.tsx.
  },
  twitter: {
    card: "summary_large_image",
    title: "Alejandro Dávila — Desarrollador Backend / Full-Stack",
    description:
      "Portafolio de Alejandro Dávila, desarrollador backend/full-stack.",
    // La imagen se genera automáticamente desde twitter-image.tsx (reexporta opengraph-image.tsx).
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}
