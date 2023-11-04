import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { UserAuth } from "../context/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
    Swal.fire('Please wait');
    Swal.showLoading();
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
//     <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">
//     <Image className="logo-kmteti" src="/logo-kmteti.png" alt="Bootstrap" width="44" height="58"/>
//     <Image className="logo-tetronica" src="/logo-tetronica.png" alt="Bootstrap" width="178" height="34"/>
//     </a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
//       data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
//       aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link className="nav-link" href="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" href="./caket">Calon Ketua</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" href="./about">About Us</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" href="./tatacara">Tata Cara</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" href="./timeline">Lini Masa</Link>
//         </li>
//       </ul>
//       {loading ? null : !user ? ( 
//         null
//       ):(
//         <ul className="navbar-nav d-flex flex-row mb-0 mb-lg-0">
//         <li className="nav-item">
//           <Link className="nav-link" href="./vote">Vote</Link>
//         </li>
//       </ul>
//       )}
//       <ul className="navbar-nav d-flex flex-row mb-0 mb-lg-0">
//         {loading ? null : !user ? (
//             <li className="nav-item me-3 me-lg-0">
//             <a className="nav-link" onClick={handleSignIn} role="button" aria-expanded="false">
//               Login
//             </a>
//           </li>
//         ) : (
//             <li className="nav-item me-3 me-lg-0 dropdown">
//           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown"
//             aria-expanded="false">
//             <img src={user.photoURL} className="rounded-circle" height="33"
//               alt="" loading="lazy" />
//           </a>
//           <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown1">
//             <li><Link className="dropdown-item" href="#">Lengkapi Data</Link></li>
//             <li><Link className="dropdown-item" href="#">Informasi</Link></li>
//             <li>
//               <hr className="dropdown-divider" />
//             </li>
//             <li>
//               <a className="dropdown-item" onClick={handleSignOut}>Logout</a>
//             </li>
//           </ul>
//         </li>
//         )}
        
//       </ul>
//     </div>
//   </div>
// </nav>
<nav className="navbar navbar-expand-md fixed-top py-4 bg-white opacity-50">
<div className="nav-container container-fluid d-flex mx-lg-5">
  <a className="navbar-brand" href="#">
  <Image className="logo-tetronica" src="/logo-tetronica.png" alt="Bootstrap" width="178" height="34"/>
  </a>
  <button className="menu-icon navbar-toggler shadow-none border-0 m-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="sidebar offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div className="offcanvas-header border-bottom">
      <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">Menu</h5>
      <button role="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
      <ul className="navbar-nav justify-content-end flex-grow-1 gap-lg-4 gap-md-2">
        <li className="nav-item">
          <Link className="nav-link" href="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" href="./caket">Kandidat</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" href="./about">About Us</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" href="./tatacara">Tata Cara</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" href="./timeline">Lini Masa</Link>
        </li>
      
  {loading ? null : !user ? ( 
        null
      ):(
        <li className="nav-item">
          <Link className="nav-link" href="./vote">Vote</Link>
        </li>
      )}
        {loading ? null : !user ? (
          <li className="nav-item">
            <a className="nav-link" onClick={handleSignIn} role="button" aria-expanded="false">
              Login
            </a>
          </li>
        ) : (
            <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={user.photoURL} className="rounded-circle" height="33"
              alt="" loading="lazy" />
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
             <li><Link className="dropdown-item" href="#">Lengkapi Data</Link></li>
             <li><Link className="dropdown-item" href="#">Informasi</Link></li>
             <li>
               <hr className="dropdown-divider" />
             </li>
             <li>
               <a className="dropdown-item" role="button" onClick={handleSignOut}>Logout</a>
             </li>
           </ul>
        </div>
        )}
    </ul>
    </div>
  </div>
  
</div>
</nav>
  );
};

export default Navbar;
