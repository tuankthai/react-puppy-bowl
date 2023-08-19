
import React from "react";
import './AllPlayers.css'
import SinglePlayer from "./SinglePlayer.jsx"
import { Link } from "react-router-dom";



export default function PuppyBox({ puppy, setSelectedPuppyId }) {
    // console.log(puppy.imageUrl)
    function showSinglePlayer() {
        return <Link to="/details"  >{" details page  "}</Link>

    }

    return (
        <div className="playerClass">
            <h2>{puppy.name}</h2>
            <h4>{puppy.breed}</h4>
            <h4>{puppy.status}</h4>
            <img src={puppy.imageUrl} alt={puppy.name}></img>
            <div>
                <button id="{puppy.id}"
                    onClick={
                    () => {
                        console.log("see details button clicked");
                        setSelectedPuppyId(puppy.id);
                        
                    }}>
                    See Player Details</button>

                <button className="delete-button" id="{puppy.id}">Delete From Roster</button>
            </div>
        </div>

    );
}