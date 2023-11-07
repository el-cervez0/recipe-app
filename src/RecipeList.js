import React from "react";
import RecipeView from "./RecipeView"

function RecipeList({ deleteRecipe, recipes }) {

// Recipe list contains the table headers but uses map function to loop over
// all the recipes and append to a new <td>
 
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {recipes.map((recipe, index) => (
            <RecipeView 
              deleteRecipe={() => deleteRecipe(index)}
              index={index}
              key={index}
              recipe={recipe}
            />
            ))}
          </tbody>
      </table>
    </div>
  );
}

export default RecipeList;