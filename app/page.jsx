import Image from 'next/image'

export default function Home() {
  return (
    <main>
  {/* Jumbotron */}
  <br />
  <br />
  <br />
  <section className="jumbotron text-center">
    <Image
      src="/600x600.svg"
      alt="Calon-Ketua-1"
      width={200}
      height={200}
      className="rounded-circle img-thumbnail"
    />
    <h1 className="gotham-bold display-4">Hello, world!</h1>
    <p className="lead">
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
    <hr className="my-4" />
    <p>
      It uses utility classes for typography and spacing to space content out
      within the larger container.
    </p>
  </section>
  {/* Akhir Jumbotron */}
  {/* About Us */}
  <section id="about">
    <div className="container">
      <div className="row text-center">
        <div className="col">
          <h2>About Us</h2>
        </div>
      </div>
      <div className="about-us">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          reiciendis maiores eius sed ex officiis, obcaecati ullam, vitae rem,
          numquam laborum. Voluptates ipsum aspernatur placeat voluptatem
          eveniet odit. Ipsa, distinctio? Porro dolores ab iste facere at
          accusantium delectus recusandae beatae neque consequatur asperiores
          quis quia aut, nesciunt eveniet tempora magni! Natus labore doloribus
          nemo laudantium saepe accusamus ipsam vero minus?
        </p>
        <a
          className="btn btn-danger btn-lg btn-outline-dark"
          href="#"
          role="button"
        >
          Learn more
        </a>
      </div>
    </div>
  </section>
  {/* Akhir About Us */}
  {/* Projects */}
  <section id="projects">
    <div className="container">
      <div className="row text-center">
        <div className="col">
            <h2>My Projects</h2>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-4 mb-3">
            <div className="card">
              <Image src="/logo-kmteti.png" className="card-img-top" alt="..." width={200} height={100}/>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <Image src="/logo-kmteti.png" className="card-img-top" alt="..." width={200} height={100}/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <Image src="/logo-kmteti.png" className="card-img-top" alt="..." width={200} height={100}/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
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
