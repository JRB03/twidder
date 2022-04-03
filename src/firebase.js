// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2vnXAae5zXmfoh2eaQffp0bJf0OhakvY",
  authDomain: "twidder-32bb6.firebaseapp.com",
  projectId: "twidder-32bb6",
  storageBucket: "twidder-32bb6.appspot.com",
  messagingSenderId: "933571690644",
  appId: "1:933571690644:web:fb803566432ec521587481"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);