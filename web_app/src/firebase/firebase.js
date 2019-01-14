import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBDNeMUjusZCnS8ZSrRD4fn3uhzVkwKad0",
    authDomain: "officeeye-project.firebaseapp.com",
    databaseURL: "https://officeeye-project.firebaseio.com",
    projectId: "officeeye-project",
    storageBucket: "officeeye-project.appspot.com",
    messagingSenderId: "250900511306"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
let database = firebase.database();
let storage = firebase.storage();

export {
  auth,
    database,
    storage,
};