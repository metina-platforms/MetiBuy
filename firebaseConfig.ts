import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence,  } from "firebase/auth";
import {  } from "firebase/auth/";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import config from "./config";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2j4l6xAsKe8WVTPm72SVT4Biy_zOp31E",
  authDomain: "metibuy.firebaseapp.com",
  projectId: "metibuy",
  storageBucket: "metibuy.firebasestorage.app",
  messagingSenderId: "455822852331",
  appId: "1:455822852331:web:1d66ba3ea474beb83cfeae",
  measurementId: "G-1V5EJ3CK15"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig, config.APP_NAME);
// const analytics = getAnalytics(app);

// Initialize Auth with persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const analytics = getAnalytics(app);

isSupported().then((supported) => {
  if (supported) {
  } else {
    console.log('Firebase Analytics is not supported in this environment.');
    // Optionally, you could provide a fallback or disable analytics-related features
  }
});