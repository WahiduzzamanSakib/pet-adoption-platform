import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navber from "@/components/Navber";
import { ToastContainer } from "react-toastify";
import Providers from "./providers";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://pet-adoption-platform-flax.vercel.app"),
  title: "Pet Adoption Platform | Find Your New Best Friend",
  description:
    "Discover loving dogs, cats, birds, rabbits, and other pets waiting for their forever homes. Give a rescued pet a second chance and make a lifelong companion today.",
  openGraph: {
    title: "Pet Adoption Platform | Find Your New Best Friend",
    description:
      "Discover loving dogs, cats, birds, rabbits, and other pets waiting for their forever homes.",
    url: "https://pet-adoption-platform-flax.vercel.app",
    siteName: "Pet Adoption Platform",
    images: [
      {
        url: "/Pet-Adoption.png",
        width: 1200,
        height: 630,
        alt: "Pet Adoption Platform - Find Your New Best Friend",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Adoption Platform | Find Your New Best Friend",
    description:
      "Discover loving dogs, cats, birds, rabbits, and other pets waiting for their forever homes.",
    images: ["/Pet-Adoption.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <Navber />
          <main className="flex-1">{children}</main>
          <Footer />

          <ToastContainer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}