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

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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
  };

  const vote = (auth, calon) => {
    const voteData = ref(db, '/vote/calon' + calon);
    const votedEmail = ref(db, '/vote/email');
    get(votedEmail).then((snapshot) => {
      if(snapshot.exists()) {
        var data = snapshot.val();
        if(Object.values(data).includes(auth.email)) {
          Swal.fire({
            title: 'You have already voted!',
            text: 'You can only vote once',
            icon: 'warning',
            confirmButtonText: 'OK'
          })
        } else {
          Swal.fire({
            title: 'Pernyataan',
            text: 'Dengan ini saya menyatakan bahwa saya memilih dengan sadar atas tanggung jawab pribadi.',
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
              get(voteData).then((snapshot) => {
                if(snapshot.exists()) {
                  var voting = snapshot.val();
                  push(ref(db, '/vote/calon' + calon), auth.email);
                  push(ref(db, '/vote/email'), auth.email);
                } else {
                  var voting = [auth.email];
                  set(ref(db, '/vote/calon' + calon), voting);
                  push(ref(db, '/vote/email'), auth.email);
                }
              }).catch((error) => {
                console.error(error);
              });
            }
          })
        }
      } else {
        var voting = [auth.email];
        Swal.fire({
          title: 'Pernyataan',
          text: 'Dengan ini saya menyatakan bahwa saya memilih dengan sadar atas tanggung jawab pribadi.',
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
            set(ref(db, '/vote/calon' + calon), voting);
            set(ref(db, '/vote/email'), voting);
          }
        })
      }
      
    }).catch((error) => {
      console.error(error);
    });
  }

  const voteCount = (calon) => {
    const voteData = ref(db, '/vote/calon' + calon);
    get(voteData).then((snapshot) => {
      if(snapshot.exists()) {
        var data = snapshot.val();
        Swal.fire({
          title: 'Jumlah suara calon ' + calon + ':',
          text: Object.values(data).length,
          icon: 'info',
          confirmButtonText: 'OK'
        })
        return data.length;
      } else {
        Swal.fire({
          title: 'Jumlah suara calon ' + calon + ':',
          text: "0",
          icon: 'info',
          confirmButtonText: 'OK'
        })
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    var fetchedData = ref(db, "/approvedEmail");
    onValue(fetchedData, (snapshot) => {
        var data = snapshot.val();
        if(currentUser){
          if(!currentUser.email.includes('@mail.ugm.ac.id')) {
              Swal.fire({
                title: 'Invalid Account!',
                text: 'Please log in with your UGM account (mail.ugm.ac.id)',
                icon: 'warning',
                confirmButtonText: 'OK'
              })
              logOut();
          } else if(!data.includes(currentUser.email)) {
              Swal.fire({
                title: 'Invalid Account!',
                text: 'You are trying to login with an email that doesn&quot;t belong to TETITB department',
                icon: 'warning',
                confirmButtonText: 'OK'
              })
              logOut();
          } else {
              setUser(currentUser);
                  
              // Swal.fire({
              //     toast: true,
              //     position: 'top-right',
              //     showConfirmButton: false,
              //     timer: 2500,
              //     timerProgressBar: true,
              //     icon: 'success',
              //     title: 'Logged in as ' + currentUser.displayName
              // })
          }
      } else {
          setUser(null);
      }
    }, {
      onlyOnce: true
    });
    
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut, vote, voteCount }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
