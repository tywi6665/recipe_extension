import React from 'react';
import './App.css';

import firebase from "../utils/firebase";

firebase.firestore().collection("times").add({
  title: "Cube",
  time_seconds: 45
})

function App() {
  return (
    <p>This is Firebase</p>
  );
}

export default App;
