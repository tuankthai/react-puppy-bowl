import { Routes, Route } from "react-router-dom";

import Home from "./Home.jsx"
import SinglePlayer from "./SinglePlayer.jsx"


export default function Main_section() {
    return (
        <div id="main-section">
            <Routes>
                
                <Route path="/details" element={<SinglePlayer />} />
                <Route path="/" element={<Home />} />

            </Routes>

        </div>

    );
}