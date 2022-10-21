import React, { useEffect, useState } from 'react'


export function FormRobot () {
    const [state, setState] = useState()

    const roboMess = [
        {
            Author: 'Robot',
            Message: 'Your message is received.'
        }
    ]

    const values = []

    function handleSubmit (event) {
        event.preventDefault();
    }

    // function handleChange (event) {
    //     setState(event.target.value)
    // }
 
    useEffect(() => {
        setState(roboMess)
    }, [])

    function handleResponse (event) {
         <div>
            {roboMess.map(function(item) {
                return <div key={item.id}>
                <h3>{item.Author}</h3>
                <p>{item.Message}</p>
                </div>
                })} 
            </div>
    }


    return (
            <div className="form_wrapp">
                <form className="form_class" onSubmit={handleSubmit}>
                    <input className="form_input" type="text" onChange={value => setState(values)} />
                        {/* <input className="form_input" type="text" onChange={handleChange} /> */}
                        <br/>
                        <button className="form_button" onClick={handleResponse}>Click</button>
                        {/* <div>{roboMess}</div> */}
                </form>

                
            </div>
        
       
    )

}
