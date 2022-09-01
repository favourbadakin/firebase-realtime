import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDzoMsmYshPh4FJ-XSkLzj_5mX8Z5rno2Y",
    authDomain: "realtime-learn.firebaseapp.com",
    projectId: "realtime-learn",
    storageBucket: "realtime-learn.appspot.com",
    messagingSenderId: "77361912333",
    appId: "1:77361912333:web:d6cb0d27b62d9040cb9344",
    databaseURL: "https://realtime-learn-default-rtdb.europe-west1.firebasedatabase.app/"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getDatabase(app);