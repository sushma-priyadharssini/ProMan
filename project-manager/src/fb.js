import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAWyd2XDKANIU84-4Wm3OflWB9HYDY6PPY",
  authDomain: "proman-f2fe0.firebaseapp.com",
  databaseURL: "https://proman-f2fe0.firebaseio.com",
  projectId: "proman-f2fe0",
  storageBucket: "proman-f2fe0.appspot.com",
  messagingSenderId: "723741034536"
};
firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;
