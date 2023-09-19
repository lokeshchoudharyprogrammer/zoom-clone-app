// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzqg7iMQA_-30m1xqADsN3-yI_GAaiwzc",
  authDomain: "fir-59e0e.firebaseapp.com",
  projectId: "fir-59e0e",
  storageBucket: "fir-59e0e.appspot.com",
  messagingSenderId: "441900525894",
  appId: "1:441900525894:web:1a0c1d9a790538a3b69d47",
  measurementId: "G-TMYTFM7ERS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);