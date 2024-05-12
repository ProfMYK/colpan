// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6oBBQ03n2frnBeENQXh4TlyrZoMwzd2o",
  authDomain: "teknofest-colpan.firebaseapp.com",
  projectId: "teknofest-colpan",
  storageBucket: "teknofest-colpan.appspot.com",
  messagingSenderId: "937975615681",
  appId: "1:937975615681:web:19a4a0b8bc26fbfe6b0440",
  measurementId: "G-C5CJZDT9HE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;