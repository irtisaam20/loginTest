// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvGdFFchiO8qI8L24sHhZmHJNZhSjDgmU",
  authDomain: "login-page-fb4fc.firebaseapp.com",
  projectId: "login-page-fb4fc",
  storageBucket: "login-page-fb4fc.appspot.com",
  messagingSenderId: "723515613082",
  appId: "1:723515613082:web:1654048f0693e6d9282423"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export {
    auth
}