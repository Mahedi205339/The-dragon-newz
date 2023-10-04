// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUnNHImiPH2rfhfjauVslRVjaEzfPjjOA",
  authDomain: "the-dragon-newz.firebaseapp.com",
  projectId: "the-dragon-newz",
  storageBucket: "the-dragon-newz.appspot.com",
  messagingSenderId: "744877719751",
  appId: "1:744877719751:web:ec07f0caec75de8e4d3ee2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app ;