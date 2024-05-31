// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd0pOqWL5U980KL2XGUkNnnB0e49q-WYA",
  authDomain: "vite-contact-da0f6.firebaseapp.com",
  projectId: "vite-contact-da0f6",
  storageBucket: "vite-contact-da0f6.appspot.com",
  messagingSenderId: "150147851602",
  appId: "1:150147851602:web:7c6a08b40edec29474868b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);