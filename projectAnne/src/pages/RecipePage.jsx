import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function RecipePage() {
    const {RecipeId} = useParams()
    const [oneRecipe, setOneRecipe] = useState()
    

    const getRecipe = async () => {
        try {
          const response = await fetch(`http://localhost:5000/recipes/${RecipeId}`)
          if (response.ok) {
            const parsed = await response.json()
            setOneRecipe(parsed)
            console.log(parsed)
          }
        } catch (error) {
          console.log(error)
        }
      }
    
      useEffect(() => {
        getRecipe()
      }, [RecipeId])

    return oneRecipe ? (
        <>
      <h3>{oneRecipe.recipeName}</h3>
      <img src={oneRecipe.image} />
      <h3>Ingredients:</h3>
      <p>{oneRecipe.ingredients} <br /></p>
      <br />
      <h3>Directions:</h3>
      <p>{oneRecipe.directions}</p>
      <Link to={`/edit-recipe/${oneRecipe.id}`}>
      <button type='button'>Edit</button>
      </Link>
      <button type='button'>delete</button>
        </>
    ) : (
        <h1>Loading...</h1>
    )
    }
    
    
    
    
    
    
    
    export default RecipePage