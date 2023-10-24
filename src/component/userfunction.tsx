import Firebase_App from "./firebasecon";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";
import Swal from "sweetalert2";

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//     measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

let firebase_app = Firebase_App();

export function login(){
  Swal.fire('Please wait')
  Swal.showLoading()

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });
  const auth = getAuth(firebase_app);
  signInWithRedirect(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential!.accessToken;
      // The signed-in user info.
      const user = (result as any).user;
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

export function logout(){
  const auth = getAuth(firebase_app);
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

const auth = getAuth(firebase_app);
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user.email);
    if(!user.email!.includes('@mail.ugm.ac.id')){
      Swal.fire('Please use your UGM email to login');
      signOut(auth).then(() => {
        }).catch((error) => {
          console.log(error);
          // An error happened.
          Swal.fire('Error occured');
        });
    } else {
      Swal.fire({
        toast: true,
        position: 'top-right',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        icon: 'success',
        title: 'Logged in as ' + user.displayName
      })
    }
  }
});