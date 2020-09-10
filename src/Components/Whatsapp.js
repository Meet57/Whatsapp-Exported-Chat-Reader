import React, { useContext } from 'react'
import { SentMessage } from './SentMessage'
import { RecievedMessage } from './RecievedMessage'
import { MainContext } from '../Context/MainContext'

export const Whatsapp = () => {

    const { details } = useContext(MainContext)
    const { id, name, msg, time, date } = details
    var flag;

    if(id){
        flag = name[0];
    }

    return (
        <div>
            {
                id &&

                id.map((i) => {
                    return (
                        flag === name[i] ?
                        <SentMessage name={name[i]} date={date[i]} message={msg[i]} time={time[i]} />
                        :
                        <RecievedMessage name={name[i]} date={date[i]} message={msg[i]} time={time[i]} />
                    )
                })
            }
        </div>
    )
}
