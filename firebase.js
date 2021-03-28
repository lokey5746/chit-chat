import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCM69xoTZVelvF7Y02-GxbjztANK9DDd_E",
  authDomain: "whatsapp2-a2a48.firebaseapp.com",
  projectId: "whatsapp2-a2a48",
  storageBucket: "whatsapp2-a2a48.appspot.com",
  messagingSenderId: "591215986274",
  appId: "1:591215986274:web:77f023483eb520eaedf33b",
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
