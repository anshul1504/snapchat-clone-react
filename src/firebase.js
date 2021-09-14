import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBA1ylB5G4im7DDPX5fuBw6eTUh7569m1Q",
  authDomain: "snapchat-clone-yt-7b8db.firebaseapp.com",
  projectId: "snapchat-clone-yt-7b8db",
  storageBucket: "snapchat-clone-yt-7b8db.appspot.com",
  messagingSenderId: "889462933293",
  appId: "1:889462933293:web:b2bd67dcd2045ba98a35a4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
