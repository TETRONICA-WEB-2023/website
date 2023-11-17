import React from "react";
import "./thankyou.css";
import Link from "next/link";

export default function thankYou() {
  return (
    <div className="thankyou-container">
      <div className="outer-border">
        <div className="inner-border">
          <div className="headings">
            <h1 className="h-top">TERIMAKASIH TELAH BERPARTISIPASI DALAM</h1>
            <h3 className="h-bottom">PEMILIHAN UMUM KMTETI 2023</h3>
          </div>
          <img className="logo-center" src="/tetronica.svg" alt="logo" />
          <Link href='/' className="home-btn">Kembali ke Beranda</Link>
        </div>
      </div>
    </div>
  );
}
