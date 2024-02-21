// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore'; // Import Firestore if needed
import 'firebase/auth'; // Import Auth
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuy2UNphIwKIqHaNCKvblQKHAVAGEWHwg",
  authDomain: "ride-sjare.firebaseapp.com",
  projectId: "ride-sjare",
  storageBucket: "ride-sjare.appspot.com",
  messagingSenderId: "909355138866",
  appId: "1:909355138866:web:b9163a79efde8e2fa9a12b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Initialize Auth
export const storage = getStorage(app);
