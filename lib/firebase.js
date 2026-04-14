// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7jKMOMD19pEpOR2IlsEk5kpi2PVl68e4",
  authDomain: "first-bridge-b181e.firebaseapp.com",
  databaseURL: "https://first-bridge-b181e-default-rtdb.firebaseio.com",
  projectId: "first-bridge-b181e",
  storageBucket: "first-bridge-b181e.firebasestorage.app",
  messagingSenderId: "794560311662",
  appId: "1:794560311662:web:359bb42b58ef134d83517f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
