import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Copy from "./components/Copy";
import { ProductProvider } from "@/context/productContext";
import { BlogProvider } from "@/context/blogContext";

const nunito = localFont({
  src: "./fonts/Nunito-VariableFont_wght.ttf",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Juki Nuts",
  description: "Natural, Crunchy & Yummy Cashews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <BlogProvider>
        <ProductProvider>
          <body
            className={nunito.className}
          >
              <Header/>
              {children}
              <Footer/>
              <Copy/>
          </body>
        </ProductProvider>
      </BlogProvider>
    </html>
  );
}
