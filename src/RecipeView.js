import React from 'react'

function RecipeView({ deleteRecipe, recipe }) {

// Compile the table data for each object in the recipe list
  return (
    <tr>
      <td>{(recipe.name)}</td>
      <td>{(recipe.cuisine)}</td>
      <td>{(<img src={recipe.photo} alt={recipe.photo} />)}</td>
      <td className="content_td">{(recipe.ingredients)}</td>
      <td className="content_td">{(recipe.preparation)}</td>
      <td>
        <button name="delete" onClick={deleteRecipe}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default RecipeView
