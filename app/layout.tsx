



import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Corso Siciliano | Premier Cane Corso Breeders in Chicago | Italian & European Puppies for Sale",
  description: "Discover Corso Siciliano, Chicago's trusted Cane Corso breeder, offering purebred Italian and European puppies and male dogs for breeding. Dedicated to high-quality breeding, we specialize in the majestic Cane Corso. Contact us to find your perfect companion or to inquire about our breeding services.",
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
