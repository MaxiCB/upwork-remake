import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// Firebase
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACt5UPkYcThYRniTlbgH3Q4O8TP8Ghvd8",
  authDomain: "upwork-remake.firebaseapp.com",
  databaseURL: "https://upwork-remake.firebaseio.com",
  projectId: "upwork-remake",
  storageBucket: "upwork-remake.appspot.com",
  messagingSenderId: "997501080723",
  appId: "1:997501080723:web:8da6474fa08dac6cb8e966",
  measurementId: "G-DPZ7GWNN4C"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
