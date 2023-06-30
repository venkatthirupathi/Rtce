import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
const firebaseConfig = {
  // Your Firebase config object here
  apiKey: "AIzaSyDXlkGRDD2LoBV_-jHCiC-ObJ9wqktq1dY",
  authDomain: "code-editor-b334a.firebaseapp.com",
  projectId: "code-editor-b334a",
  storageBucket: "code-editor-b334a.appspot.com",
  messagingSenderId: "354423710434",
  appId: "1:354423710434:web:bdd205cfeb29e53231f4bb"
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
