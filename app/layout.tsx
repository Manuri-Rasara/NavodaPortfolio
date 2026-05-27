import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { GlobalCursor } from "@/components/GlobalCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  metadataBase: new URL(
    "https://navoda-portfolio-sepia.vercel.app"
  ),

  title: "Navoda",
  description: "Premium UI/UX & Graphic Design Experience",

  openGraph: {
    title: "Navoda Rajapaksha",
    description: "Premium UI/UX & Graphic Design Experience",
    url: "/",
    siteName: "Navoda Rajapaksha",

    images: [
      {
        url: "/preview-v2.png",
        width: 1200,
        height: 630,
        alt: "Navoda Rajapaksha Preview",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Navoda Rajapaksha",
    description: "Premium UI/UX & Graphic Design Experience",

    images: ["/preview-v2.png"],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col cursor-none">
        <GlobalCursor/>
        {children}
      </body>
    </html>
  );
}
