import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Illini Men's Water Polo | University of Illinois",
  description:
    "Official website for Illini Men's Water Polo at the University of Illinois Urbana-Champaign. Illinois club water polo, UIUC men's water polo, Illini water polo, and more. Find our schedule, roster, news, and contact info.",
  icons: {
    icon: [
      {
        url: "/images/blocki-icon-large.png",
        type: "image/png",
        sizes: "384x384",
      },
    ],
    shortcut: "/images/blocki-icon-large.png",
    apple: "/images/blocki-icon-large.png",
  },
  keywords: [
    "illini men's water polo",
    "illinois club water polo",
    "uiuc water polo",
    "mens water polo illinois",
    "illini water polo",
    "university of illinois water polo",
    "illinois men's water polo",
    "illini club water polo",
    "illinois mens water polo",
    "uiuc mens water polo",
    "illinois water polo club",
    "illini water polo club",
  ].join(", "),
  openGraph: {
    title: "Illini Men's Water Polo | University of Illinois",
    description:
      "Official website for Illini Men's Water Polo at the University of Illinois Urbana-Champaign. Illinois club water polo, UIUC men's water polo, Illini water polo, and more.",
    url: "https://illinimenswopo.web.illinois.edu/",
    siteName: "Illini Men's Water Polo",
    images: [
      {
        url: "/images/illinois.png",
        width: 800,
        height: 600,
        alt: "Illini Men's Water Polo Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  generator: "v0.dev",
  authors: [
    {
      name: "Illini Men's Water Polo",
      url: "https://illinimenswopo.web.illinois.edu/",
    },
  ],
  creator: "Illini Men's Water Polo",
  publisher: "Illini Men's Water Polo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
