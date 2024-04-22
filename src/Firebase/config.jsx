
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyApQJNgnsn2bLV2Jv3WAUDM7JVMdAfdkcU",
  authDomain: "portafolio-roberto-rivas-a.firebaseapp.com",
  projectId: "portafolio-roberto-rivas-a",
  storageBucket: "portafolio-roberto-rivas-a.appspot.com",
  messagingSenderId: "209017523887",
  appId: "1:209017523887:web:0f389392897506dc11ce5a",
  measurementId: "G-2D7MSQEWJ4"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);