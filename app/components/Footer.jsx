import Swal from "sweetalert2"

export default function Footer() {
    const handleReport = async () => {
        const steps = ['1', '2']
        const Queue = Swal.mixin({
        progressSteps: steps,
        confirmButtonText: 'Next',
        // optional classes to avoid backdrop blinking between steps
        showClass: { backdrop: 'swal2-noanimation' },
        hideClass: { backdrop: 'swal2-noanimation' }
        })

        await Queue.fire({
        title: 'Login Form',
        html: `<input type="text" id="subject" class="swal2-input" placeholder="Subjek">
        <textarea id="laporan" class="swal2-input" placeholder="Detail laporan"/>`,
        confirmButtonText: 'Next',
        focusConfirm: false,
        currentProgressStep: 1,
        // optional class to show fade-in backdrop animation which was disabled in Queue mixin
        showClass: { backdrop: 'swal2-noanimation' },
        preConfirm: () => {
            const login = Swal.getPopup().querySelector('#subject').value
            const password = Swal.getPopup().querySelector('#laporan').value
            if (!login || !password) {
            Swal.showValidationMessage(`Please enter appropriate value(s)`)
            }
            return { subject: subject, laporan: laporan }
        }
        })
        await Queue.fire({
        title: 'Are you sure?',
        currentProgressStep: 2,
        confirmButtonText: 'Confirm',
        // optional class to show fade-out backdrop animation which was disabled in Queue mixin
        showClass: { backdrop: 'swal2-noanimation' },
        })
        // .then((result) => {
        //   Swal.fire(`
        //     Login: ${result.value.login}
        //     Password: ${result.value.password}
        //   `.trim())
        // })
      }
    
    return (
    // <section id="footer">
    //     <div className="container">
    //     <footer className="py-3 my-4 text-center">
    //     <h3 className="">Official Account</h3>
    //     <ul className="nav justify-content-center pb-3 mb-3">
    //         <li className="nav-item"><a href="#" className="nav-link px-4"><img className="bi" width={81} height={81} src="https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png"></img></a></li>
    //         <li className="nav-item"><a href="#" className="nav-link px-4"><img className="bi" width={81} height={81} src="https://www.svgrepo.com/show/81685/line-logo.svg"></img></a></li>
    //     </ul>
    //     <p className="text-center">©2023. IT KPU KMTETI</p>
    //     </footer>
    //     </div>
    // </section>
    // <section id="footer-page">
    // <h4>Official Account</h4>
    // <div className="footer-icons">
    //     <a href="">
    //     <i className="ri-instagram-line" />
    //     </a>
    //     <a href="">
    //     <i className="ri-line-fill" />
    //     </a>
    // </div>
    // <p>© 2023 IT KPU KMTETI</p>
    // </section>
    // );
    <footer>
  <div className="footer-wrap">
    <div className="container first_class">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <h3 className="gotham-bold">Laporkan Segala Bentuk Kecurangan!</h3>
          <p>
            Kecurangan terkait pemilu telah diatur dalam pasal ... . Jika anda menemukan adanya kecurangan, silahkan laporkan dengan akses <a href="#" onClick={handleReport}>laporkan</a>.
          </p>
        </div>
        <div className="col-md-2 col-sm-6 d-grid col-2 mx-auto">
        {/* <button type="button" className="btn btn-dark btn-lg btn-block">Laporkan</button> */}
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
          Copyrigth © 2023 IT KPU KMTETI. All Rights Reserved.
        </div>
      </div>
    </div>
  </div>
</footer>

    );
}