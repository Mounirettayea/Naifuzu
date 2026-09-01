import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NAIFUZU — Technology for Tomorrow",
  description:
    "NAIFUZU engineers intelligent systems, secure infrastructure and next-generation technology for ambitious businesses.",
  applicationName: "NAIFUZU",
  keywords: [
    "NAIFUZU",
    "AI",
    "Artificial Intelligence",
    "Cybersecurity",
    "Cloud Infrastructure",
    "IoT",
    "Intelligent Systems",
  ],
  authors: [{ name: "NAIFUZU" }],
  creator: "NAIFUZU",
  metadataBase: new URL("https://naifuzu.vercel.app"),
  openGraph: {
    title: "NAIFUZU — Technology for Tomorrow",
    description:
      "Intelligent systems, secure infrastructure and next-generation technology.",
    url: "https://naifuzu.vercel.app",
    siteName: "NAIFUZU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NAIFUZU — Technology for Tomorrow",
    description:
      "Intelligent systems, secure infrastructure and next-generation technology.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#03070d",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
