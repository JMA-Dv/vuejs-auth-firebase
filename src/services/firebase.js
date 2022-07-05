import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {

    apiKey: "AIzaSyB2qNWW2jpTpsBgIpvib_1ufEPuic48VZE",

    authDomain: "vue-g-auth.firebaseapp.com",

    projectId: "vue-g-auth",

    storageBucket: "vue-g-auth.appspot.com",

    messagingSenderId: "693255536170",

    appId: "1:693255536170:web:d325f5439a469e89488d53"

};


// Initialize Firebase
if (!firebase.apps.length) {

    firebase.initializeApp(firebaseConfig);
}

const database = firebase.firestore();
const auth = firebase.auth();
const serverTime = firebase.firestore.FieldValue.serverTimestamp;

export { database, auth, serverTime, firebase }