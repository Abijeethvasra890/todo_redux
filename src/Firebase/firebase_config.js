import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCMMFjVzgJPT19yNPsCej27w7PxhjcWBIM",
  authDomain: "todo-redux-49b3b.firebaseapp.com",
  projectId: "todo-redux-49b3b",
  storageBucket: "todo-redux-49b3b.appspot.com",
  messagingSenderId: "307483692632",
  appId: "1:307483692632:web:2c167504f0fa7ae130842d",
  measurementId: "G-BW9GR71Z1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore();