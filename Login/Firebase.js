import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBJ1ostNNs3aP0shMWlidTVaUnZBHu20eE",
    authDomain: "fir-auth-7d053.firebaseapp.com",
    projectId: "fir-auth-7d053",
    storageBucket: "fir-auth-7d053.appspot.com",
    messagingSenderId: "969528837708",
    appId: "1:969528837708:web:bfe5cab17c17b22f7396e9"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const authService = firebase.auth();

