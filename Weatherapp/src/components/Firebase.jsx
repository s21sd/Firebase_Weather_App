// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnOvE5EtWOfXQEHkDmeHhHpIls71EmCiE",
    authDomain: "weatherapp-b97c4.firebaseapp.com",
    projectId: "weatherapp-b97c4",
    storageBucket: "weatherapp-b97c4.appspot.com",
    messagingSenderId: "919529874160",
    appId: "1:919529874160:web:11634acf290a244b385835"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;