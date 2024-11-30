// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdk51hf7MGLqMClmCqM9pjs65MxF9tir4",
    authDomain: "coffee-store-1eceb.firebaseapp.com",
    projectId: "coffee-store-1eceb",
    storageBucket: "coffee-store-1eceb.firebasestorage.app",
    messagingSenderId: "152708835558",
    appId: "1:152708835558:web:8879fdea08c7e0166ef327"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);