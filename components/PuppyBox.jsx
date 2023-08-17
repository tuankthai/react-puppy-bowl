
import React from "react";
import './AllPlayers.css'

export default function PuppyBox({ puppy }) {
    console.log(puppy.imageUrl)
    return (
        <div className="playerClass">
            <h2>{puppy.name}</h2>
            <h4>{puppy.breed}</h4>
            <h4>{puppy.status}</h4>
            <img src={puppy.imageUrl} alt={puppy.name}></img>
            <div>
                <button className="details-button" id="{puppy.id}">See Player Details</button>

                <button className="delete-button" id="{puppy.id}">Delete From Roster</button>
            </div>
        </div>

    );
}