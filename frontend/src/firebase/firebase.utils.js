import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import "firebase/firestore";
// import "firebase/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAOwRE_wD6Ps1O-aTg85VjAZQrigpPXRZY",
  authDomain: "crio-chatbot.firebaseapp.com",
  projectId: "crio-chatbot",
  storageBucket: "crio-chatbot.appspot.com",
  messagingSenderId: "233971428651",
  appId: "1:233971428651:web:43e39dd53a38b53eb8a96e",
  measurementId: "G-HLB1KQYVBC",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const firestore = firebase.firestore();
export { auth, db, storage, firestore };
