"use client"
import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import Image from 'next/image';
import { UserAuth } from "../context/AuthContext";
import Swal from "sweetalert2";
import { useRouter } from 'next/navigation'

const Page = () => {
  const { user, googleSignIn, logOut, vote, voteCount } = UserAuth();
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  const handleVote =  async (calon) => {
    try {
      await vote(user, calon);
    } catch (error) {
      console.log(error);
    }
  }

  const handleVoteCount = async (calon) => {
    try {
      await voteCount(calon);
    } catch (error) {
      console.log(error);
    }
  }
//   const handleSignIn = async () => {
//     try {
//     Swal.fire('Please wait');
//     Swal.showLoading();
//       await googleSignIn();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSignOut = async () => {
//     try {
//       await logOut();
//     } catch (error) {
//       console.log(error);
//     }
//   };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50))
      setLoading(false);
    };
    checkAuthentication()
  }, [user, loading]);

  // if (user) {
  // } else if (!user){
  //     Swal.fire({
  //       title: 'Please login',
  //       text: 'This is a restricted page, you will be redirected to home page',
  //       icon: 'warning',
  //       confirmButtonText: 'OK'
  //     })
  //     router.push('/');
  // };

  return (
    <div>
    {loading ? null : !user ? (
        <div>Please login, this is a restricted page</div>
    ) : (
      <div className="mt-5 h-100 d-flex align-items-center justify-content-center">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      <button type="button" className="btn btn-primary" onClick={() => handleVote("A")}>Vote A</button>
      <button type="button" className="btn btn-primary" onClick={() => handleVote("B")}>Vote B</button>
      <button type="button" className="btn btn-primary" onClick={() => handleVote("C")}>Vote C</button>
      <p></p>
      <button type="button" className="btn btn-primary" onClick={() => handleVoteCount("A")}>Vote Count A</button>
      <button type="button" className="btn btn-primary" onClick={() => handleVoteCount("B")}>Vote Count B</button>
      <button type="button" className="btn btn-primary" onClick={() => handleVoteCount("C")}>Vote Count C</button>
      </div>
    )}
    </div>
  )
}

export default Page