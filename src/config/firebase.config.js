// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ8wyc3E-Cw2ZV1UUxmFuX58MKwKIyWMw",
  authDomain: "fc-app-2c219.firebaseapp.com",
  projectId: "fc-app-2c219",
  storageBucket: "fc-app-2c219.appspot.com",
  messagingSenderId: "1053424660626",
  appId: "1:1053424660626:web:0cfe6702b394e9d45d364b",
  measurementId: "G-QFX9MMCJZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);

// const analytics = getAnalytics(app);

export { authentication };