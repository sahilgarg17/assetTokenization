import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBQxK56LZRbVX_954VmJ-bBloNSwjgc6Go",
  authDomain: "assettokenization-f32da.firebaseapp.com",
  projectId: "assettokenization-f32da",
  storageBucket: "assettokenization-f32da.appspot.com",
  messagingSenderId: "381958944518",
  appId: "1:381958944518:web:aa6e5cd569f2f1f9ac5087",
  measurementId: "G-5H6MC04DZ5"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
