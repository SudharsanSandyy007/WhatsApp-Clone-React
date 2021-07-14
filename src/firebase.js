import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABZdySu5xFYvxcPf_5TcPlmJWRrOgsOzA",
  authDomain: "whatsapp-clone-cde92.firebaseapp.com",
  projectId: "whatsapp-clone-cde92",
  storageBucket: "whatsapp-clone-cde92.appspot.com",
  messagingSenderId: "470800079457",
  appId: "1:470800079457:web:db1e0700c8557202bc6820",
  measurementId: "G-2EPC5X78RX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
