import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJwHlK8o5_tt3rAtvybmdPWbCxYsxNEwU",
  authDomain: "createventure-70c41.firebaseapp.com",
  projectId: "createventure-70c41",
  storageBucket: "createventure-70c41.firebasestorage.app",
  messagingSenderId: "165025297086",
  appId: "1:165025297086:web:3baf23b03569d2686ca4ef",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
