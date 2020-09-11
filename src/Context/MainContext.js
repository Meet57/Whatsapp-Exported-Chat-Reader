import React, { createContext, useState, useEffect } from 'react'

export const MainContext = createContext()

export const MainContextProvider = (props) => {

    const [MsgThere, setMsgThere] = useState(false)
    const [Message, setMessage] = useState('')
    const [details, setDetails] = useState([])

    useEffect(() => {
        if (Message!=="") {
            var regmsg = /\d{0,2}\/\d{0,2}\/\d{2,4},\s\d{0,2}:\d{2} .[m,M] - .*:/g
            var regdate = /\d{0,2}\/\d{0,2}\/\d{2,4}/g
            var regtime = /\d{0,2}:\d{2} .[m,M]/g
            var regname = /-.*: /g

            var datatime = Message.match(regtime)
            var datadate = Message.match(regdate)
            var dataname = Message.match(regname)
            var datamsg = Message.split(regmsg)

            if (datatime.length !== dataname.length) {
                datatime = datatime.splice(-(datatime.length - 1))
                datadate = datadate.splice(-(datadate.length - 1))
                datamsg = datamsg.splice(-(datamsg.length - 1))
            }else (
                datamsg = datamsg.splice(-(datamsg.length - 1))
            )

            var i = []
            var temp = 0;
            dataname.forEach(()=>{
                i.push(temp)
                temp++
            })
                
            setDetails(...[{
                id : i,
                date : datadate,
                time : datatime,
                name : dataname,
                msg : datamsg
            }])
        }
    }, [Message,MsgThere])

    const changeMessage = (e) => {
        if(e!=='') {setMessage(e)}
        setMsgThere(true)
    }

    return (
        <MainContext.Provider
            value={{
                MsgThere,
                details,
                changeMessage
            }}
        >
            {props.children}
        </MainContext.Provider>
    )
}
