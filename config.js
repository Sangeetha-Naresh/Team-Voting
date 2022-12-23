import firebase from 'firebase';

// add SDK Firebase


    const firebaseConfig = {
 apiKey: "AIzaSyDn8_R2DlL-7l1kn-rv76SInCqdqs8MNW0",
  authDomain: "project58-f31e2.firebaseapp.com",
  databaseURL: "https://project58-f31e2-default-rtdb.firebaseio.com",
  projectId: "project58-f31e2",
  storageBucket: "project58-f31e2.appspot.com",
  messagingSenderId: "511154109183",
  appId: "1:511154109183:web:0a735b01c12dfea98f6aca"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();