"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Poppins } from "next/font/google";
import { AuthContextProvider } from "./context/AuthContext";
import { useEffect, Suspense } from 'react';
import localFont from 'next/font/local';
import Script from 'next/script'
import { usePathname, headers } from 'next/navigation';

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
  const pathname = usePathname();
  const specificRoute = '/admin';
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);
    return (
    <html lang="en">
    <title>TETRONICA</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style jsx global>{`
        :root {
          --gotham-font: ${gotham.style.fontFamily};
          --poppins-font: ${poppins.style.fontFamily};
        }
        .gotham-bold {
          font-family: var(--gotham-font);
        }

        .poppins {
          font-family: var(--poppins-font);
        }

        .heading {
          font-family: var(--gotham-font);
          font-size: 54px;
          color:  #fff;
        }
        .title {
          color: #fff;
          position: relative;
          font-family: var(--gotham-font);
          font-size: 18px;
        }
      `}</style>
      <body className={poppins.className}>
      {/* <body className={gotham.style.fontFamily}> */}
        <Suspense fallback={<div>Loading...</div>}>
        <AuthContextProvider>
          {pathname !== specificRoute && <Navbar />}
          <div className="navwrapper">
          {children}
          </div>
          {pathname !== specificRoute && <Footer />}
        </AuthContextProvider>
        </Suspense>
        <Script src="https://kit.fontawesome.com/fddf5c0916.js" crossOrigin="anonymous"></Script>
      </body>
    </html>
  );
}
