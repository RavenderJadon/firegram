import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDs8JKxUYJRPcBT0DR3SQjC_1N3NX9ZnHA",
  authDomain: "firegram-132ba.firebaseapp.com",
  projectId: "firegram-132ba",
  storageBucket: "firegram-132ba.appspot.com",
  messagingSenderId: "833803318934",
  appId: "1:833803318934:web:a9403d4cdc4208d9c534b7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
