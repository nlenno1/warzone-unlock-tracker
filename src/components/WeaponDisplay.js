import React from "react"

import { WeaponData } from "../data.js";

function getGameTypeString (string) {
    let newString = string.slice(27, -4)
    return newString
}

export default function WeaponDisplay () {
    return (
        <div className="weapons-display">
            <h5>View All Weapons Below</h5>
            <div className="weaponsDisplayContainer">
            {WeaponData.map((data,key) => {
                return (
                    <div className="col s12 m7">
                        <div key={key} className="card horizontal">
                            <div className="card-stacked">
                                <div className="card-content">
                                    <p>Name : {data.name}</p>
                                    <p>Category : {data.category}</p>
                                    <p>Game : {getGameTypeString(data.game_version_img)}</p>
                                    <a href={data.data_link} target="_blank">More Information</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            )}
            </div>
        </div>
    )
}