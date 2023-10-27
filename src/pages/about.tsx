import Image from 'next/image'
import { Poppins } from 'next/font/google'

const inter = Poppins({ weight: '400', style: 'normal', subsets: ['latin-ext'] })

export default function Home() {
  return (
    <main>
    <nav className="navbar navbar-expand-lg bg-transparent shadow">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img className="logo-kmteti" src="/logo-kmteti.png" alt="Bootstrap" width={40} height="" />
        <img className="logo-tetronica" src="/logo-tetronica.png" alt="Bootstrap" width={120} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="./">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              TATA CARA
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              TIMELINE
            </a>
          </li>
          <li className="nav-item">
            <button type="button" className="btn btn-outline-secondary">
              DAFTAR
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Akhir Navbar */}
  {/* Tentang KPU */}
  <br />
  <section id="about">
    <div className="container py-5">
      <div className="row text-center">
        <div className="col">
          <h1 className="display-4">KOMISI PEMILIHAN UMUM</h1>
          <h3>KMTETI 2023</h3>
        </div>
      </div>
      <div className="pt-4">
      <p className="">
    Komisi Pemilihan Umum Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi Fakultas Teknik Universitas Gadjah Mada yang selanjutnya disebut KPU adalah suatu komisi yang menyelenggarakan pemilu berdasarkan Undang-Undang Pemilu. 
    <br /><br />Pada tahun ini, KPU KMTETI mengusung tema TETRONICA. TETRONICA sendiri merupakan singkatan dari ....... 
    </p>
      </div>
    </div>
  </section>
  {/* Akhir Tentang KPU */}
  {/* Tugas dan Wewenang */}
  <section id="about">
    <div className="container py-5">
      <div className="row text-center">
        <div className="col">
          <h1 className="display-4">TUGAS DAN WEWENANG</h1>
          <h3>KPU KMTETI</h3>
        </div>
      </div>
      <div className="pt-4">
        <ol className="list-group list-group-numbered list-group-flush bg-transparent text-white">
          <li className="list-group-item bg-transparent text-white">Merencanakan, mengkoordinasikan, dan memantau penyelenggaraan pemilu.</li>
          <li className="list-group-item bg-transparent text-white">Menetapkan, mengkoordinasikan, menyelenggarakan, dan mengendalikan semua tahapan pelaksanaan pemilu.</li>
          <li className="list-group-item bg-transparent text-white">Menetapkan daftar pemilih.</li>
          <li className="list-group-item bg-transparent text-white">Menetapkan peserta pemilu.</li>
          <li className="list-group-item bg-transparent text-white">Merancang SPS.</li>
          <li className="list-group-item bg-transparent text-white">Menetapkan waktu, tanggal, tata cara pelaksanaan kampanye, dan pemungutan suara.</li>
          <li className="list-group-item bg-transparent text-white">Mengumumkan Ketua PH KMTETI FT UGM terpilih.</li>
          <li className="list-group-item bg-transparent text-white">Melakukan evaluasi dan pelaporan pelaksanaan pemilu.</li>
          <li className="list-group-item bg-transparent text-white">Melaksanakan tugas dan kewenangan yang diatur Undang-Undang Pemilu.</li>
          <li className="list-group-item bg-transparent text-white">Menyusun peraturan yang belum diatur dalam Undang-Undang Pemilu atas persetujuan Ketua PH KMTETI FT UGM
          </li>
        </ol>
      </div>
    </div>
  </section>
  {/* Akhir Tugas dan Wewenang */}
  {/* Our Team */}
  <section id="projects">
  <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
</div>

  </section>






  <div className="d-flex 
justify-content-center align-items-center">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
          </div>
        </div>
      </div>
    </div>
    </main>
  )
}
