// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqDtBIBrK8ZFu3ADXMG7M4lH7-AkR8jAM",
  authDomain: "connects-16ada.firebaseapp.com",
  projectId: "connects-16ada",
  storageBucket: "connects-16ada.appspot.com",
  messagingSenderId: "453003027939",
  appId: "1:453003027939:web:d63334e5dd726686b6ecd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

const db = getFirestore(app);

export {auth,db};
