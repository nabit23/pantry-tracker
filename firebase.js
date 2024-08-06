// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3Kehoz7NpGRwDNnsTxv3H7VBt04N0cKo",
  authDomain: "inventory-management-6d62f.firebaseapp.com",
  projectId: "inventory-management-6d62f",
  storageBucket: "inventory-management-6d62f.appspot.com",
  messagingSenderId: "337066148462",
  appId: "1:337066148462:web:e7e50f59d491654c1f1c7f",
  measurementId: "G-1SR0SBC5R7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}
