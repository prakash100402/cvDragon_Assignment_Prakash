// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjy5AUyoXCvIN4RhqOoWE36-EaKg3eHSI",
  authDomain: "cvdragon-assignment.firebaseapp.com",
  projectId: "cvdragon-assignment",
  storageBucket: "cvdragon-assignment.firebasestorage.app",
  messagingSenderId: "354828494105",
  appId: "1:354828494105:web:ce6c333fb23dd2fe559188",
  measurementId: "G-JQM2LMWPGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth();