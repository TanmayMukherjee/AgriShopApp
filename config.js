import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyDEQAZ4FsCz_s0eZoL68i8m1D6V2xQkSeY",
    authDomain: "agrishop-36505.firebaseapp.com",
    databaseURL: "https://agrishop-36505-default-rtdb.firebaseio.com",
    projectId: "agrishop-36505",
    storageBucket: "agrishop-36505.appspot.com",
    messagingSenderId: "789713582116",
    appId: "1:789713582116:web:fa62c91d86481eb21500b1"
  };

  if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }
  export default firebase.firestore()