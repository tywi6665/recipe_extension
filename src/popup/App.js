import React from 'react';
import './App.css';
import Form from '../components/Form';

import firebase from "../utils/firebase";

function App() {

  return (
    <div id="popup_page">
      <Form />
      {/* <p>{page}</p> */}
    </div>
  );
}

export default App;
