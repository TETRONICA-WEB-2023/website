import Image from 'next/image';
import Swal from 'sweetalert2';

export default function Home() {
  return (
//     <main>
//   {/* Jumbotron */}
//   <br />
//   <br />
//   <br />
//   <section className="jumbotron text-center">
//     <Image
//       src="/600x600.svg"
//       alt="Calon-Ketua-1"
//       width={200}
//       height={200}
//       className="rounded-circle img-thumbnail"
//     />
//     <h1 className="gotham-bold display-4">Hello, world!</h1>
//     <p className="lead">
//       This is a simple hero unit, a simple jumbotron-style component for calling
//       extra attention to featured content or information.
//     </p>
//     <hr className="my-4" />
//     <p>
//       It uses utility classes for typography and spacing to space content out
//       within the larger container.
//     </p>
//   </section>
//   {/* Akhir Jumbotron */}
//   {/* About Us */}
//   <section id="about">
//     <div className="container">
//       <div className="row text-center">
//         <div className="col">
//           <h2>About Us</h2>
//         </div>
//       </div>
//       <div className="about-us">
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
//           reiciendis maiores eius sed ex officiis, obcaecati ullam, vitae rem,
//           numquam laborum. Voluptates ipsum aspernatur placeat voluptatem
//           eveniet odit. Ipsa, distinctio? Porro dolores ab iste facere at
//           accusantium delectus recusandae beatae neque consequatur asperiores
//           quis quia aut, nesciunt eveniet tempora magni! Natus labore doloribus
//           nemo laudantium saepe accusamus ipsam vero minus?
//         </p>
//         <a
//           className="btn btn-danger btn-lg btn-outline-dark"
//           href="#"
//           role="button"
//         >
//           Learn more
//         </a>
//       </div>
//     </div>
//   </section>
//   {/* Akhir About Us */}
//   {/* Projects */}
//   <section id="projects">
//     <div className="container">
//       <div className="row text-center">
//         <div className="col">
//             <h2>My Projects</h2>
//         </div>
//         <div className="row justify-content-between">
//           <div className="col-md-4 mb-3">
//             <div className="card">
//               <Image src="/logo-kmteti.png" className="card-img-top" alt="..." width={200} height={100}/>
//                 <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card&apos;s content.
//                 </p>
//                 <a href="#" className="btn btn-primary">
//                   Go somewhere
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4 mb-3">
//             <div className="card">
//               <Image src="/logo-kmteti.png" className="card-img-top" alt="..." width={200} height={100}/>
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card&apos;s content.
//                 </p>
//                 <a href="#" className="btn btn-primary">
//                   Go somewhere
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4 mb-3">
//             <div className="card">
//               <Image src="/logo-kmteti.png" className="card-img-top" alt="..." width={200} height={100}/>
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card&apos;s content.
//                 </p>
//                 <a href="#" className="btn btn-primary">
//                   Go somewhere
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//   <div className="d-flex 
// justify-content-center align-items-center">
//       <button
//         type="button"
//         className="btn btn-primary"
//         data-bs-toggle="modal"
//         data-bs-target="#exampleModal"
//       >
//         Launch demo modal
//       </button>

//       <div
//         className="modal fade"
//         id="exampleModal"
//         tabIndex={-1}
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//                 Modal title
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">...</div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </main>
<>
<section id="header-page">
  <div className="header-text">
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
  <div className="logo-container">
    <div className="header-logo">
      <img src="/logo-tetronica.png" alt="TETRONICA LOGO" />
    </div>
  </div>
</section>
<section id="calon-page">
  <h1 className="heading">Who's Next ??</h1>
  <div className="foto-calon-container">
    <div className="foto-calon">
      <img src="img/calon-sementara.png" alt="calon 1" />
    </div>
    <div className="foto-calon">
      <img src="img/calon-sementara.png" alt="calon 2" />
    </div>
    <div className="foto-calon">
      <img src="img/calon-sementara.png" alt="calon 3" />
    </div>
  </div>
  <button className="button">Profil Selengkapnya</button>
</section>
<section id="about-page">
  <div className="about-text">
    <p>
      TETRONICA diambil dari kata elektronika dan TETI. Elektronika artinya
      ilmu yang membahas mengenai elektron. Dari elektron kita bisa belajar
      bahwa suatu perbedaan dapat menyatukan kita dan menjadikan kita lebih
      baik. Dengan tema ini diharapkan masyarakat TETITB bisa semakin harmonis
      dan makin erat kekeluargaannya, sehingga dapat menciptakan lingkungan
      yang nyaman dan hangat bagi seluruh masyarakat TETITB.
    </p>
  </div>
  <button className="button">Baca Selengkapnya</button>
</section>
<section id="tata-cara-page">
  <h1 className="heading">Tata Cara</h1>
  <div className="video-container">
    <iframe
      src="https://youtu.be/fJ9rUzIMcZQ?si=agdxo6AqCDPF4WeO"
      frameBorder={0}
    />
  </div>
</section>
<section id="timeline-page">
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
</section>
</>

  )
}
