"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { UserAuth } from "../context/AuthContext";
import Swal from "sweetalert2";
import { useRouter } from 'next/navigation'

const Page = () => {
    const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);
  const router = useRouter()

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
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
      if(!user){
        Swal.fire({
            title: 'Please login',
            text: 'This is a restricted page, you will be redirected to home page',
            icon: 'warning',
            confirmButtonText: 'OK'
        }).then(() => {
            router.push('/')
        })
      }
    };
    checkAuthentication();
  }, [user]);

  return (
    <div>
    {loading ? null : !user ? (
        <div>Please login, this is a restricted page</div>
    ) : (
        <div className='p-4'>Vote</div>
    )}
    </div>
  )
}

export default Page