import React from "react"

export default function Navbar () {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                <div className="col l6 s12">
                    <h5 className="white-text">Footer Content</h5>
                    <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                </div>
                <div className="col l4 offset-l2 s12">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Challenges</a></li>
                        <li><a href="#">Profile</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                © 2022 Lennon Web Dev
                <a className="grey-text text-lighten-4 right" href="#!">Information Source Site</a>
                </div>
            </div>
        </footer>
    )
}