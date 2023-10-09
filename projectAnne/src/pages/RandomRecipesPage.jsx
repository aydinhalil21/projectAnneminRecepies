 import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function RandomRecipesPage() {

    /* const [recipes, setRecipes] = useState([]) */ 
     const [users, setUsers] = useState([])

   /* async function getRecipes() {
    try {
      const response = await fetch('http://localhost:5000/recipesRandom?_embed=users')
      if (response.ok) {
        const allRecipes = await response.json()
        setRecipes(allRecipes)
      }
    } catch (error) {
      console.log(error)
    }
}
useEffect(() => {
  getRecipes()
}, [])  */


 async function getUsers() {
    try {
      const response = await fetch('http://localhost:5000/users?_embed=recipesRandom')
      if (response.ok) {
        const allUsers = await response.json()
        console.log(allUsers);
        setUsers(allUsers)
      }
    } catch (error) {
      console.log(error)
    }
}
useEffect(() => {
    getUsers()
}, []) 


 return (
  <>
  <ul> 
      {users.map((oneUser)=>{
        return(
            <div key={oneUser.id}>
                <img src={oneUser.image}/>
                <p>{oneUser.name}</p>
                {oneUser.recipesRandom.map((userRecipe)=>{
                    return (
                    <div key={userRecipe.id}>
                    <Link to={`/recipe-page/${userRecipe.id}`}>
                    <h3>{userRecipe.recipeName}</h3>
                    <img src={userRecipe.image} />
                    </Link>
                    </div>
                    )
                })}
            </div>
        )
    })}  

{/* {users?.recipesRandom.map((oneUser)=>{
        return(
            <div key={oneUser.id}>
                <img src={oneUser.image}/>
                <p>{oneUser.recipeName}</p>
            </div>
        )
    })}   */}



   {/* {recipes.map((oneRecipe)=>{
    return (
    <li key={oneRecipe.id}>
      <Link to={`/recipe-page/${oneRecipe.id}`}>
        <p>{users[oneRecipe.userId].name}</p>
      <h3>{oneRecipe.recipeName}</h3>
      <img src={oneRecipe.image} />
      </Link>
      </li>
    )
  })}  */}
  </ul>
  </>
)
}







export default RandomRecipesPage