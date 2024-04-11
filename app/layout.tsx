import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><title>SinSorry - A Systethetic Cryptogram</title>
      <meta charSet="UTF-8"></meta>
  <meta name="description" content="CRACKING THE CODE: SOLVE A PUZZLE, WIN AN NFT ON SOLANA!
Welcome to a cipher not of letters, but of senses! Systethesia is a neurological condition where stimulation in one sense triggers experiences in another. Today, we will explore a cryptogram based on aesthetiac synesthesia, where letters and numbers evoke specific colors.
Prepare to flex your mental muscles and potentially snag a coveted Solana NFT by conquering a cryptic challenge."></meta>
  <meta name="keywords" content="CRACKING THE CODE: SOLVE A PUZZLE, WIN AN NFT ON SOLANA!"></meta>
      <link rel="stylesheet" href="assets/css/main.css" /></head>
      {children}
    </html>
  );
}
