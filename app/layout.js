"use client";
import Navbar from "./components/Navbar";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Poppins } from "next/font/google";
import { AuthContextProvider } from "./context/AuthContext";
import { useEffect, Suspense } from 'react';

const poppins = Poppins({ subsets: ["latin"], weight: "400"});

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
      <body className={poppins.className}>
        <Suspense fallback={<div>Loading...</div>}>
        <AuthContextProvider>
          <Navbar />
          {children}
        </AuthContextProvider>
        </Suspense>
      </body>
    </html>
  );
}
