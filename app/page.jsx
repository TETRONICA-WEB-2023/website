import Image from 'next/image';
import Swal from 'sweetalert2';
import Script from 'next/script';
import "./mainpage.css";

export default function Home() {
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
          Suaramu adalah kunci kemajuan <span>KMTETI</span>, gunakan hak pilihmu.
        </p>
        <div className="header-button-container">
          <button id="vote-button" className="button">
            Vote
          </button>
          <button id="daftar-button" className="button">
            Daftar
          </button>
        </div>
      </div>
      <div class="logo-container" data-aos="fade-left" data-aos-duration="1200">
        <div className="header-logo">
          <img src="/tetronica.svg" alt="TETRONICA LOGO" />
        </div>
      </div>
    </section>
    <section id="calon-page">
      <h1 className="heading">Who&#39;s Next ??</h1>
      <div className="foto-calon-container">
        <div className="foto-calon">
          <img src="/calon-sementara.png" alt="calon 1" />
        </div>
        <div className="foto-calon">
          <img src="/calon-sementara.png" alt="calon 2" />
        </div>
        <div className="foto-calon">
          <img src="/calon-sementara.png" alt="calon 3" />
        </div>
      </div>
      <button className="button">Profil Selengkapnya</button>
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
      <button class="button">Baca Selengkapnya</button>
    </section>
    <section id="tata-cara-page">
      <h1 class="heading">Tata Cara</h1>
      <div class="video-container">anggap tata cara</div>
    </section>
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

  )
}
