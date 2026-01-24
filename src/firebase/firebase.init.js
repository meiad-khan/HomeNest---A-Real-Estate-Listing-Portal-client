// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcgDbnMQFuYHYAhyYOlwp9WXMVvw0LluQ",
  authDomain: "real-estate-app-41feb.firebaseapp.com",
  projectId: "real-estate-app-41feb",
  storageBucket: "real-estate-app-41feb.firebasestorage.app",
  messagingSenderId: "737034946123",
  appId: "1:737034946123:web:0f1539ba9a5bd433832fce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);