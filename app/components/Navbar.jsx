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
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <Image className="logo-kmteti" src="/logo-kmteti.png" alt="Bootstrap" width="44" height="58"/>
    <Image className="logo-tetronica" src="/logo-tetronica.png" alt="Bootstrap" width="178" height="34"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Explore</a>
        </li>
      </ul>
      <ul className="navbar-nav d-flex flex-row ms-auto me-3">
        <li className="nav-item me-3 me-lg-0 dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false"><b>+ </b>
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </li>
        {loading ? null : !user ? (
            <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" onClick={handleSignIn} role="button" aria-expanded="false">
              Login
            </a>
          </li>
        ) : (
            <li className="nav-item me-3 me-lg-0 dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            <img src={user.photoURL} className="rounded-circle" height="33"
              alt="" loading="lazy" />
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown1">
            <li><a className="dropdown-item" href="#">Lengkapi Data</a></li>
            <li><a className="dropdown-item" href="#">Informasi</a></li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" onClick={handleSignOut}>Logout</a>
            </li>
          </ul>
        </li>
        )}
        
      </ul>
    </div>
  </div>
</nav>
//     <nav classNameName="navbar-expand-lg bg-light shadow">
//     <div classNameName="container-fluid">
//       <a classNameName="navbar-brand" href="#">
//         <Image classNameName="logo-kmteti" src="/logo-kmteti.png" alt="Bootstrap" width="0" height="0" sizes="100vw" style={{ width: '5%', height: 'auto' }}/>
//         <Image classNameName="logo-tetronica" src="/logo-tetronica.png" alt="Bootstrap" width="0" height="0" sizes="50vw" style={{ width: '20%', height: 'auto' }}/>
//       </a>
//       <button
//         classNameName="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation">
//         <span classNameName="navbar-toggler-icon" />
//       </button>
//       <div classNameName="collapse navbar-collapse" id="navbarNav">
//         <ul classNameName="navbar-nav ms-auto">
//           <li classNameName="nav-item">
//             <a classNameName="nav-link active" aria-current="page" href="#">
//               HOME
//             </a>
//           </li>
//           <li classNameName="nav-item">
//             <a classNameName="nav-link" href="#about">
//               ABOUT
//             </a>
//           </li>
//           <li classNameName="nav-item">
//             <a classNameName="nav-link" href="#">
//               TATA CARA
//             </a>
//           </li>
//           <li classNameName="nav-item">
//             <a classNameName="nav-link" href="#">
//               TIMELINE
//             </a>
//           </li>
//           <li classNameName="nav-item">
//             <button type="button" classNameName="btn btn-outline-secondary" onClick={handleSignIn}>
//               DAFTAR
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
    // <div classNameName="h-20 w-full border-b-2 flex items-center justify-between p-2">
    //   <ul classNameName="flex">
    //     <li classNameName="p-2 cursor-pointer">
    //       <Link href="/">Home</Link>
    //     </li>
    //     <li classNameName="p-2 cursor-pointer">
    //       <Link href="/about">About</Link>
    //     </li>

    //     {!user ? null : (
    //       <li classNameName="p-2 cursor-pointer">
    //         <Link href="/profile">Profile</Link>
    //       </li>
    //     )}
    //   </ul>

    //   {loading ? null : !user ? (
    //     <ul classNameName="flex">
    //       <li onClick={handleSignIn} classNameName="p-2 cursor-pointer">
    //         Login
    //       </li>
    //       <li onClick={handleSignIn} classNameName="p-2 cursor-pointer">
    //         Sign up
    //       </li>
    //     </ul>
    //   ) : (
    //     <div>
    //       <p>Welcome, {user.displayName}</p>
    //       <p classNameName="cursor-pointer" onClick={handleSignOut}>
    //         Sign out
    //       </p>
    //     </div>
    //   )}
    // </div>
  );
};

export default Navbar;
