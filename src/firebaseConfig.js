
import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import 'firebase/auth';  // Nếu bạn sử dụng authentication
import { getAuth } from 'firebase/auth';
import 'firebase/firestore';  // Nếu bạn sử dụng Cloud Firestore
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCWnczijRqN82PNHh5JH-8j3YjmG_zuMGU",
    authDomain: "newbasefire.firebaseapp.com",
    databaseURL: "https://newbasefire-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "newbasefire",
    storageBucket: "newbasefire.appspot.com",
    messagingSenderId: "946691981321",
    appId: "1:946691981321:web:4dbc75e04475e1a91af8d8",
    measurementId: "G-07X0E36P9S"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
export default {firebaseApp,auth,db};

