import React from "react";

export default function Die(props) {
    return(
        <div className="dice">
            <button className="dice-number">
                {props.value}
            </button>
        </div>
    )
}