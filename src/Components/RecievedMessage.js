import React from 'react'

export const RecievedMessage = (props) => {
    return (
        <div class="container">
            <code>{props.name.slice(2,-2)}</code>
            <p>{props.message}</p>
            <span class="time-right"> {props.date} - {props.time}</span>
        </div>
    )
}
