"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Poppins } from "next/font/google";
import { AuthContextProvider } from "./context/AuthContext";
import { useEffect, Suspense } from 'react';
import localFont from 'next/font/local';
import Script from 'next/script'
import { usePathname, headers } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '700'], style: ["normal", "italic"]});

const gotham = localFont({
  src: [
    {
      path: '../public/fonts/Gotham-Bold.woff2',
      weight: '700',
    }
  ],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const specificRoute = '/admin';
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
        AOS.init();
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
        .gotham {
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
        <AuthContextProvider>
          {pathname !== specificRoute && <Navbar />}
          {children}
          {pathname !== specificRoute && <Footer />}
        </AuthContextProvider>
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" crossOrigin="anonymous"></Script>
        <Script src="https://kit.fontawesome.com/fddf5c0916.js" crossOrigin="anonymous"></Script>
        <Script id="onScrollNavbar">
          {`
            let prevScrollPos = window.pageYOffset;
            window.onscroll = function() {
              const currentScrollPos = window.pageYOffset;
              if (prevScrollPos > currentScrollPos) {
                document.querySelector('.animnavbar').style.top = '0';
              } else {
                document.querySelector('.animnavbar').style.top = '-80px'; // Adjust this value as needed
              }
              prevScrollPos = currentScrollPos;
            };
          `}
        </Script>
      </body>
    </html>
  );
}
