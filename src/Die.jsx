import React from "react";

export default function Die(props) {
    return(
        <div className="dice">
            <p className="dice-number">
                {props.value}
            </p>
        </div>
    )
}