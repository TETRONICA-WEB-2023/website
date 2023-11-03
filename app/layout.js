"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Poppins } from "next/font/google";
import { AuthContextProvider } from "./context/AuthContext";
import { useEffect, Suspense } from 'react';
import localFont from 'next/font/local';

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '700'], style: ["normal", "italic"]});

const gotham = localFont({
  src: [
    {
      path: '../public/fonts/Gotham-Bold.woff2',
      weight: '700',
    }
  ],
});

// export const metadata = {
//   title: "TETRONICA KPU KMTETI",
//   description: "Made with love",
// };

export default function RootLayout({ children }) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);
    return (
    <html lang="en">
    <title>TETRONICA</title>
      <style jsx global>{`
        :root {
          --gotham-font: ${gotham.style.fontFamily};
        }
        .gotham-bold {
          font-family: var(--gotham-font);
        }
      `}</style>
      <body className={poppins.className}>
      {/* <body className={gotham.style.fontFamily}> */}
        <Suspense fallback={<div>Loading...</div>}>
        <AuthContextProvider>
          <Navbar />
          <div className="wrapper">
          {children}
          </div>
          <Footer/>
        </AuthContextProvider>
        </Suspense>
      </body>
    </html>
  );
}
