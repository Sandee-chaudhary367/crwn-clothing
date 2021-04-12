import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyC9nJ61xl9__UT851o_XIJzLyywOQYgmHs",
    authDomain: "crwn-clothing-eca11.firebaseapp.com",
    projectId: "crwn-clothing-eca11",
    storageBucket: "crwn-clothing-eca11.appspot.com",
    messagingSenderId: "623001373011",
    appId: "1:623001373011:web:6268a754fb41769e7cf9a6",
    measurementId: "G-7RXSH0E2SG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;