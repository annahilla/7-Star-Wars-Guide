import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKvEsvRPtvPB7xgceou4F2Ymx6xHhYS48",
  authDomain: "star-wars-guide-85540.firebaseapp.com",
  projectId: "star-wars-guide-85540",
  storageBucket: "star-wars-guide-85540.firebasestorage.app",
  messagingSenderId: "201838764791",
  appId: "1:201838764791:web:82bd63d451e74616f729f2",
  measurementId: "G-EZFEHGCKP2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth, analytics };