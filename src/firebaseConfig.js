// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrHUaX5jrAT0l3hYMkDihkiNZ5Mp8mjKw",
  authDomain: "prueba-pruebas-unitarias.firebaseapp.com",
  projectId: "prueba-pruebas-unitarias",
  storageBucket: "prueba-pruebas-unitarias.appspot.com",
  messagingSenderId: "75952376308",
  appId: "1:75952376308:web:647c3cd4b71aec0ca851a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;