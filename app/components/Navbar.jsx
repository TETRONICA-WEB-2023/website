
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { UserAuth } from "../context/AuthContext";
import Swal from "sweetalert2";
import "./Navbar.css";

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
    <nav class="animnavbar navbar navbar-expand-md navbar-dark fixed-top p-auto">
      <div class="nav-container container-fluid d-flex mx-lg-5">
        <a class="navbar-brand" href="#"
          ><img src="/tetronica.svg" alt="Tetronica-logo"
        /></a>
        <button
          class="menu-icon navbar-toggler shadow-none border-0 m-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-top"
          data-bs-backdrop="backdrop"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header border-bottom">
            <h5 class="offcanvas-title text-white" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i class="ri-close-line"></i>
            </button>
          </div>
          <div class="offcanvas-body">
            <ul
              class="navbar-nav justify-content-end flex-grow-1 gap-lg-4 gap-md-2"
            >
              <li class="nav-item">
                <Link className="nav-link-cust" href="/">Beranda</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link-cust" href="./caket">Kandidat</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link-cust" href="./about">About Us</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link-cust" href="./tatacara">Tata Cara</Link>
              </li>
            </ul>
          </div>
        </div>
        {loading ? null : !user ? (
            <a className="nav-link-cust user-btn" onClick={handleSignIn} role="button">
              Login
            </a>
        ) : (
          <div className="nav-item dropdown py-2">
          <a className="nav-link-cust user-btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={user.photoURL} className="rounded-circle" height="25"
              alt="" loading="lazy" />
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
             <li><Link className="dropdown-item" href="/vote">Vote</Link></li>
             <li>
               <hr className="dropdown-divider" />
             </li>
             <li>
               <a className="dropdown-item" role="button" onClick={handleSignOut}>Logout</a>
             </li>
           </ul>
        </div>
        )}
        {/* <div class="nav-item dropdown py-2">
          <a
            class="nav-link-cust user-btn dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="ri-user-3-fill"></i>
          </a>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li><a class="dropdown-item" onClick={handleSignOut}>Log Out</a></li>
          </ul>
        </div> */}
      </div>
    </nav>


/* <nav className="navbar navbar-expand-md fixed-top py-1 bg-navbar" id="nav_bar">
<div className="nav-container container-fluid d-flex mx-lg-5">
  <a className="navbar-brand" href="#">
  <Image className="logo-tetronica" src="/logo-tetronica.png" alt="Tetronica" width="178" height="34"/>
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
          <Link className="nav-link-cust" href="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link-cust" href="./caket">Kandidat</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link-cust" href="./about">About Us</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link-cust" href="./tatacara">Tata Cara</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link-cust" href="./vote">Vote</Link>
        </li>

        {loading ? null : !user ? (
          <li className="nav-item">
            <a className="nav-link-cust" onClick={handleSignIn} role="button" aria-expanded="false">
              Login
            </a>
          </li>
        ) : (
            <div className="nav-item dropdown">
          <a className="nav-link-cust dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={user.photoURL} className="rounded-circle" height="25"
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
</nav> */
  );
};

export default Navbar;
