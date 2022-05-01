import React from "react"
import ReactDOM from "react-dom/client"

import Navbar from "./Navbar"
import Footer from "./Footer"
import About from "./About"
import WeaponDisplay from "./WeaponDisplay"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render (
    <div>
        <Navbar />
        <div className="content">
            <About />
            <WeaponDisplay />
        </div>
        <Footer />
    </div>
)
