import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAk_AC2cowYN5FQ8XgIjnrsZVm980MEP3g",
    authDomain: "workoutapp-79860.firebaseapp.com",
    databaseURL: "https://workoutapp-79860.firebaseio.com",
    projectId: "workoutapp-79860",
    storageBucket: "workoutapp-79860.appspot.com",
    messagingSenderId: "926221720818",
    appId: "1:926221720818:web:5a3fff4fd7b8a557e3846b",
    measurementId: "G-YQKB4CQXYE"
};

firebase.initializeApp(firebaseConfig);

export default firebase;