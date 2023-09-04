// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxGvevespVoZtp7XK5Dv7lNHrldTYdWNM",
  authDomain: "netflixgpt-253b3.firebaseapp.com",
  projectId: "netflixgpt-253b3",
  storageBucket: "netflixgpt-253b3.appspot.com",
  messagingSenderId: "91110629410",
  appId: "1:91110629410:web:ef41832df057f1e6382a7b",
  measurementId: "G-XWNM06F9GJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Putting the auth here so it wont be called again and again in Sign Up and Sign In component
export const auth = getAuth();