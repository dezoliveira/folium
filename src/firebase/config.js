
import { initializeApp } from "firebase/app";
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "fir-auth-e4849.firebaseapp.com",
  projectId: "fir-auth-e4849",
  storageBucket: "fir-auth-e4849.appspot.com",
  messagingSenderId: "453384771299",
  appId: "1:453384771299:web:e7847ec1e2db532bc757d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
