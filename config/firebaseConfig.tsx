import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBwZeLwAsh0QKSqEH5iwl1TKXfKsjY5d4c",
  authDomain: "prueba-final-7dcfa.firebaseapp.com",
 
  databaseURL: "https://prueba-final-7dcfa-default-rtdb.firebaseio.com",
  projectId: "prueba-final-7dcfa",
  storageBucket: "prueba-final-7dcfa.firebasestorage.app",
  messagingSenderId: "392662118136",
  appId: "1:392662118136:web:9d78e75e02f8af3e46d50d",
  measurementId: "G-HSC5QC5T1N"
};


const app = initializeApp(firebaseConfig);


export const db = getDatabase(app);