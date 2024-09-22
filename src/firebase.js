import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8k6XEiyqWX31dU5PzZXpuDPtyd7YBVic",
  authDomain: "vue-messenger-4b5b0.firebaseapp.com",
  projectId: "vue-messenger-4b5b0",
  storageBucket: "vue-messenger-4b5b0.appspot.com",
  messagingSenderId: "908257836357",
  appId: "1:908257836357:web:bc8c0ff54d3803d051522c",
  measurementId: "G-GBLMQR18Q2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app);