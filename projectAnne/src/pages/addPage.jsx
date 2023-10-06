import { useEffect, useState } from 'react'


function AddPage() {

    const [recipeName, setRecipeName] = useState('')
    const [image, setImage] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [directions, setDirections] = useState('')
    const [slug, setSlug] = useState('')
    const [id, setId] = useState('')

    const onSubmit = async event => {
        event.preventDefault()
        const payload = {recipeName,image,ingredients,directions, slug, id}

        try {
            const response = await fetch("http://localhost:5000/recipes", {
                method: 'POST',
                body: JSON.stringify(payload),
              headers: {
                'Content-type': 'application/json',
            },
            }
            )
            {console.log(payload)}
              console.log(response)
            } catch (error) {
              console.log(error)
            }
        }


    return (
        <>
        <form onSubmit={onSubmit}>
        <label >
            Recipe Name
        <input type="text" name="recipeName" value={recipeName} onChange={event => setRecipeName(event.target.value)} required/>
        </label>

        <label>
            Image URL
        <input type="text" name="image" value={image} onChange={event => setImage(event.target.value)} required/>
        </label>

        <label>
            Ingredients
        <input type="text" name="ingredients" value={ingredients} onChange={event => setIngredients(event.target.value)} required/>
        </label>

        <label >
            Directions
        <input type="text" name="directions" value={directions} onChange={event => setDirections(event.target.value)} required/>
        </label>

        <label >
            Recipe name separated by "-"
        <input type="text" name="slug" value={slug} onChange={event => {setSlug(event.target.value), setId(event.target.value)}} required/>
        </label>

    <button type="submit">Add Recipe</button>
        </form>
        </>
    )
    }
    
    
    
    
    
    
    
    export default AddPage