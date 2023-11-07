import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  // Initial object data representing the recipe form
  const initialRecipeData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  
  // set the initial state to the blank object
  const [recipe, setRecipe] = useState({ ...initialRecipeData });
  
  // Update state object when the form is updated
  const handleChange = (event) => {
    const { name, value } = event.target; 
    setRecipe({
      ...recipe,
      [name]: value,
      });
  }

  // Call createRecipe to add recipe object to recipe list. Set the create form back to the initial state after submission
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(recipe);
    setRecipe({...initialRecipeData})
  }

  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input id="name" name="name" type="text" value={recipe.name} onChange={handleChange} />
            </td>
            <td>
              <input name="cuisine" id="cuisine" type="text" value={recipe.cuisine} onChange={handleChange} />
            </td>
            <td>
              <input name="photo" id="photo" type="text" value={recipe.photo} onChange={handleChange} />
            </td>
            <td>
              <textarea name="ingredients" id="ingredients" value={recipe.ingredients} required={true} rows={3} onChange={handleChange} />
            </td>
            <td>
              <textarea name="preparation" id="preparation" value={recipe.preparation} required={true} rows={3} onChange={handleChange} />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
