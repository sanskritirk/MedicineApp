import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDtPklnvm_SzZw2cPOgsgbhz55Hd3-2A_Y",
    authDomain: "medicineapp-4a655.firebaseapp.com",
    databaseURL: "https://medicineapp-4a655.firebaseio.com",
    projectId: "medicineapp-4a655",
    storageBucket: "medicineapp-4a655.appspot.com",
    messagingSenderId: "552976202087",
    appId: "1:552976202087:web:44578acd387374c34097c2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();