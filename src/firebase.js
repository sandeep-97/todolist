import { firebase } from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apikey: '',
    authdomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messageSenderId: '',
    apiId: '',
})

export { firebaseConfig as firebase }