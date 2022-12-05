import React from 'react'

export default function FormChat ({handleForm, handleCheckbox, handleName}) {

  return (
    <div>
      <form onSubmit={handleForm}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Chat name: </label>
          <input 
            type="text" 
            className="form-control" 
            id="name"
            name="name"
            onChange={handleName}
            // value={inputs.name ?? ''}
            aria-describedby="name_help" 
          />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Text</label>
          <input 
            type="text" 
            name="text"
            className="form-control"
            onChange={handleInputs}
            value={inputs.text ?? ''}
            id="exampleInputPassword1" 
          />
        </div> */}
        <div className="mb-3 form-check">
          <input 
            id="exampleCheck1" 
            name="checkbox"
            type="checkbox" 
            className="form-check-input"
            onChange={handleCheckbox}
            defaultChecked={false}
          />
          <label 
            className="form-check-label" 
            htmlFor="exampleCheck1">
              Check me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Add chat</button>
      </form>

    </div>
  )
}
