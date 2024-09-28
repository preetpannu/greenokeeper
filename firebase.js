import firebase from 'firebase/app';
import 'firebase/auth'; // For authentication
import 'firebase/firestore'; // For Firestore database
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAYDSXwGl07jQ19NnxGN8taHgYOtmGTnOM",
  authDomain: "greenokeeper.firebaseapp.com",
  projectId: "greenokeeper",
  storageBucket: "greenokeeper.appspot.com",
  messagingSenderId: "561670486505",
  appId: "1:561670486505:web:cdee111b9b74119a7c3378",
  measurementId: "G-L3VTPNE09N"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = firebase.auth();
export const db = firebase.firestore();
