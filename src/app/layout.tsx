import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "../styles/globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diamond Gym Lounge | Premium Transformation",
  description: "A premium, immersive, transformation-focused luxury gym experience.",
  openGraph: {
    title: "Diamond Gym Lounge",
    description: "Build the body you deserve at Diamond Gym Lounge.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
