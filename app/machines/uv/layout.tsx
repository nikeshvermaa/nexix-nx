import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UV Printing Machines | Wide-Format UV Printer | NEXIX NX",

  description:
    "Explore the NEXIX NX-UV wide-format UV printing solution for banners, advertising graphics and large-format production with print widths from 1.8 to 5.2 metres.",

  keywords: [
    "NEXIX NX UV printer",
    "NEXIX NX-UV",
    "UV printing machine",
    "wide-format UV printer",
    "UV printer for banners",
    "large-format UV printing machine",
    "advertising printing machine",
    "wide-format printing machine",
  ],

  alternates: {
    canonical: "https://nexix-nx.com/machines/uv",
  },

  openGraph: {
    title: "UV Printing Machines | Wide-Format UV Printer | NEXIX NX",
    description:
      "NEXIX NX-UV wide-format UV printing technology for banners, advertising graphics and large-format production.",
    url: "https://nexix-nx.com/machines/uv",
    siteName: "NEXIX NX",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function UVLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}