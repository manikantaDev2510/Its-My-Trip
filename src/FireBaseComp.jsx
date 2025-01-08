// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz17fsPkcrbOjmzf8e5HYpvusnu5QVD7A",
  authDomain: "its-my-trip.firebaseapp.com",
  projectId: "its-my-trip",
  storageBucket: "its-my-trip.firebasestorage.app",
  messagingSenderId: "583562123826",
  appId: "1:583562123826:web:5731818c0eeb0440cc7a2b",
  measurementId: "G-TS8SZ1CQ0B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication

export { auth }; // Export the `auth` object
export default app;
