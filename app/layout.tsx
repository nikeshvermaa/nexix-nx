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
  metadataBase: new URL("https://nexix-nx.com"),

  title: {
    default: "NEXIX NX | Digital Printing Machines & Inks",
    template: "%s | NEXIX NX",
  },

  description:
    "NEXIX NX provides digital printing machines, sublimation printers, direct-to-fabric printing machines and premium digital printing inks with reliable technical support.",

  keywords: [
    "NEXIX NX",
    "digital printing machines",
    "digital textile printing machines",
    "sublimation printing machines",
    "direct to fabric printing machines",
    "textile printing machines",
    "digital printing inks",
  ],

  authors: [{ name: "NEXIX NX" }],
  creator: "NEXIX NX",
  publisher: "NEXIX NX",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nexix-nx.com/",
    siteName: "NEXIX NX",
    title: "NEXIX NX | Digital Printing Machines & Inks",
    description:
      "Explore digital printing machines, textile printing solutions and premium digital printing inks from NEXIX NX.",
  },

  twitter: {
    card: "summary_large_image",
    title: "NEXIX NX | Digital Printing Machines & Inks",
    description:
      "Digital printing machines, textile printing solutions and premium digital printing inks from NEXIX NX.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NEXIX NX",
    url: "https://nexix-nx.com",
    description:
      "NEXIX NX provides digital printing machines, textile printing solutions and premium digital printing inks with technical support.",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}