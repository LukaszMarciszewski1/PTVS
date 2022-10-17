// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: "ptvs-store.firebaseapp.com",
	projectId: "ptvs-store",
	storageBucket: "ptvs-store.appspot.com",
	messagingSenderId: "954662325939",
	appId: "1:954662325939:web:2e432fd4dc273fe6e4aac6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
