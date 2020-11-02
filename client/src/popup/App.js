/*global chrome*/
import React, { useState, useEffect } from 'react';
import RecipeEntry from "../components/RecipeEntry";
// import Form from '../components/Form';
import '../App.scss';

import socketIOClient from "socket.io-client";
// import firebase from "../utils/firebase";
// import scrape from "../utils/scraping";

const ENDPOINT = "http://127.0.0.1:4001";

function App() {

  const [loadClient, setLoadClient] = useState(true);
  const [currentTabURL, setCurrentTabURL] = useState("");
  const [recipe, setRecipe] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let activeTab = tabs[0].url;
      console.log(activeTab)
      if (typeof activeTab == "undefined") {
        console.log("URL not Found")
      } else {
        setCurrentTabURL(activeTab)
      }
    });
  }, [])

  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.on("connect", function () {
  //     socket.emit("from_client", currentTabURL);
  //   });

  //   socket.on("from_server", data => {
  //     console.log('Connection to server established.', data);
  //     setRecipe(data)
  //   });
  //   // CLEAN UP THE EFFECT
  //   return () => socket.disconnect();
  //   //
  // }, [currentTabURL, isClicked]);

  const scrapeData = () => {
    setIsClicked(true)
    const socket = socketIOClient(ENDPOINT);
    socket.on("connect", function () {
      socket.emit("from_client", currentTabURL);
    });

    socket.on("from_server", data => {
      console.log('Connection to server established.', data);
      setRecipe(data)
    });
    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
  }

  return (

    <div id="popup_page">
      {/* <p>{currentTabURL}</p> */}
      <header>
        <div className="dog-image">
          <img src="./graphics/dog.png" alt="Woof woof" />
        </div>
        <h2>Dog-Ear Recipe Extension</h2>
      </header>
      {loadClient && currentTabURL && isClicked ?
        (<>
          {Object.keys(recipe).length ?
            <>
              <div className="back">
                <button onClick={() => setIsClicked(false)}></button>
              </div>
              <h3><em>Example Recipe Entry:</em></h3>
              <RecipeEntry
                recipe={recipe}
                key={recipe.id}
                url={currentTabURL}
              />
            </>
            :
            <>
              <div className="spinner"></div>
              <p className="spinner-p"><em>Scraping data...</em></p>
            </>
          }
        </>)
        :
        <div className="buttons">
          <div className="link">
            <button onClick={() => scrapeData()}>Create Recipe Entry</button>
          </div>
          <div className="link">
            <a href="./index.html" target="_blank">Go to Recipe Repository</a>
          </div>
        </div>
      }
    </div>

  );
}

export default App;
