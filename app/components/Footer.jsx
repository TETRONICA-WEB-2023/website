import Swal from "sweetalert2";
import Link from "next/link";

export default function Footer() {
    
    return (
    
    <footer>
  <div className="footer-wrap">
    <div className="container first_class">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <h3 className="gotham-bold">Laporkan Segala Bentuk Kecurangan!</h3>
          <p>
            Kecurangan terkait pemilu telah diatur dalam pasal ... . Jika anda menemukan adanya kecurangan dalam bentuk apapun, silahkan melapor dengan mengakses <Link href="/laporkan">laporkan!</Link>.
          </p>
        </div>
        <div className="col-md-2 col-sm-6 d-grid col-2 mx-auto">
        </div>
        <div className="col-md-4 col-sm-6">
        <h3 className="gotham-bold">STAY CONNECTED</h3>
          <div className="col-md-12">
            <div className="standard_social_links">
              <div>
                <li className="round-btn btn-facebook">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="round-btn btn-linkedin">
                  <a href="#">
                    <i className="fab fa-linkedin-in" aria-hidden="true" />
                  </a>
                </li>
                <li className="round-btn btn-twitter">
                  <a href="#">
                    <i className="fab fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li className="round-btn btn-instagram">
                  <a href="#">
                    <i className="fab fa-instagram" aria-hidden="true" />
                  </a>
                </li>
                <li className="round-btn btn-whatsapp">
                  <a href="#">
                    <i className="fab fa-whatsapp" aria-hidden="true" />
                  </a>
                </li>
                <li className="round-btn btn-envelop">
                  <a href="#">
                    <i className="fa fa-envelope" aria-hidden="true" />
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