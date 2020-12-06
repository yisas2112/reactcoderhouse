import firebase from 'firebase/app';
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCl3nhNHes_nPd2RSe9DvzAj1ouZvzySLE",
    authDomain: "ecomerce-coderohuse.firebaseapp.com",
    projectId: "ecomerce-coderohuse",
    storageBucket: "ecomerce-coderohuse.appspot.com",
    messagingSenderId: "232611025551",
    appId: "1:232611025551:web:80424e5fd47b0a5ff816fa",
    measurementId: "G-SCZ03B5FM2"
  })


export const getFirebase= ()=>{
    return app
}

export const getFirestore = ()=>{
    return firebase.firestore()
}

