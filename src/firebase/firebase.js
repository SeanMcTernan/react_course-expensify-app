import * as firebase from 'firebase'



  const firebaseConfig = {
    apiKey: "AIzaSyARP3OpA68XNZRkrU4rJY6SMN1bnJMKkmY",
    authDomain: "expensify-c4643.firebaseapp.com",
    databaseURL: "https://expensify-c4643.firebaseio.com",
    projectId: "expensify-c4643",
    storageBucket: "",
    messagingSenderId: "299617169692",
    appId: "1:299617169692:web:5fc145df0d5f137fc2cad9"
  }

firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export { firebase, database as default }