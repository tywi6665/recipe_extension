import React, { useState, useEffect } from 'react';
import './App.css';
import Card from '../components/Card';
import firebase from "../utils/firebase";

function App() {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("recipes")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const newRecipes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setRecipes(newRecipes)
      })

    return () => unsubscribe()
  }, [])

  console.log(recipes)

  return (
    <div className="options">
      <p>This is Firebase</p>
      {recipes.map((recipe) => (
        <Card
          key={recipe.id}
          title={recipe.title}
          description={recipe.description}
        />
      ))}
    </div>
  );
}

export default App;
