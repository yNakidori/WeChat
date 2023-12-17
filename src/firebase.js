
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBp3oPSS-J-VPtSUDrk29_1tUlv-4VS1qE",
  authDomain: "wechat-c969e.firebaseapp.com",
  projectId: "wechat-c969e",
  storageBucket: "wechat-c969e.appspot.com",
  messagingSenderId: "300954100469",
  appId: "1:300954100469:web:bac4bf944551a02791dbbc"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();