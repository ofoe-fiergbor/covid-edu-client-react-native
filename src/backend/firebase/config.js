import * as firebase from "firebase";
import keys from "./keys";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: keys.apiKey,
  authDomain: keys.authDomain,
  projectId: keys.projectId,
  storageBucket: keys.storageBucket,
  messagingSenderId: keys.messagingSenderId,
  appId: keys.appId,
  measurementId: keys.measurementId,
};

firebase.initializeApp(firebaseConfig);

// firebase.analytics();

export default firebase;
