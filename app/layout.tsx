import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  description:
    "CRACKING THE CODE: SOLVE A PUZZLE, WIN AN NFT ON SOLANA! Welcome to a cipher not of letters, but of senses! Systethesia is a neurological condition where stimulation in one sense triggers experiences in another. Today, we will explore a cryptogram based on aesthetiac synesthesia, where letters and numbers evoke specific colors. Prepare to flex your mental muscles and potentially snag a coveted Solana NFT by conquering a cryptic challenge.",
  icons: {
    icon: "/logo.jpeg",
  },
  title: "SinSorry - A Systethetic Cryptogram",
};

export default function Layout({ children }: any) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="CRACKING THE CODE: SOLVE A PUZZLE, WIN AN NFT ON SOLANA!"
        ></meta>
      </head>
      <body>
        <GoogleAnalytics gaId="G-975T6WJ8KT" />
        <Navbar />
        <div className="container mx-auto pb-40">
          {children}
        </div>     
      <Footer />

      </body>

    </html>
  );
}
