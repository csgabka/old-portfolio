import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDcfZbHr6iVOFlCRAakxqxR1EsqsAnM4Mo",
    authDomain: "csgabka-6b144.firebaseapp.com",
    databaseURL: "https://csgabka-6b144.firebaseio.com",
    projectId: "csgabka-6b144",
    storageBucket: "csgabka-6b144.appspot.com",
    messagingSenderId: "851853790698"
  };

  firebase.initializeApp(config);


  export default firebase;