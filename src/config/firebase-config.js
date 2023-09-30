// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrskEpLof5u3Y8kmhe9tmFZK9wynz_8u8",
  authDomain: "expense-tracker-bba2c.firebaseapp.com",
  projectId: "expense-tracker-bba2c",
  storageBucket: "expense-tracker-bba2c.appspot.com",
  messagingSenderId: "949067395855",
  appId: "1:949067395855:web:c9d6135fd4e5fb451c847a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy