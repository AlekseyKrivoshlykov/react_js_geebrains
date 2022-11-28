import { Button, TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'


export function FormRobot () {
    const [state, setState] = useState()
    const [message, setMessage] = useState()
    const roboMess = [
        {
            Author: 'Robot',
            Message: 'Your message is received.',
        }
    ]
    const ref = useRef(null)
    const values = []


    function handleSubmit (event) {
        event.preventDefault();
    }

    function handleResponse (event) {
        setMessage(
                <div>
                    {roboMess.map(function(item, index) {
                        return (
                            <div key={index}>
                                <h3>{item.Author}</h3>
                                <p>{item.Message}</p>
                            </div>
                        )
                    })} 
                </div>
        ) 
    }

    useEffect(() => {
        setState(roboMess)
        ref.current?.focus()
    }, [])

    return (
        <>
            <div className="form_wrapp">
                {/* <form className="form_class" onSubmit={handleSubmit}> */}
                <form className="form_class">
                    {/* <TextField autoFocus margin="normal" id="outlined-basic" label="Введите текст" variant="outlined" onChange={(value) => setState(value)}/> */}
                    <input ref={function(input) {
                        if(input != null) {
                            input.focus();
                        }
                    }} onChange={(value) => setState(value)}></input>
                    <br/>
                    <div className="form_button">
                        <Button margin="normal" variant="contained" onClick={handleResponse}>Click please</Button>
                    </div>
                    <div>{message}</div>    
                </form>
            </div>
            

            </>
    )   

}
