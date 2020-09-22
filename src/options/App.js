import React, { useState, useEffect } from 'react';
import './App.scss';
import Card from '../components/Card';
import firebase from "../utils/firebase";

function App() {

  const [recipes, setRecipes] = useState([])
  const [sortBy, setSortBy] = useState(["TIME_DESC"])

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("recipes")
      .orderBy(sortOptions[sortBy].column, sortOptions[sortBy].direction)
      .onSnapshot((snapshot) => {
        const newRecipes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setRecipes(newRecipes)
      })

    return () => unsubscribe()
  }, [sortBy])

  const sortOptions = {
    "TIME_ASC": { column: "timestamp", direction: "asc" },
    "TIME_DESC": { column: "timestamp", direction: "desc" },
    "TITLE_ASC": { column: "title", direction: "asc" },
    "TITLE_DESC": { column: "title", direction: "desc" }
  }

  return (
    <div id="options_page">
      <h1>Dog-Ear</h1>
      <h2>Recipe Repository</h2>
      <div>
        <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
          <option value="TIME_DESC">Newest</option>
          <option value="TIME_ASC">Oldest</option>
          <option value="TITLE_ASC">Title A-Z</option>
          <option value="TITLE_DESC">Title Z-A</option>
        </select>
      </div>
      <div className="card-container">
        {recipes.map((recipe) => (
          <Card
            key={recipe.id}
            title={recipe.title}
            description={recipe.description}
            timestamp={recipe.timestamp}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
