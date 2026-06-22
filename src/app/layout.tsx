import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aurea-dental.vercel.app"),
  title: "Aurea Dental Studio | Smile with Confidence",
  description:
    "Premium aesthetic, restorative, implant, orthodontic, and preventive dentistry in a calm modern clinic experience.",
  keywords: [
    "Aurea Dental Studio",
    "premium dental clinic",
    "smile design",
    "dental implants",
    "cosmetic dentistry",
    "preventive dentistry"
  ],
  openGraph: {
    title: "Aurea Dental Studio",
    description: "Smile with Confidence. Premium dentistry designed around precision, comfort, and natural aesthetics.",
    type: "website",
    locale: "en_US",
    siteName: "Aurea Dental Studio",
    images: [
      {
        url: "/images/originals/tooth-close-up.png",
        width: 1200,
        height: 630,
        alt: "Aurea Dental Studio premium clinic landing page"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurea Dental Studio",
    description: "Smile with Confidence."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
