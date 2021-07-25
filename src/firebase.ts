import firebase from 'firebase/app'
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCaqygEOQ7vqJFcw3Azv2kAhh0I2hdC2t8",
    authDomain: "chat-project-d53d7.firebaseapp.com",
    projectId: "chat-project-d53d7",
    storageBucket: "chat-project-d53d7.appspot.com",
    messagingSenderId: "577131911627",
    appId: "1:577131911627:web:297cd5e7280090dcf77e4e"
  }).auth()