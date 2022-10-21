import React, { useEffect, useState } from 'react'


export function FormRobot () {
    const [state, setState] = useState()
    const [message, setMessage] = useState()


    const roboMess = [
        {
            Author: 'Robot',
            Message: 'Your message is received.',
        }
    ]

    const values = []

    function handleSubmit (event) {
        event.preventDefault();
    }

    useEffect(() => {
        setState(roboMess)
    }, [])

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

    return (
        <>
            <div className="form_wrapp">
                <form className="form_class" onSubmit={handleSubmit}>
                    <input className="form_input" type="text" onChange={(value) => setState(value)} />
                        <br/>
                        <button className="form_button" onClick={handleResponse}>Click</button>
                        <div>{message}</div>
                        
                </form>
            </div>
            

            </>
    )   

}
