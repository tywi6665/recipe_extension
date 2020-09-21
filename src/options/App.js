import React, { useState, useEffect } from 'react';
import './App.css';
import Card from '../components/Card';
import firebase from "../utils/firebase";

// firebase.firestore().collection("recipes").add({
//   title: "Chicken",
//   description: "Cooked Chicken"
// })

function App() {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection("recipes")
      .onSnapshot((snapshot) => {
        const newRecipes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setRecipes(newRecipes)
      })
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
