import firebase from 'firebase/compat/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAFd3iAS9EGFcqa3S-pAg2DSmv7ZMvw3BI",
  authDomain: "realexpo-ba407.firebaseapp.com",
  databaseURL: "https://realexpo-ba407-default-rtdb.firebaseio.com/",
  projectId: "realexpo-ba407",
  storageBucket: "realexpo-ba407.appspot.com",
  messagingSenderId: "721260117817",
  appId: "1:721260117817:web:08f57b64815cb5a9d972e8",
  measurementId: "G-PXGBZVVJM7"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = getDatabase();
export { db }