// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTH5ZDPPeLg1wqt5KllO4bhjsHZJOjdQc",

  authDomain: "chat-app-colorathe.firebaseapp.com",

  projectId: "chat-app-colorathe",

  storageBucket: "chat-app-colorathe.appspot.com",

  messagingSenderId: "694453874872",

  appId: "1:694453874872:web:e7148707bfd05eef4f844d",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
