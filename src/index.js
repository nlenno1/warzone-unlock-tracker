import React from "react"
import ReactDOM from "react-dom/client"

import Navbar from "./Navbar"
import Footer from "./Footer"
import About from "./About"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render (
    <div>
        <Navbar />
        <About />
        <Footer />
    </div>
)
