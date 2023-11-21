import Swal from "sweetalert2";
import Link from "next/link";
import "./footer.css";

export default function Footer() {
    
    return (
    
    <footer>
  <div className="footer-wrap">
    <div className="container first_class">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <span className="gotham heading">Laporkan Segala Bentuk Kecurangan!</span>
          <p>
            Kecurangan terkait pemilu telah diatur dalam ketentuan KPU KMTETI. Jika anda menemukan adanya kecurangan dalam bentuk apapun, silahkan melapor dengan mengakses <Link href="/laporkan">laporkan!</Link>.
          </p>
        </div>
        {/* <div className="col-md-2 col-sm-6 d-grid col-2 mx-auto">
        </div> */}
        <div className="col-md-4 col-sm-6 bagtwo">
        <span className="gotham heading">STAY CONNECTED</span>
          <div className="col-md-12 ">
            <div className="standard_social_links  social">
              <div>
                <li className="round-btn btn-whatsapp">
                  <a href="https://www.youtube.com/@kpukmteti23">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li className="round-btn btn-instagram">
                  <a href="https://www.instagram.com/kpu.kmteti/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==">
                    <i className="fab fa-instagram" aria-hidden="true" />
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div className="clearfix" />
          {/* <div className="col-md-12">
            <h3 style={{ textAlign: "right" }}>Stay Connected</h3>
          </div> */}
        </div>
      </div>
    </div>
    <div className="row">
      <div className="container-fluid">
        <div className="copyright">
          {" "}
          Copyright © 2023 IT KPU KMTETI. All Rights Reserved.
        </div>
      </div>
    </div>
  </div>
</footer>

    );
}