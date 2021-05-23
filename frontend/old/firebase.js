import firebase from 'firebase/app'
import 'firebase/auth'
 const firebaseConfig = {
    apiKey: "AIzaSyBYqXk42n6_r4T6pKnpbE0PlUBA2qYgaPY",
    authDomain: "ptvs-data.firebaseapp.com",
    projectId: "ptvs-data",
    storageBucket: "ptvs-data.appspot.com",
    messagingSenderId: "898610744915",
    appId: "1:898610744915:web:f04802ae9a1dd83d2a40a6"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.auth()