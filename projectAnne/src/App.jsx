import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddPage from './pages/AddPage'
import AllRecipesPage from './pages/AllRecipesPage'
/* import FeedPage from './pages/FeedPage'
import ProfilePage from './pages/ProfilePage' */
import RecipePage from './pages/RecipePage'
import UpdatePage from './pages/UpdatePage'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Navbar/>
    </div>
      <div>
        <Routes>
        <Route path="/" element={<AllRecipesPage/>} />
        <Route path="/recipe-page/:RecipeSlug" element={<RecipePage/>} />
        <Route path="/add-recipe" element={<AddPage/>} />
        <Route path="/edit-recipe" element={<UpdatePage/>} />
        </Routes>

      </div>
    </>
  )
}

export default App
