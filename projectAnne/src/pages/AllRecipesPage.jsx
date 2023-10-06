import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AllRecipesPage() {

    const [recipes, setRecipes] = useState([])

  async function getRecipes() {
    try {
      const response = await fetch('http://localhost:5000/recipes')
      if (response.ok) {
        const allRecipes = await response.json()
        console.log(allRecipes)
        setRecipes(allRecipes)
      }
    } catch (error) {
      console.log(error)
    }
}
useEffect(() => {
  getRecipes()
}, [])


return (
  <>
  <ul>
  {recipes.map((oneRecipe)=>{
    return (
    <li key={oneRecipe.id}>
      <Link to={`/recipe-page/${oneRecipe.slug}`}>
      <h3>{oneRecipe.recipeName}</h3>
      <img src={oneRecipe.image} />
      </Link>
      </li>
    )
    console.log(oneRecipe);
  })}
  </ul>
  </>
)
}







export default AllRecipesPage