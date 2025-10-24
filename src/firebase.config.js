import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIAadOf2xW1D-_9BKvdeIe0u_QYZa5-bg",
  authDomain: "greennest-dbd36.firebaseapp.com",
  projectId: "greennest-dbd36",
  storageBucket: "greennest-dbd36.firebasestorage.app",
  messagingSenderId: "770320246339",
  appId: "1:770320246339:web:45a77a7b3cb663801f16f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;