import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import Swal from 'sweetalert2';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if(currentUser){
            if(!currentUser.email.includes('@mail.ugm.ac.id')) {
                Swal.fire('Please use your institution email to login');
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
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
