/*global chrome*/

import React, { useState, useEffect } from 'react';
import './App.css';
import Form from '../components/Form';

import firebase from "../utils/firebase";

function App() {

  const [currentTabURL, setCurrentTabURL] = useState("");

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let activeTab = tabs[0].url;
    console.log(activeTab)
    if (typeof activeTab == "undefined") {
      console.log("URL not Found")
    } else {
      setCurrentTabURL(activeTab)
    }
  });

  return (
    <div id="popup_page">
      <Form />
      <p>{currentTabURL}</p>
    </div>

  );
}

{/* <p>{currentTabURL}</p>
{!currentTabURL ? (
  <>
    <h2>Current tab URL could not be extracted, so please input require information manually:</h2>
    <Form />
  </>
) : (
    <button>Create New Recipe Entry!</button>
  )} */}

export default App;
