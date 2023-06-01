// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0s8195ePlH3PsEaU-9697m1SgemnR08k",
  authDomain: "bet-app-b823e.firebaseapp.com",
  projectId: "bet-app-b823e",
  storageBucket: "bet-app-b823e.appspot.com",
  messagingSenderId: "726995384628",
  appId: "1:726995384628:web:a085f939d6756e4bc94d61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
