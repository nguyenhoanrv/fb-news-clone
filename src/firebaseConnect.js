import firebase from 'firebase/app'
import 'firebase/database'
var firebaseConfig = {
  apiKey: "AIzaSyB_HB8t1kzsmCLLXtGzQZA_xIpQVoLftbU",
  authDomain: "fb-news-1f8f4.firebaseapp.com",
  databaseURL: "https://fb-news-1f8f4.firebaseio.com",
  projectId: "fb-news-1f8f4",
  storageBucket: "fb-news-1f8f4.appspot.com",
  messagingSenderId: "196064808969",
  appId: "1:196064808969:web:dee50d5b2a488dafe968d8",
  measurementId: "G-J675XZKNF1"
};
// Initialize Firebase


export const connectData = firebase.initializeApp(firebaseConfig).database().ref('news');
