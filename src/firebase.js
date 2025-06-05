import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA93io86rFHzmx2c5V256l9k83qwcIeRyk",
  authDomain: "proyectorestaurantes-cd714.firebaseapp.com",
  projectId: "proyectorestaurantes-cd714",
  storageBucket: "proyectorestaurantes-cd714.firebasestorage.app",
  messagingSenderId: "123164512618",
  appId: "1:123164512618:web:4e80b77610c999949f1513",
  measurementId: "G-PFVXLXV7RF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
