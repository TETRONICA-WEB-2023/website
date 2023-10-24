import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'dummy',
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'dummy',
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || 'dummy',
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'dummy',
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'dummy',
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || 'dummy',
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || 'dummy',
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || 'dummy',
};

const app = initializeApp(firebaseConfig);

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;