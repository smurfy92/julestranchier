import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const siteUrl = "https://julestranchier.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jules Tranchier | AI-augmented Full-Stack Engineer",
  description:
    "Développeur Full-Stack freelance basé à Paris. +7 ans d'expérience en React, Node.js, GraphQL, TypeScript. Diplômé de l'École 42.",
  openGraph: {
    title: "Jules Tranchier | AI-augmented Full-Stack Engineer",
    description:
      "Développeur Full-Stack freelance basé à Paris. +7 ans d'expérience en React, Node.js, GraphQL, TypeScript.",
    url: siteUrl,
    siteName: "Jules Tranchier",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Jules Tranchier — AI-augmented Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jules Tranchier | AI-augmented Full-Stack Engineer",
    description:
      "Développeur Full-Stack freelance basé à Paris. +7 ans d'expérience en React, Node.js, GraphQL, TypeScript.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
