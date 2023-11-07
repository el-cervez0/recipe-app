import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState([...RecipeData]);

  // Control all recipe state from the app component
  // Add recipe to state object and pass down to RecipeCreate
  const createRecipe = (newRecipe) => {
    setRecipes((currentRecipes) => [
      ...currentRecipes,
      newRecipe
    ]);
  }
  
  // Delete recipe from state, passed down to RecipeList then RecipeView
  const deleteRecipe = (idx) =>
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe, index) => index !== idx));
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
