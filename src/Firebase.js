// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDSjtfu28NOXSmcZKjmKqxxEeAf7xSdzdg",
    authDomain: "linkdin-clone-523be.firebaseapp.com",
    projectId: "linkdin-clone-523be",
    storageBucket: "linkdin-clone-523be.appspot.com",
    messagingSenderId: "206954016897",
    appId: "1:206954016897:web:7813d06133b450a87f1d80",
    measurementId: "G-X5CZQKDL1B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);              //use to connect everything

  const db = firebaseApp.firestore();

  export { db }