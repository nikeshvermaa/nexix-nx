import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXIX NX | Digital Printing Machines & Inks",
  description:
    "NEXIX NX provides advanced digital printing machines, sublimation printers, direct-to-fabric printers and premium digital printing inks with reliable technical support.",
  keywords: [
    "NEXIX NX",
    "digital printing machines",
    "digital textile printing machines",
    "sublimation printing machines",
    "direct to fabric printing machines",
    "digital printing inks",
    "textile printing machines",
  ],
  authors: [{ name: "NEXIX NX" }],
  creator: "NEXIX NX",
  publisher: "NEXIX NX",

  metadataBase: new URL("https://nexix-nx.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "NEXIX NX | Digital Printing Machines & Inks",
    description:
      "Explore advanced digital printing machines and premium inks from NEXIX NX.",
    url: "https://nexix-nx.com",
    siteName: "NEXIX NX",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
