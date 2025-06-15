// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyCKO8-KLEL6jfj4kbrGr_eq5YAL8sJLVKc",
  authDomain: "expense-tracker-app-35594.firebaseapp.com",
  projectId: "expense-tracker-app-35594",
  storageBucket: "expense-tracker-app-35594.firebasestorage.app",
  messagingSenderId: "394509169149",
  appId: "1:394509169149:web:2c55c46bef0890cf4ca994",
  measurementId: "G-BGPKQ63NNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

//db

export const firestore = getFirestore(app);
