import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Shaidul Houqe",
  description: "Experienced dental surgeon dedicated to exceptional oral care. Offering comprehensive services including general, cosmetic, restorative, implant dentistry, and oral surgery. Patient-centered approach for comfort and satisfaction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Open Graph meta tags for the feature picture */}
        <meta property="og:title" content="Dr. Shaidul Houqe" />
        <meta property="og:description" content="Experienced dental surgeon dedicated to exceptional oral care. Offering comprehensive services including general, cosmetic, restorative, implant dentistry, and oral surgery. Patient-centered approach for comfort and satisfaction." />
        <meta property="og:image" content="/gird4.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://site-dun-one.vercel.app/" /> {/* Replace with your actual URL */}
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
