"use client"
import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import Image from 'next/image';
import { UserAuth } from "../context/AuthContext";
import Swal from "sweetalert2";
import { useRouter } from 'next/navigation'
import "./vote.css";
import { db } from '../firebase';
import { ref, get, child, onValue, set, push, update } from 'firebase/database';

const Page = () => {
  const { user, googleSignIn, logOut, vote, start, end } = UserAuth();
  const [loading, setLoading] = useState(true);
  const [jumlah, setJumlah] = useState(0);
  const router = useRouter();

  useEffect(() => {
    var counts = ref(db, '/status');
    (function timerVote() {
      onValue(counts, (snapshot) => {
        if(snapshot.exists()) {
          setJumlah(Object.keys(snapshot.val()).length);
        }
      });
      setTimeout(timerVote, 1000);
    })();
  }, [])

  const handleVote =  async (calon) => {
    try {
      await vote(user, calon);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50))
      setLoading(false);
    };
    checkAuthentication()
  }, [user, loading]);

  return (
      <div className="vote-container">
        <section class="outer-border-vote">
        <div class="inner-border-vote" id="voting-page">
          <h3 class="heading-vote h-bottom-vote">Mohon maaf, anda belum dapat mengakses halaman ini. Pastikan telah log-in dan telah memasuki waktu pemilihan calon ketua himpunan.</h3>
          <div class="foto-calon-container-vote">
            <a id="vote-button"
                className="button"
                href="/"
                role="button">Kembali Ke Beranda</a>
          </div>
        </div>
      </section>
      </div>
    // <div>
    // {loading ? null : !user ? (
    //     <div>Please login, this is a restricted page</div>
    // ) : (
    //   <div className="mt-5 h-100 d-flex align-items-center justify-content-center">
    //   <button type="button" className="btn btn-primary" onClick={() => handleVote(0)}>Vote A</button>
    //   <button type="button" className="btn btn-primary" onClick={() => handleVote(1)}>Vote B</button>
    //   <button type="button" className="btn btn-primary" onClick={() => handleVote(2)}>Vote C</button>
    //   </div>
    // )}
    // </div>
  )
}

export default Page