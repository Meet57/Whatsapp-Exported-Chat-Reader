import React, { useState, useContext } from 'react'
import { MainContext } from '../Context/MainContext'

export const SetMessage = () => {

    const [message, setMessage] = useState("")
    const { changeMessage } = useContext(MainContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        changeMessage(message)
    }

    const sampleData = (e) => {
        e.preventDefault()
        setMessage(`10/09/2020, 5:28 pm - Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more.
        10/09/2020, 5:29 pm - Person A: Hello
        10/09/2020, 5:29 pm - Person B: Hi
        10/09/2020, 5:29 pm - Person A: How are you ?
        10/09/2020, 5:29 pm - Person B: I'm fine
        10/09/2020, 5:29 pm - Person B: How about you.?
        10/09/2020, 5:29 pm - Person A: I am doing good ☺️
        `)
    }

    return (
        <center>
            <form onSubmit={handleSubmit} >
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="10"
                />
                <br />
                <br />
                <button type="submit" style={{backgroundColor : "#9dff96"}} >Submit</button>
                <br/>
                <br/>
                <button onClick={sampleData} style={{backgroundColor : "#e9ffa6"}} >Load Sample Data</button>
            </form>
        </center>
    )
}
