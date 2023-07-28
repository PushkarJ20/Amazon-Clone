import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCOC2cZUxgZZg1FHtyi1adeQVv5Y56p9xM",
  authDomain: "clone-bec91.firebaseapp.com",
  projectId: "clone-bec91",
  storageBucket: "clone-bec91.appspot.com",
  messagingSenderId: "23183494737",
  appId: "1:23183494737:web:9fccf07c8f39e9a65fb270",
  measurementId: "G-TBC7K8PQP9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
