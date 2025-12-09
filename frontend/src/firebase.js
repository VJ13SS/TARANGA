// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNLt7rYUkaGQ2D1k5LNuEQ1jbi3CiybnI",
  authDomain: "taranja-68104.firebaseapp.com",
  projectId: "taranja-68104",
  storageBucket: "taranja-68104.firebasestorage.app",
  messagingSenderId: "614779064474",
  appId: "1:614779064474:web:855fafb42b723b0ce18f23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)