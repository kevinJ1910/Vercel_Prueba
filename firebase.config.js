// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC3Hi12ClF6qxi4fhtozD7VqKZ1yt5B7I",
  authDomain: "pruebavercel-a294e.firebaseapp.com",
  projectId: "pruebavercel-a294e",
  storageBucket: "pruebavercel-a294e.appspot.com",
  messagingSenderId: "58590338396",
  appId: "1:58590338396:web:0f8d1c9012a7353345f599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firebase Firestore and get a reference to the service
export const db = getFirestore(app);