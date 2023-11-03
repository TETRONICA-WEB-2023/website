"use client";
import "../globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Poppins } from "next/font/google";
import { AuthContextProvider } from "../context/AuthContext";
import { useEffect, Suspense } from 'react';

const poppins = Poppins({ subsets: ["latin"], weight: "400"});

export default function RootLayout({ children }) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);
    return (
    <html lang="en">
    <title>TETRONICA</title>
      <body className={poppins.className}>
        <Suspense>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
        </Suspense>
      </body>
    </html>
  );
}
