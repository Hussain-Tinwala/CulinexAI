import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import Details from './pages/Details'
import RecipeAI from './pages/RecipeAI'

function App() {

  return (
    <>
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <NavBar />
        <Routes>
          <Route 
            path='/'
            element={ <Home/>}
          />
          <Route 
            path='/favourites'
            element={ <Favourites/>}
          />
          <Route 
            path='/recipe-item/:id'
            element={ <Details/>}
          />
          <Route 
            path='/recipeAI'
            element={ <RecipeAI/>}
          />
        </Routes>
      </div>
    </div>
      
    </>
  )
}

export default App
