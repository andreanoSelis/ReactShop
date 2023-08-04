import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDFWGm7aDiKOPj4S1uHKDoticit5G1YuBk",
    authDomain: "shopeazy-shopping.firebaseapp.com",
    projectId: "shopeazy-shopping",
    storageBucket: "shopeazy-shopping.appspot.com",
    messagingSenderId: "1022938507479",
    appId: "1:1022938507479:web:18f5f4d6a076e7e23a2892"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth};