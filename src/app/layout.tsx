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
  title: "The Eternal September Calendar",
  description: "The September that never ended",
  openGraph: {
    title: "The Eternal September Calendar",
    description: "The September that never ended",
    images: [
      {
        url: "/preview.jpg",
        width: 1024,
        height: 1024,
        alt: "Eternal September Calendar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Eternal September Calendar",
    description: "The September that never ended",
    images: ["/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
