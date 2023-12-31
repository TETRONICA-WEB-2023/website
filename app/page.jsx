"use client";
import Image from "next/image";
import Swal from "sweetalert2";
import Script from "next/script";
import "./mainpage.css";
import { UserAuth } from "./context/AuthContext";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar, Pie } from "react-chartjs-2";
import { db } from "./firebase";
import { ref, get, child, onValue, set, push, update } from "firebase/database";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  BarElement,
  ChartDataLabels,
  ArcElement,
  Legend
);

export default function Home() {
  const { user, googleSignIn, logOut, start, end, kandidat } = UserAuth();
  const [jumlah, setJumlah] = useState(0);

  useEffect(() => {
    var counts = ref(db, '/status');
    (function timerVote() {
      onValue(counts, (snapshot) => {
        if(snapshot.exists()) {
          setJumlah(Object.keys(snapshot.val()).length);
        }
      });
      setTimeout(timerVote, 1000);
    })();
  }, [])

  return (
    <>
      <section id="header-page">
        <svg
          data-aos="zoom-in"
          data-aos-duration="1500"
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="400"
          viewBox="0 0 328 337"
          fill="none"
        >
          <path
            d="M0.971767 108.688L326.643 0.793226L251.847 335.619L0.971767 108.688Z"
            fill="#5A189A"
          />
        </svg>
        <div class="header-text" data-aos="fade-right" data-aos-duration="1200">
          <h1 className="heading">
            <span>TETI</span> Road to The New Captain
          </h1>
          <p>
            Suaramu adalah kunci kemajuan <span>KMTETI</span>, gunakan hak
            pilihmu.
          </p>
          <div className="header-button-container">
            {start > 0 ? (
              <button
                id="vote-button"
                className="button-disabled"
                disabled={true}
              >
                {Math.floor(start / (1000 * 60 * 60 * 24))}D{" "}
                {Math.floor((start % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}
                H {Math.floor((start % (1000 * 60 * 60)) / (1000 * 60))}M{" "}
                {Math.floor((start % (1000 * 60)) / 1000)}S
              </button>
            ) : end < 0 ? (
              <button
                id="vote-button"
                className="button-disabled"
                disabled={true}
              >
                Vote Ended
              </button>
            ) : user && end > 0 ? (
              <Link
                id="vote-button"
                className="button"
                href="/vote"
                role="button"
              >
                Vote
              </Link>
            ) : (
              <button
                id="vote-button"
                className="button"
                onClick={googleSignIn}
              >
                Login
              </button>
            )}

            {/* <button id="daftar-button" className="button" onClick={handleSignIn}>
            Login
          </button> */}
          </div>
        </div>
        <div
          class="logo-container"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div className="header-logo">
            <img src="/tetronica.svg" alt="TETRONICA LOGO" />
          </div>
        </div>
      </section>
      {/* <section>
      <div className="countdown">
      <ul>
        <li><span id="days"></span>Days</li>
        <li><span id="hours"></span>Hours</li>
        <li><span id="minutes"></span>Minutes</li>
        <li><span id="seconds"></span>Seconds</li>
      </ul>
      </div>
    </section> */}
      <section id="calon-page">
        <h1 className="heading">Who&#39;s Next?</h1>
        <div className="foto-calon-container">
          <div id="calon-1" className="foto-calon">
            <img src="/kandidat/calon1b.png" alt="calon 1" />
          </div>
          <p className="vs-container">
            <span className="vs-v">V</span>
            <span className="vs-s">S</span>
          </p>
          <div id="calon-2" className="foto-calon">
            <img src="/kandidat/calon2b.png" alt="calon 2" />
          </div>
          
          {/* <div className="foto-calon">
            <img src="/kandidat/calon3b.png" alt="calon 3" />
          </div> */}
        </div>
        { user? (
        <div className="percentage-vote">
            Sebanyak {jumlah} ({(((jumlah) / 854) * 100).toFixed(2)}%) dari 854 peserta telah menyalurkan suaranya. Ayo salurkan suaramu!
        </div>
        ) : ( null )}
        {/* {user ? (
          <div className="header-text live-count">
            <div className="percentage-vote">
              {voteCount[0]} suara ({((voteCount[0] / 854) * 100).toFixed(2)}%)
            </div>
            <div className="percentage-vote">
              {voteCount[1]} suara (
              {((voteCount[1] / 854) * 100 ?? 0).toFixed(2)}%)
            </div>
          </div>
        ) : null} */}
        <Link className="button" href="/caket" role="button">
          Profil dan Visi Misi
        </Link>
      </section>
      <section id="about-page">
        <div class="outer-border">
          <div class="about-text">
            <p>
              TETRONICA diambil dari kata elektronika dan TETI. Elektronika
              artinya ilmu yang membahas mengenai elektron. Dari elektron kita
              bisa belajar bahwa suatu perbedaan dapat menyatukan kita dan
              menjadikan kita lebih baik. Dengan tema ini diharapkan masyarakat
              TETITB bisa semakin harmonis dan makin erat kekeluargaannya,
              sehingga dapat menciptakan lingkungan yang nyaman dan hangat bagi
              seluruh masyarakat TETITB.
            </p>
          </div>
        </div>
        <Link className="button" href="/about" role="button">
          Baca Selengkapnya
        </Link>
      </section>
      {/* <section id="tata-cara-page">
        <h1 class="heading">Tata Cara</h1>
        <div className="tatacara-voting">
          
        </div>
      </section> */}
      {/* <section id="timeline-page">
      <h1 className="heading">Timeline</h1>
      <div className="timeline">
        <div className="cards">
          <div className="info">
            <h3 className="title">30 Oktober</h3>
            <p>Technical Meeting</p>
          </div>
        </div>
        <div className="cards">
          <div className="info">
            <h3 className="title">30 Oktober - 3 November</h3>
            <p>Pemilihan Calon Ketua</p>
          </div>
        </div>
        <div className="cards">
          <div className="info">
            <h3 className="title">6 November</h3>
            <p>Pengundian Nomor Urut</p>
          </div>
        </div>
        <div className="cards">
          <div className="info">
            <h3 className="title">7 - 9 November</h3>
            <p>Fit &amp; Proper Test</p>
          </div>
        </div>
        <div className="cards">
          <div className="info">
            <h3 className="title">13 November</h3>
            <p>Orasi</p>
          </div>
        </div>
      </div>
      <div className="timeline timeline-reverse">
        <div className="cards" />
        <div className="cards">
          <div className="info">
            <h3 className="title">14 - 15 November</h3>
            <p>Kampanye</p>
          </div>
        </div>
        <div className="cards">
          <div className="info">
            <h3 className="title">20 November</h3>
            <p>Debat</p>
          </div>
        </div>
        <div className="cards">
          <div className="info">
            <h3 className="title">21 November</h3>
            <p>Masa Tenang</p>
          </div>
        </div>
        <div className="cards">
          <div className="info">
            <h3 className="title">22 - 23 November</h3>
            <p>Masa Pemilu</p>
          </div>
        </div>
        <div className="cards">
          <div className="info">
            <h3 className="title">25 November</h3>
            <p>Pengumuman</p>
          </div>
        </div>
      </div>
    </section> */}
    </>
  );
}
