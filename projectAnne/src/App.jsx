import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import addPage from './pages/addPage'
import allRecepiesPage from './pages/allRecepiesPage'
/* import feedPage from './pages/feedPage'
import profilePage from './pages/profilePage' */
import recepiePage from './pages/recepiePage'
import updatePage from './pages/updatePage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
        <Route path="/" element={allRecepiesPage} />
        <Route path="/recepie-page/:recepieId" element={recepiePage} />
        <Route path="/add-recepie" element={addPage} />
        <Route path="/edit-recepie" element={updatePage} />
        </Routes>

      </div>
    </>
  )
}

export default App
