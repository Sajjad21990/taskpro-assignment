import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2logzLx3Gnf2TUMiU50j9xrSSoyYHz-Q",
  authDomain: "blog-2199.firebaseapp.com",
  databaseURL: "https://blog-2199.firebaseio.com",
  projectId: "blog-2199",
  storageBucket: "blog-2199.appspot.com",
  messagingSenderId: "907954122784",
  appId: "1:907954122784:web:9f4f517ff7f923f5ec0c45",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.database();

export default db;
