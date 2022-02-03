// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAano6_J0bw80IMsIhbseLUU_YvzJ4srHs",
  authDomain: "reactmydic.firebaseapp.com",
  projectId: "reactmydic",
  storageBucket: "reactmydic.appspot.com",
  messagingSenderId: "324042305295",
  appId: "1:324042305295:web:d20ca437d495004c3e187a",
  measurementId: "G-QNV7FYHPBX",
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
