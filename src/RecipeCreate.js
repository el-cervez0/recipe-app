import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialRecipeData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  
  const [recipe, setRecipe] = useState({ ...initialRecipeData });
  
  const handleChange = (event) => {
    const { name, value } = event.target; 
    setRecipe({
      ...recipe,
      [name]: value,
      });
  }

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
              <input id="name" style={{ width: '100%' }}  name="name" type="text" placeholder={"Name"} value={recipe.name} onChange={handleChange} />
            </td>
            <td>
              <input name="cuisine" id="cuisine" type="text" placeholder={"Cuisine"} value={recipe.cuisine} onChange={handleChange} />
            </td>
            <td>
              <input name="photo" id="photo" type="text" placeholder={"URL"} value={recipe.photo} onChange={handleChange} />
            </td>
            <td>
              <textarea name="ingredients" id="ingredients" placeholder={"Ingredients"} value={recipe.ingredients} required={true} rows={3} onChange={handleChange} />
            </td>
            <td>
              <textarea name="preparation" id="preparation" placeholder={"Preparation"} value={recipe.preparation} required={true} rows={3} onChange={handleChange} />
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
