import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
// import getData from '../function/realtime';
import Swal from 'sweetalert2';
import { db } from '../firebase';
import { ref, get, child, onValue, set, push, update } from 'firebase/database';
import { useRouter, redirect } from 'next/navigation';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState([]);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      hd: "mail.ugm.ac.id",
      prompt : 'select_account'
    });
    signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
    setUser(null);
  };

  // const vote = (auth, calon) => {
  //   const voteData = ref(db, '/vote/calon' + calon);
  //   const votedEmail = ref(db, '/vote/email');
  //   get(votedEmail).then((snapshot) => {
  //     if(snapshot.exists()) {
  //       var data = snapshot.val();
  //       if(Object.values(data).includes(auth.email)) {
  //         Swal.fire({
  //           title: 'You have already voted!',
  //           text: 'You can only vote once',
  //           icon: 'warning',
  //           confirmButtonText: 'OK'
  //         })
  //       } else {
  //         Swal.fire({
  //           title: 'Pernyataan',
  //           text: 'Dengan ini saya menyatakan bahwa saya memilih dengan sadar atas tanggung jawab pribadi.',
  //           icon: 'warning',
  //           showCancelButton: true,
  //           confirmButtonColor: '#3085d6',
  //           cancelButtonColor: '#d33',
  //           confirmButtonText: "Saya setuju"
  //         }).then((result) => {
  //           if (result.isConfirmed) {
  //             Swal.fire(
  //               'Terima kasih!',
  //               'Pilihan anda telah tercatat.',
  //               'success'
  //             )
  //             get(voteData).then((snapshot) => {
  //               if(snapshot.exists()) {
  //                 var voting = snapshot.val();
  //                 push(ref(db, '/vote/calon' + calon), auth.email);
  //                 push(ref(db, '/vote/email'), auth.email);
  //                 update(ref(db, '/mahasiswa/' + email.indexOf(auth.email)), {'/vote' : 1})
                  
  //               } else {
  //                 var voting = [auth.email];
  //                 set(ref(db, '/vote/calon' + calon), voting);
  //                 push(ref(db, '/vote/email'), auth.email);
  //                 update(ref(db, '/mahasiswa/' + email.indexOf(auth.email)), {'/vote' : 1})
  //               }
  //             }).catch((error) => {
  //               console.error(error);
  //             });
  //           }
  //         })
  //       }
  //     } else {
  //       var voting = [auth.email];
  //       Swal.fire({
  //         title: 'Pernyataan',
  //         text: 'Dengan ini saya menyatakan bahwa saya memilih dengan sadar atas tanggung jawab pribadi.',
  //         icon: 'warning',
  //         showCancelButton: true,
  //         confirmButtonColor: '#3085d6',
  //         cancelButtonColor: '#d33',
  //         confirmButtonText: "Saya setuju"
  //       }).then((result) => {
  //         if (result.isConfirmed) {
  //           Swal.fire(
  //             'Terima kasih!',
  //             'Pilihan anda telah tercatat.',
  //             'success'
  //           )
  //           set(ref(db, '/vote/calon' + calon), voting);
  //           set(ref(db, '/vote/email'), voting);
  //           update(ref(db, '/mahasiswa/' + email.indexOf(auth.email)), {'/vote' : 1})
  //         }
  //       })
  //     }
      
  //   }).catch((error) => {
  //     console.error(error);
  //   });
  // }

  const vote = (auth, calon) => {
    const kandidat = ["Hansen Justin Handijaya", "Pijarwidyanara Andhita Hermawan", "Bagas Pujangkoro"]
    const changeStatus = ref(db, '/status/' + auth.uid);
    get(changeStatus).then((snapshot) => {
      if(snapshot.val() != null){
        Swal.fire({
          title: 'Error!',
          text: 'You can only vote once',
          icon: 'warning',
          confirmButtonText: 'OK'
        })
        logOut();
        router.push('/');
      } else {
        Swal.fire({
          title: 'Pernyataan',
          text: 'Dengan ini saya menyatakan bahwa saya memilih kandidat ' + kandidat[calon] + ' dengan sadar dan atas tanggung jawab pribadi',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: "Saya setuju"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Terima kasih!',
              'Pilihan anda telah tercatat.',
              'success'
            )
            set(ref(db, '/votes/' + auth.uid), calon);
            set(ref(db, '/status/' + auth.uid), {"uid" : auth.uid, "email" : auth.email});
            logOut();
            router.push('/thankyou');
          }
        })
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    var fetchedData = ref(db, "/approvedEmail");
    onValue(fetchedData, (snapshot) => {
        var data = snapshot.val();
        setEmail(data);
        if(currentUser){
          if(!currentUser.email.includes('@mail.ugm.ac.id')) {
              Swal.fire({
                title: 'Invalid Account!',
                text: 'Please log in with your UGM account (mail.ugm.ac.id)',
                icon: 'warning',
                confirmButtonText: 'OK'
              })
              set(ref(db, '/pelanggaran/emailLuarUGM' + currentUser.uid), {'email' : currentUser.email, 'uid' : currentUser.uid});
              logOut();
              setUser(null);
          } else if(!data.includes(currentUser.email)) {
              Swal.fire({
                title: 'Invalid Account!',
                text: 'Akun mahasiswa non departemen TETITB',
                icon: 'warning',
                confirmButtonText: 'OK'
              })
              set(ref(db, '/pelanggaran/emailLuar' + currentUser.uid), {'email' : currentUser.email, 'uid' : currentUser.uid});
              logOut();
              setUser(null);
          } else {
              setUser(currentUser);
          }
      } else {
          setUser(null);
      }
    });
    // }, {
    //   onlyOnce: true
    // });
    
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut, vote }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
