import * as firebase from "firebase";
import "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNkh6XnK6DVBjfJTd-JPfoPnWjWVkzk3s",
  authDomain: "smart-waiting-list.firebaseapp.com",
  projectId: "smart-waiting-list",
  storageBucket: "smart-waiting-list.appspot.com",
  messagingSenderId: "792790364644",
  appId: "1:792790364644:web:47c780c1dff7e4598c97f1"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };

// firebase version: 8.2.3
// "firebase": ^9.14.0,
//npm install firebase
