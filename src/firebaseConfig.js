
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
