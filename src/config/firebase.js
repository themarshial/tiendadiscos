import { initializeApp } from "firebase/app";
import {getFirestore, initializeApp} from "firebase/firestore";

const firebaseConfig = {
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
