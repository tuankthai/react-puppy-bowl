import { useState } from 'react'


import Home from './components/Home.jsx'

import SinglePlayer from './components/SinglePlayer.jsx'
import './App.css'

function App() {

  const [selectedPuppyId, setSelectedPuppyId] = useState(null)

  return (
    <div>

      {selectedPuppyId ? (

        <SinglePlayer selectedPuppyId={selectedPuppyId} setSelectedPuppyId={setSelectedPuppyId} />
      ) : (
        
        <Home setSelectedPuppyId={setSelectedPuppyId} />

      )}

    </div>
  )
}

export default App
