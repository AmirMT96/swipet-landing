import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Swipet – Love at first sniff",
  description:
    "Swipet – Die App, die Tierfreunde verbindet. Gib uns Feedback und sei dabei wenn wir launchen.",
  metadataBase: new URL("https://swipet.de"),
  openGraph: {
    title: "Swipet – Love at first sniff",
    description: "Gib uns Feedback und sei dabei wenn wir launchen.",
    url: "https://swipet.de",
    siteName: "Swipet",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swipet – Love at first sniff",
    description: "Gib uns Feedback und sei dabei wenn wir launchen.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
