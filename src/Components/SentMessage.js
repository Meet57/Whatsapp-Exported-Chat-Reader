import React from 'react'

export const SentMessage = (props) => {
    return (
        <div class="container darker">
            <code>{props.name.slice(2,-2) }</code>
            <p>{props.message}</p>
            <span class="time-left"> {props.date} - {props.time}</span>
        </div>
    )
}
