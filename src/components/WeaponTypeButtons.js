import React from "react"

export default function WeaponTypeButtons () {
    return (
        <div className="container">
            <h5>Click a weapon type to jump to it</h5>
            <div>
                <a className="waves-effect waves-light btn-large">Assault Rifles (AR)</a>
                <a className="waves-effect waves-light btn-large">Submachine Guns (SMG)</a>
                <a className="waves-effect waves-light btn-large">Light Machine Guns (LMG)</a>
                <a className="waves-effect waves-light btn-large">Shotguns</a>
                <a className="waves-effect waves-light btn-large">Precision Rifles</a>
                <a className="waves-effect waves-light btn-large">Sniper Rifles</a>
                <a className="waves-effect waves-light btn-large">Pistols</a>
                <a className="waves-effect waves-light btn-large">Launchers</a>
                <a className="waves-effect waves-light btn-large">Melee</a>
            </div>
        </div>
    )
}