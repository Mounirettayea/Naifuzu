import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NAIFUZU — Technology for Tomorrow",
  description: "Intelligent systems, secure infrastructure and next-generation technology.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
