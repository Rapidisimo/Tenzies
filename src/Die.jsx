import React from "react";

export default function Die(props) {
    
    const heldValue = props.held ? "dice-held" : ""

    return(
        <div className={`dice ${heldValue}`}>
            <button className="dice-number">
                {props.value}
            </button>
        </div>
    )
}