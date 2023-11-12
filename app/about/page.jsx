import React from 'react'
import "./About.css";

const page = () => {
  return (
    <main className='text-white'>
    <section id="kpu">
      <div class="outer-border">
        <div class="inner-border">
          <h1>KOMISI PEMILIHAN UMUM</h1>
          <h3>KMTETI 2023</h3>
          <p>
            Komisi Pemilihan Umum Keluarga Mahasiswa Teknik Elektro dan
            Teknologi Informasi Fakultas Teknik Universitas Gadjah Mada yang
            selanjutnya disebut KPU adalah suatu komisi yang menyelenggarakan
            pemilu berdasarkan Undang-Undang Pemilu. Pada tahun ini, KPU KMTETI
            mengusung tema TETRONICA. TETRONICA sendiri merupakan singkatan dari
            .......
          </p>
        </div>
      </div>
    </section>

    <section id="tugas">
      <div class="outer-border">
        <div class="inner-border">
          <h1>TUGAS DAN WEWENANG</h1>
          <h3>KPU KMTETI</h3>
          <ol>
            <li>
              Merencanakan, mengkoordinasikan, dan memantau penyelenggaraan
              pemilu.
            </li>
            <li>
              Menetapkan, mengkoordinasikan, menyelenggarakan, dan mengendalikan
              semua tahapan pelaksanaan pemilu.
            </li>
            <li>Menetapkan daftar pemilih.</li>
            <li>Menetapkan peserta pemilu.</li>
            <li>Merancang SPS.</li>
            <li>
              Menetapkan waktu, tanggal, tata cara pelaksanaan kampanye, dan
              pemungutan suara.
            </li>
            <li>Mengumumkan Ketua PH KMTETI FT UGM terpilih.</li>
            <li>Melakukan evaluasi dan pelaporan pelaksanaan pemilu.</li>
            <li>
              Melaksanakan tugas dan kewenangan yang diatur Undang-Undang
              Pemilu.
            </li>
            <li>
              Menyusun peraturan yang belum diatur dalam Undang-Undang Pemilu
              atas persetujuan Ketua PH KMTETI FT UGM
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section id="panitia">
      <div class="outer-border">
        <div class="inner-border">
          <h1>ORGANIZING COMMITTEE</h1>
          <h3>KPU KMTETI 2023</h3>
          <div
            id="carousel-panitia"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="/panitia/KETUA_SEKBEND.png"
                  class="d-block"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img src="/panitia/ACARA.png" class="d-block" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="/panitia/IT.png" class="d-block" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="/panitia/DDD.png" class="d-block" alt="..." />
              </div>
              <div class="carousel-item">
                <img
                  src="/panitia/PUBLIC_RELATION.png"
                  class="d-block"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img src="/panitia/PERKAP.png" class="d-block" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carousel-panitia"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carousel-panitia"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  {/* Akhir OUR TEAM */}
  </main>
  )
}

export default page