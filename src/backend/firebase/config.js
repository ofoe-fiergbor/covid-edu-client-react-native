import * as firebase from "firebase";
import "firebase/auth";
import keys from "./keys";

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
