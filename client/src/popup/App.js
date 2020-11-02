/*global chrome*/

import React, { useState, useEffect } from 'react';
import './App.css';
import Form from '../components/Form';

import firebase from "../utils/firebase";
import scrape from "../utils/scraping";

function App() {

  const [currentTabURL, setCurrentTabURL] = useState("");

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let activeTab = tabs[0].url;
    console.log(activeTab)
    if (typeof activeTab == "undefined") {
      console.log("URL not Found")
    } else {
      setCurrentTabURL(activeTab)
      // chrome.tabs.sendMessage(activeTab[0].id, { action: "scrape", index: activeTab[0].index })
    }
  });

  return (
    <div id="popup_page">
      <p>{currentTabURL}</p>
      {!currentTabURL ? (
        <>
          <h2>Current tab URL could not be extracted, so please input require information manually:</h2>
          <Form />
        </>
      ) : (
          <button onClick={() => scrape(currentTabURL)}>Create New Recipe Entry!</button>
        )}
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
