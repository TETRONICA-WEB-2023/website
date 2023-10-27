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
  {/* OUR TEAM */}
  <section id="members">
    <div className="container py-5">
      <div className="row text-center">
        <div className="col pb-5">
          <h2>OUR TEAM</h2>
        </div>
      </div>
      {/* Ketua dkk */}
      <div className="row justify-content-evenly">
        <div className="col-md-3 mb-3">
          <div className="card">
            <img src="/placeholder ano/subaru.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p>
           </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <img src="/placeholder ano/hajime.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p>
           </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="/placeholder ano/miooo.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p>
           </div>
          </div>
        </div>
      </div>
      {/* Akhir Ketua dkk */}
      {/* Anggota divisi */}
      <div className="row justify-content-evenly">
        {/* car_acara */}
        <div className="col-4">
          <div id="car_acara" className="carousel slide">
            <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#car_acara"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#car_acara"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#car_acara"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
            </div>
            <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/placeholder ano/mole.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>Some representative placeholder content for the first slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="/placeholder ano/sapi.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>Some representative placeholder content for the second slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="/placeholder ano/seal.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>Some representative placeholder content for the third slide.</p>
                    </div>
                  </div>
            </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#car_acara"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#car_acara"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
          </div>
        </div>
        {/* akhir car_acara */}
        {/* car_it */}
        <div className="col-4">
          <div id="car_it" className="carousel slide">
            <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#car_it"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#car_it"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#car_it"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
            </div>
            <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/placeholder ano/mole.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>Some representative placeholder content for the first slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="/placeholder ano/sapi.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>Some representative placeholder content for the second slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="/placeholder ano/seal.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>Some representative placeholder content for the third slide.</p>
                    </div>
                  </div>
            </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#car_it"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#car_it"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
          </div>
        </div>
        {/* akhir car_it */}
        {/* car_ddd */}
        <div className="col-4">
          <div id="car_ddd" className="carousel slide">
            <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#car_ddd"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#car_ddd"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#car_ddd"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
            </div>
            <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/placeholder ano/mole.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>Some representative placeholder content for the first slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="/placeholder ano/sapi.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>Some representative placeholder content for the second slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="/placeholder ano/seal.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>Some representative placeholder content for the third slide.</p>
                    </div>
                  </div>
            </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#car_ddd"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#car_ddd"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
          </div>
        </div>
        {/* akhir car_ddd */}
        {/* car_perkap */}
        <div className="col-4">
          <div id="car_perkap" className="carousel slide">
            <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#car_perkap"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#car_perkap"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#car_perkap"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
            </div>
            <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/placeholder ano/mole.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>Some representative placeholder content for the first slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="/placeholder ano/sapi.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>Some representative placeholder content for the second slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="/placeholder ano/seal.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>Some representative placeholder content for the third slide.</p>
                    </div>
                  </div>
            </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#car_perkap"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#car_perkap"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
          </div>
        </div>
        {/* akhir car_perkap */}
        {/* car_pr */}
        <div className="col-4">
          <div id="car_pr" className="carousel slide">
            <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#car_pr"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#car_pr"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#car_pr"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
            </div>
            <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/placeholder ano/mole.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>Some representative placeholder content for the first slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="/placeholder ano/sapi.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>Some representative placeholder content for the second slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="/placeholder ano/seal.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>Some representative placeholder content for the third slide.</p>
                    </div>
                  </div>
            </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#car_pr"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#car_pr"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
          </div>
        </div>
        {/* akhir car_pr */}
      </div>
      {/* Akhir Anggota divisi */}
    </div>
  </section>
  {/* Akhir OUR TEAM */}

{/* footer */}
  <footer>
    <div></div>
      <h2 className="footer-contact">Official Account</h2>
      <img src="" href="" alt="Instagram"></img>
      <img src="" href="" alt="line"></img>
    </div>
  </footer>
{/* Akhir footer */}

  {/* button gajelas */}
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
  {/* akhir button gajelas */}
    </main>
  )
}
