import { useState } from 'react'

import AllPlayers from './components/AllPlayers.jsx'
import AddNewPlayerForm from './components/AddNewPlayerForm.jsx'

import './App.css'

function App() {
  const [puppies, setPuppies] = useState([])
  

  return (
    <>
      <br/><br/>
        <h1 id="form-h1">Welcome To 2023 PuppyBowl !!!</h1> <br/><br/>
      <AddNewPlayerForm puppies={puppies} setPuppies={ setPuppies} />
      <br/><h2 id="page-h2">Meet The Puppy Players</h2><br/>
      <AllPlayers puppies={puppies} setPuppies={ setPuppies} />
    
    </>
  )
}

export default App
