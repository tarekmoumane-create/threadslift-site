import type { Metadata } from "next";
import { Instrument_Sans, Geist_Mono, Crimson_Pro } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Threadslift — Reddit organic that compounds.",
  description:
    "We get your brand mentioned in the Reddit threads your buyers already trust. Mentions stay live, rank on Google, and compound for years.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${geistMono.variable} ${crimsonPro.variable} h-full antialiased scroll-smooth scroll-pt-20`}
    >
      <body className="paper-grain min-h-full">{children}</body>
    </html>
  );
}
