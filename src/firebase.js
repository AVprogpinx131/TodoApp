import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6kMZldP3mPEY3I3JlaR4c-CYuRnxtja4",
  authDomain: "todo-app-b4b38.firebaseapp.com",
  projectId: "todo-app-b4b38",
  storageBucket: "todo-app-b4b38.appspot.com",
  messagingSenderId: "520714479934",
  appId: "1:520714479934:web:87120289f7b224cc9de46f",
  measurementId: "G-WN00ZFJ1GQ",
};

const app = initializeApp(firebaseConfig);

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});
