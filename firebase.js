// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAipBTnIyF6LRAB1qVBpgk3QB2kDyXGAXY",
  authDomain: "communa-app.firebaseapp.com",
  projectId: "communa-app",
  storageBucket: "communa-app.appspot.com",
  messagingSenderId: "560608143962",
  appId: "1:560608143962:web:878116b30b9dc742ca4663",
  measurementId: "G-QT3HM8TW8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

export { auth, db, analytics }