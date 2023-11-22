import React from "react";
import "./caket.css";

const page = () => {
  return (
    <div class="caket-margin">
      <div class="container-calon-1-caket">
        <div class="urutan">01</div>
        <div class="nama-calon">
          <span class="header-text-caket">HANS</span>EN JUSTIN HANDIJAYA
          <br />
          <div class="jurusan">TEKNIK ELEKTRO 2022</div>
        </div>
      </div>
      <div class="container-visi-misi-1">
        <div class="visi-misi-1">
          <h2 className="visi-head">Visi :</h2>
          Menjadikan KMTETI sebagai organisasi yang mampu menjadi katalisator
          pengembangan mahasiswa yang progresif, berkelanjutan, serta memberikan
          kontribusi nyata bagi mahasiswa dan sekitarnya dengan mengedepankan
          profesionalitas dan kekeluargaan
          <h2 className="misi-head">Misi :</h2>
          <ol>
            <li>
              Memberikan dampak positif dan hubungan sinergis bagi anggota serta
              lingkungan sekitarnya.
            </li>
            <li>
              Mewujudkan bentuk kepedulian mahasiswa TETI sebagai dukungan
              edukasi dan aktualisasi diri.
            </li>
            <li>
              Mengakomodasi program dan kegiatan tepat guna dan terintegrasi
              berdasarkan keinginan dan kebutuhan mahasiswa TETI FT UGM.
            </li>
            <li>
              Mengutamakan kolaborasi yang mengedepankan etos kerja dan
              &quot;Sense of Belonging&quot; terhadap KMTETI.
            </li>
            <li>
              Mengembangkan profesionalitas untuk meningkatkan potensi dari
              mahasiswa TETI. 
            </li>
            <li>
              Memaknai dan mengedepankan KMTETI sebagai organisasi yang bersifat kekeluargaan.
            </li>
          </ol>
        </div>
        <div class="foto-calon-caket">
          <img src="kandidat/calon1.png" alt="" />
        </div>
      </div>
      <div class="container-calon-2-caket">
        <div class="nama-calon">
          <span class="header-text-caket">PIJAR</span>WIDYANARA ANDHITA HERMAWAN
          <br />
          <div class="jurusan">TEKNOLOGI INFORMASI 2022</div>
        </div>
        <div class="urutan">02</div>
      </div>
      <div class="container-visi-misi-2">
        <div class="foto-calon-caket">
          <img src="kandidat/calon2.png" alt="" />
        </div>
        <div class="visi-misi-2">
          <h2 className="visi-head">Visi :</h2>
          Membina lingkungan yang dinamis dan inklusif yang memberdayakan
          mahasiswa agar unggul dalam studi mereka dan tetap menjunjung
          integritas. Selain itu, dapat memfasilitasi kesempatan jaringan,
          workshop, dan seminar yang akan meningkatkan pengalaman pendidikan
          bagi setiap anggota.
          <h2 className="misi-head">Misi :</h2>
          <ol>
            <li>
              Meningkatkan inovasi, kolaborasi, dan pembelajaran berkelanjutan
              dalam himpunan kami.
            </li>
            <li>
              Membangun hubungan yang erat antara mahasiswa dan dosen agar
              tercipta lingkungan akademik yang terbuka dan saling mendukung.
            </li>
            <li>
              Mengadakan kegiatan pengembangan diri dan kompetisi di antara
              anggota KMTETI untuk mendorong pertumbuhan pribadi yang
              profesional.
            </li>
            <li>
              Mendukung inisiatif proyek bersama antara mahasiswa antar angkatan
              untuk industri guna memberikan pengalaman dunia yang nyata kepada
              anggota KMTETI.
            </li>
            <li>
              Menggalang kolaborasi antarprodi di dalam Fakultas Teknik maupun
              fakultas lain guna memperluas wawasan dan keterampilan lintas
              disiplin yang dinamis.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default page;
