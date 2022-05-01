import React from "react"
import ReactDOM from "react-dom/client"
import "./style.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./components/About"
import WeaponDisplay from "./components/WeaponDisplay"

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
