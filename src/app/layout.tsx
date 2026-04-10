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

export const metadata: Metadata = {
  title: "Jules Tranchier | AI-augmented Full-Stack Engineer",
  description:
    "Développeur Full-Stack freelance basé à Paris. +7 ans d'expérience en React, Node.js, GraphQL, TypeScript. Diplômé de l'École 42.",
  openGraph: {
    title: "Jules Tranchier | AI-augmented Full-Stack Engineer",
    description:
      "Développeur Full-Stack freelance basé à Paris. +7 ans d'expérience en React, Node.js, GraphQL, TypeScript.",
    locale: "fr_FR",
    type: "website",
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
