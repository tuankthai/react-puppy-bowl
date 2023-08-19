
import { useState } from 'react'

import AllPlayers from './AllPlayers.jsx'
import AddNewPlayerForm from './AddNewPlayerForm.jsx'


import '../App.css'

export default function Home({ setSelectedPuppyId }) {
    const [puppies, setPuppies] = useState([])

    return (
        <div className="home">
            <br /><br />
            <h1 id="form-h1">Welcome To 2023 PuppyBowl !!!</h1> <br /><br />
            <AddNewPlayerForm puppies={puppies} setPuppies={setPuppies} />
            <br /><h2 id="page-h2">Meet The Puppy Players</h2><br />
            <AllPlayers puppies={puppies} setPuppies={setPuppies} setSelectedPuppyId={setSelectedPuppyId} />

        </div>
    );
}
