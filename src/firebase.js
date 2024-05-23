import  {initializeApp}  from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC50MYdSUJMGsz641EBkdSoPGL_nFmfmyY",
    authDomain: "quora-814dc.firebaseapp.com",      
    projectId: "quora-814dc",
    storageBucket: "quora-814dc.appspot.com",
    messagingSenderId: "712804489940",
    appId: "1:712804489940:web:99ed30312f26be15743941",
    measurementId: "G-KWFYNZSDQV"
  
  };

const firebaseApp = initializeApp(firebaseConfig); 
export const auth = getAuth(firebaseApp);
export const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);


export default db;








  