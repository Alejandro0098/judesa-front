import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavComponent from './myComponents/NavComponent.jsx'
import { FooterComponent } from './myComponents/FooterComponent'
import { Toaster } from "@/components/ui/toaster"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CD Judesa FS",
  description: "Official Club Judesa Fútbol Sala web",
  icons: "/judesa_logo.jpeg"
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
        <NavComponent/>
          {children}

        <FooterComponent/>
        <Toaster />
      </body>
    </html>
  );
}
