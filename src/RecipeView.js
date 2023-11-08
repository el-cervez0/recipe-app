import React from 'react'

function RecipeView({ deleteRecipe, recipe }) {
  
  return (
    <tr>
      <td>{(recipe.name)}</td>
      <td>{(recipe.cuisine)}</td>
      <td>{(<img src={recipe.photo} alt={recipe.photo} />)}</td>
      <td className="content_td">{(recipe.ingredients)}</td>
      <td className="content_td">
        <p>{(recipe.preparation)}</p>
      </td>
      <td>
        <button name="delete" onClick={deleteRecipe}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default RecipeView