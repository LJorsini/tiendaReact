// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" 


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrI6P-SmuOaoyW1lxPBOZ6Q-iTc9jaQCU",
  authDomain: "rj-39585-d3c22.firebaseapp.com",
  projectId: "rj-39585-d3c22",
  storageBucket: "rj-39585-d3c22.appspot.com",
  messagingSenderId: "402369452137",
  appId: "1:402369452137:web:53b3c420646c063b2deaf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)