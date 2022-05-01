import React from "react"

export default function Navbar () {
    return (
        <div>
            <nav>
                <div className="nav-wrapper container">
                    <a href="#" className="brand-logo">WUT</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons"><i className="fa-solid fa-bars"></i></i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Challenges</a></li>
                        <li><a href="#">Profile</a></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Challenges</a></li>
                <li><a href="#">Profile</a></li>
            </ul>
        </div>
    )
}